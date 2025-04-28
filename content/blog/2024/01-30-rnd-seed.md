---
title: 预约随机数并到期开奖
date: 2024-01-30
tags:
  - boring
---

用来预约一个随机数并在预定时间后到期开奖。

## 一些链接

[Github](https://github.com/shadowdreamer/hash-seed)

[在线随机数预约](https://rngseed.dovahkiin.top/)

## 主要工具链

- 使用wrangler将api部署至cloudflare的worker上。

- vite+vue+tailwindcss打包一个简单前端

- 数据接入FaunaDB，简单数据存储

## 主要思路

在请求时记录预约时间，在worker上生成uuid当作临时的不公开的随机数，sha-256算出hash后一起存储到FaunaDB, 返回前端文档id和随机种子的hash。

在预定日期结束后才能再次请求获取到uuid。

用hash来验证种子生成时的一致性。

## 结论

卵用没有