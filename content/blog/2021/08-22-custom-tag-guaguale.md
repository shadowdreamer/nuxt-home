---
title: 100行js写一个刮刮乐效果的自定义元素
date: 2021-12-08
tags:
  - web
---

Check out the live demo [here](https://guaguale.netlify.app/).

> vanillajs写的，具体代码按f12查看吧

## 创建游戏界面：

克隆一个模板元素的内容。
随机生成奖品文本（SSR、SR、R、恭喜发财或祝您好运）。
将奖品文本添加到隐藏的元素中。

## 设置画布：

获取canvas元素并设置2D绘图上下文。
绘制灰色背景和"刮开涂层赢大奖"的文字。

## 实现刮奖功能：

设置鼠标事件监听器（onmousedown、onmousemove、onmouseleave、onmouseenter、onmouseup）。
实现绘制线条的函数drawLine。
使用globalCompositeOperation = 'destination-out'来实现刮开效果。

## 触摸设备支持：

添加触摸事件监听器（ontouchstart），为移动设备提供支持。

## 性能优化：

使用锁定机制（locker）来控制绘制频率，避免过于频繁的重绘。

## 检查刮开程度：

实现checkPick函数（虽然在选中的代码中没有完整显示），用于检查用户刮开的面积。