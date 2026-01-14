---
title: atbetaflight 使用教程
description: atbetaflight 固件的安装和使用指南
---

本教程介绍如何使用 atbetaflight 固件。

---

## 准备工作

需要安装：

- Artery DFU 驱动
- Betaflight Configurator（特定版本）

<div style="display: flex; gap: 1rem; flex-wrap: wrap; margin: 1.5rem 0;">
  <a href="https://we.tl/t-JOhrAN9Des" style="border: 1px solid var(--sl-color-accent); padding: 0.75rem 1.5rem; border-radius: 8px; text-decoration: none;">下载 Artery DFU 驱动</a>
  <a href="https://github.com/betaflight/betaflight-configurator-nightlies/releases/tag/v20230129.363" style="border: 1px solid var(--sl-color-accent); padding: 0.75rem 1.5rem; border-radius: 8px; text-decoration: none;">下载 Betaflight Configurator</a>
</div>

---

## 下载固件

从 [GitHub Releases](https://github.com/flightng/atbetaflight/releases) 下载最新固件。

---

## 固件对照表

根据飞控型号选择固件：

| MCU | 飞控 | 固件 |
|-----|------|------|
| AT32F435VMT7 | EMSRPROTO2 / 重山1.2 | betaflight-xxx-EMSRPROTO2 |
| AT32F437VGT7 | EMSRPROTO3 | betaflight-xxx-EMSRPROTO3 |
| AT32F435RGT7 | NEUTRONRCF435SE | betaflight-xxx-NEUTRONRCF435SE |
| AT32F435CGU7 | NEUTRONRCF435MINI | betaflight-xxx-NEUTRONRCF435MINI |

---

## 烧录固件

1. 按住飞控 BOOT 按钮，连接 USB
2. 打开 Betaflight Configurator
3. 点击 `Firmware Flasher`
4. 点击 `Load local firmware` 选择固件
5. 按照正常 F4 飞控方式刷写

---

## 注意事项

:::caution[重要]
- DIY 空白 MCU 飞控需要先使用雅特力工具刷写用户系统数据（仅一次）
- 成品飞控无需此步骤
- 如果飞控不在 DFU 模式，请勿勾选"无重启序列"选项
:::
