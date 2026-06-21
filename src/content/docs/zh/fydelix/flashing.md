---
title: 固件烧录
description: 如何将 Fidelity X 固件烧录到飞控板上
---

本指南介绍如何将 Fidelity X 固件烧录到飞控板上。

---

## 烧录方式

| 方式 | 适用场景 | 难度 |
|------|----------|------|
| 调参器在线刷写 | 日常更新（**推荐**） | ⭐ 简单 |
| Artery ISP Programmer | 手动刷写 / 救砖（AT32） | ⭐⭐ 中等 |
| SWD 调试器 | 开发调试 | ⭐⭐⭐ 高级 |

---

## 用调参器刷写（推荐）

[Fidelity X Configurator](https://app.flightng.com) 内置了基于 WebUSB 的 DFU 刷写功能，无需额外软件。

### 步骤

1. 用浏览器打开 [app.flightng.com](https://app.flightng.com)（首页 Home）
2. 让飞控进入 **DFU 模式**：
   - 若飞控已运行 Fidelity X：连接后在 **状态（Status）** 页点击 **重启进 Bootloader**，或在 CLI 输入 `bootloader`
   - 全新/无固件：**断电 → 按住 BOOT → 接 USB → 松开 BOOT**
3. 在首页 DFU 区域点击 **连接 DFU 设备**
4. 选择固件来源：
   - **在线固件**：选择目标机型与版本（Release / Candidate / Development）
   - **本地文件**：选择本地 `.hex` 固件
5. 点击刷写，等待完成

:::note[Windows 驱动]
Windows 下首次使用可能需要安装 [Artery DFU / WinUSB 驱动](https://www.arterytek.com/cn/support/index.jsp)，浏览器才能识别 DFU 设备。
:::

---

## 进入 DFU 模式

无论用哪种方式，都需要先让飞控进入 DFU 模式。

**硬件方式**（适用于全新芯片或无法启动的飞控）：

1. **断开**飞控所有电源
2. **按住** BOOT 按钮
3. **连接** USB 线到电脑
4. **松开** BOOT 按钮

**CLI 方式**（飞控已运行 Fidelity X）：

```bash
bootloader
```

飞控会重启并自动进入 DFU 模式。

在 Windows 设备管理器中应能看到 `AT32 DFU Device`（AT32 飞控）。若显示为"未知设备"，请安装 Artery DFU 驱动。

---

## 使用 Artery ISP Programmer（备选，AT32）

如果不使用调参器，也可以用雅特力官方工具刷写 AT32 飞控：

1. 下载 [Artery ISP Programmer](https://www.arterytek.com/cn/support/index.jsp)
2. 让飞控进入 DFU 模式（见上）
3. 打开 Artery ISP Programmer，选择 **USB** 接口并 **Connect**
4. 在 Download 标签页加载 `.hex` 固件
5. 点击 **Download** 开始烧录

---

## 首次烧录空白芯片

:::note[重要]
全新的空白 AT32 芯片首次烧录时，需要先写入**用户系统数据（USD）**。成品飞控通常已预先写入，无需此步骤。
:::

1. 在 Artery ISP Programmer 中选择 "User System Data"
2. 加载对应芯片的 USD 文件
3. 点击 Download
4. 然后再烧录固件

---

## SWD 调试器烧录

适用于开发调试，需要 SWD 调试器（如 J-Link、DAP-Link）。

| 调试器 | 飞控 |
|--------|------|
| SWDIO | SWDIO |
| SWCLK | SWCLK |
| GND | GND |

---

## 固件选择

固件命名格式：`fydelix-<固件目标名>-<版本>-<提交哈希>.hex`（例：`fydelix-NeutronRCF435MINI-0.2.0-8ab496d.hex`）。

请根据你的 **MCU** 和 **陀螺仪** 型号选择正确的固件目标，完整对照表见 [支持的硬件](/zh/fydelix/supported-boards/)。

:::caution[请勿刷错固件]
带 `_legacy` 后缀对应 **ICM42688P**，不带后缀对应 **BMI270**。刷错会导致陀螺仪无法工作、飞控不能解锁。
:::

---

## 烧录后验证

通过 USB 虚拟串口（或调参器 CLI 页）连接，波特率 **115200**。

正常启动后会显示命令提示符 `msh />`，输入 `status` 查看系统状态。

---

## 故障排除

### 无法进入 DFU 模式

- 确保 USB 线是数据线（非纯充电线）
- 先按住 BOOT 按钮再连接 USB
- 尝试不同的 USB 端口
- Windows 下确认已安装 Artery DFU 驱动

### 烧录失败

- 检查固件与飞控型号（MCU + 陀螺仪）是否匹配
- 尝试全片擦除后重新烧录
- 检查 USB 连接是否稳定

### 烧录后无法启动

- 确认固件目标型号正确
- 若陀螺仪为 ICM42688P，尝试 `_legacy` 版本固件
- 检查串口波特率设置

---

## 备份与恢复

恢复出厂设置（命令行）：

```bash
config reset
config save
```

:::danger[警告]
这将清除所有自定义设置！建议先在调参器 **状态（Status）** 页用 **备份（YAML）** 功能导出当前配置。
:::
