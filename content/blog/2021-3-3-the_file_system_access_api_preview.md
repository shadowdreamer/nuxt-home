---
title: 用 file system access api 批量储存文件
date: 2021-03-03
categories:
  - 技术
tags:
  - web
---

最近有个热门项目，在 github.com 的域名后面加 1s，就可以打开一个编辑器，查看项目代码，非常好用，寿命+1s.
其中，可以右键某个文件夹，把这个文件夹目录下的文件下载到本地，会弹两个授权提醒，`允许网站查看文件` 和 `将所作更改保存至xxx` , 但是没有疯狂的文件保存对话框，对于保存多个文件非常有用。找了一下找到还是 draft 状态的 `File System Access API`。 吐槽一下一开始在 MDN 搜索，找到了 `File and Directory Entries API`， 根本不是一个东西。

## 对 File System Access API 进行一个瞧

大致看了下，这个api可以读取文件和文件夹，并且枚举文件夹内容，修改文件并保存，所有操作都是 promise 形式， 因此写下来一堆 await，另外 api 有 [Secure Contexts](https://w3c.github.io/webappsec-secure-contexts/) 限制，只能在https环境下使用。另外这个api只支持 chrome 86+ ，说不定以后还会改掉。

> wicg 草案：<https://wicg.github.io/file-system-access/>
>
> MDN 的文档： <https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API>
>
> web.dev 的介绍： <https://web.dev/file-system-access/>

api使用大概都是这样：

* 选取文件/文件夹
  * 打开文件夹 `window.showDirectoryPicker()`
  * 打开文件 `window.showOpenFilePicker()`
  
  可以传入option 配置是否多选和可选的文件MIME TYPE，根据参数可能返回`[FileSystemFileHandle]`数组
  
  * 保存文件对话框 `window.showSaveFilePicker()` 参数基本同上，限定保存格式,返回 `FileSystemFileHandle`

* 通过 Picker 得到对应的 Handler 接口 ，用 Handler 对象进行相应的操作
  * `FileSystemHandle` 下面两个的"父接口" ，有下面两个接口的一些通用方法
  * `FileSystemFileHandle` 操作单独一个文件的接口

    使用 `getFile()` 读取文件，使用 `createWritable()` 获得文件的 `FileSystemWritableFileStream`接口，操作文件。

  * `FileSystemDirectoryHandle` 文件夹接口，方法比较多。

    * `FileSystemDirectoryHandle.getFileHandle()` 读取文件/新建文件，返回 `FileSystemWritableFileStream`

    * `FileSystemDirectoryHandle.getDirectoryHandle()` 读取子目录/新建目录，进行一个套娃。

    * `FileSystemDirectoryHandle.keys()` 遍历目录。

  * `FileSystemWritableFileStream` 写入文件的接口。
  
    `write` 写入二进制文件，`seek`写入光标导航，`truncate` 把文件调整为指定大小（字节）， `close` 关闭文件，并存到硬盘上，不调用这个，文件的改动不会存到硬盘上。

接口大概是这样，很多细节还不是太清楚，这里要批量存储文件的话主要靠循环调用 `FileSystemDirectoryHandle.getFileHandle()` 进行文件的储存，同一个页面对同一个文件夹只需要授权一次，所以体验比一大堆保存文件弹框要好点。

## 保存单个文件的示例

``` js
document.querySelector('#btn').addEventListener('click',async ()=>{
    const blob = await (await fetch('https://files.catbox.moe/agyqq6.png')).blob()
    const dirHandler = await window.showDirectoryPicker()
    const fileHandler = await dirHandler.getFileHandle('test.png',{create:true})
    const writable = await fileHandler.createWritable()
    await writable.write(blob);
    await writable.close()
})
```

## 用户脚本

实际用起来比模拟a标签点击的批量下载方便一些，以后用户脚本能干更多坏事了。

批量下载tumblr图片：<https://github.com/shadowdreamer/jioben/blob/master/others/tumblr-image-download.user.js>

简单测试，效果ok，chrome版本88,因为差不多是自用脚本，所以没有做低版本浏览器兼容。
