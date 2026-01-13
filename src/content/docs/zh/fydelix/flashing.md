---
title: 固件烧录
description: 如何将 Fidelity X 固件烧录到飞控板上
---

:::caution[页面未完成]
本页面内容尚未完成，仅供参考。
:::

本指南介绍如何将 Fidelity X 固件烧录到飞控板上。

---

## 烧录方式

| 方式 | 适用场景 | 难度 |
|------|----------|------|
| USB DFU | 日常更新 | ⭐ 简单 |
| Artery ISP | 首次烧录/救砖 | ⭐⭐ 中等 |
| SWD | 开发调试 | ⭐⭐⭐ 高级 |

---

## USB DFU 模式（推荐）

这是最常用的固件烧录方式。

### 准备

1. 下载 [Artery DFU 驱动](https://www.arterytek.com/cn/support/index.jsp)
2. 下载 [Artery ISP Programmer](https://www.arterytek.com/cn/support/index.jsp)
3. 下载对应飞控的固件

### 步骤

#### 1. 进入 DFU 模式

1. **断开**飞控所有电源
2. **按住** BOOT 按钮
3. **连接** USB 线到电脑
4. **松开** BOOT 按钮

#### 2. 验证 DFU 模式

在 Windows 设备管理器中应该看到：

```
通用串行总线控制器
└── AT32 DFU Device
```

:::caution[驱动问题]
如果显示为"未知设备"，请安装 Artery DFU 驱动。
:::

#### 3. 烧录固件

1. 打开 **Artery ISP Programmer**
2. 选择 **USB** 接口
3. 点击 **Connect** 连接
4. 在 Download 标签页加载 `.hex` 固件
5. 点击 **Download** 开始烧录
6. 等待烧录完成

#### 4. 完成

断开 USB，重新连接，飞控将运行新固件。

---

## 使用 CLI 进入 DFU

如果飞控已运行 Fidelity X，可以通过命令进入 DFU 模式：

```bash
bootloader
```

飞控会重启并自动进入 DFU 模式。

---

## 首次烧录空白芯片

:::note[重要]
全新的空白芯片首次烧录时，需要先写入**用户系统数据（USD）**。成品飞控通常已预先写入，无需此步骤。
:::

1. 在 Artery ISP Programmer 中选择 "User System Data"
2. 加载对应芯片的 USD 文件
3. 点击 Download
4. 然后再烧录固件

---

## SWD 调试器烧录

适用于开发调试，需要 SWD 调试器（如 J-Link、DAP-Link）。

### 接线

| 调试器 | 飞控 |
|--------|------|
| SWDIO | SWDIO |
| SWCLK | SWCLK |
| GND | GND |

---

## 固件选择参考

| 飞控板 | 固件名称 |
|--------|----------|
| NeutronRC F435 SE | `fydelix-NeutronRCF435SE` |
| NeutronRC F435 MINI | `fydelix-NeutronRCF435MINI` |
| Hummingbird 200RS | `fydelix-Hummingbird200RS` |
| Hummingbird 255 V1 | `fydelix-Hummingbird255V1REVA` |
| StingerBee | `fydelix-StingerBee` |

---

## 烧录后验证

### 连接串口

- 波特率：**115200**
- 数据位：8
- 停止位：1

### 检查启动

正常启动后会显示命令提示符：`msh />`

输入 `status` 查看系统状态。

---

## 故障排除

### 无法进入 DFU 模式

- 确保 USB 线是数据线
- 尝试不同的 USB 端口
- 按住 BOOT 按钮后再连接 USB

### 烧录失败

- 检查固件与飞控型号是否匹配
- 尝试全片擦除后重新烧录
- 检查 USB 连接是否稳定

### 烧录后无法启动

- 确认固件型号正确
- 尝试 `_legacy` 版本固件
- 检查串口波特率设置

---

## 备份与恢复

### 恢复出厂设置

```bash
param reset
param save
```

:::danger[警告]
这将清除所有自定义设置！
:::
