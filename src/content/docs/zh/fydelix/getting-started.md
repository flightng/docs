---
title: 快速开始
description: 快速上手 Fidelity X 固件
---

本指南将帮助你快速上手 Fidelity X 固件。

---

## 准备工作

### 硬件需求

- 支持的飞控板（[查看列表](/zh/fydelix/supported-boards/)）
- USB 数据线
- 电脑（Windows/macOS/Linux）

### 软件需求

| 软件 | 用途 | 获取方式 |
|------|------|----------|
| Artery DFU 驱动 | 固件烧录 | [雅特力官网](https://www.arterytek.com/cn/support/index.jsp) |
| Chrome/Chromium 浏览器 | 连接配置器 | 需要支持 WebUSB/WebSerial |

:::note[浏览器要求]
需要使用支持 WebUSB/WebSerial 的浏览器，推荐使用 Chrome 或基于 Chromium 的浏览器（如 Edge、Brave 等）。
:::

---

## 安装步骤

### 1. 下载固件

从 [GitHub Releases](https://github.com/flightng/firmware/releases) 下载对应你飞控板的固件。

固件命名格式：`fydelix-<飞控型号>-<版本>-<提交号>.hex`

:::tip
不确定选哪个固件？查看 [支持的硬件](/zh/fydelix/supported-boards/) 找到你的飞控型号。
:::

### 2. 烧录固件

详细的烧录步骤请参考 [固件烧录指南](/zh/fydelix/flashing/)。

**简要步骤：**

1. 按住飞控 **BOOT** 按钮
2. 连接 USB 线到电脑
3. 松开 BOOT 按钮
4. 在 Configurator 中选择本地固件文件
5. 点击烧录按钮

### 3. 首次连接

烧录完成后，使用 Configurator 连接飞控：

1. 点击右上角的 **连接** 按钮
2. 在弹出菜单中选择 **FlightNG FC**

---

## 基本设置

### 检查飞控朝向

首先确认飞控朝向是否正确：

1. 观察 Configurator 中显示的飞机姿态
2. 移动实际飞机，确认虚拟飞机跟随一致
3. 如果不一致，点击 Status 页面下方飞机显示框右上角的 **Edit** 按钮
4. 选择正确的飞控板朝向
5. 保存并重启，直至朝向正确为止

### 校准 IMU

首飞前必须校准加速度计：

1. 将飞机放在**水平面**上
2. 点击飞机显示框右上角的 **校准** 按钮
3. 等待校准完成
4. 重启飞控

:::caution[注意]
校准期间请勿移动飞机！
:::

### 配置电机

:::danger[安全警告]
配置电机前请**务必卸下螺旋桨**！需要在电调上电的情况下进行。
:::

在电机（Motor）页面进行以下设置：

1. **配置电机极对数**：根据你的电机规格设置
2. **配置螺旋桨转向**：设置正确的旋转方向
3. **检查电机顺序和朝向**：
   - 在 Motor Map 上确认电机位置和转向与预期相符
   - 如果不相符，可以直接在 Motor Map 上编辑
   - 点击对应位置的电机可以修改其转向
   - 通过旁边的箭头可以更改电机位置
   - 调整直至与预期完全相符

### 配置接收机

在接收机上电的情况下：

1. 进入 Stick Preview 页面查看摇杆状态
2. 移动遥控器摇杆，确认显示与实际操作一致
3. 如果不一致，点击右上角的 **Edit** 按钮进行修改：
   - **映射通道**：调整通道对应关系
   - **极性**：修正方向反向的问题
   - **死区**：调整摇杆死区大小
4. **AuxFunction** 部分可以为指定通道绑定功能：
   - 解锁（Arm）
   - 预解锁（Pre-arm）
   - 自稳模式（Angle Mode）
   - 其他功能...

---

## 首飞检查清单

飞行前请确认：

- [ ] 飞控朝向正确
- [ ] IMU 已校准
- [ ] 电机方向和顺序正确
- [ ] 螺旋桨安装正确（注意正反桨）
- [ ] 遥控器通道映射正确
- [ ] 解锁开关已配置
- [ ] 电池电压正常
- [ ] Failsafe 测试通过

---

## 下一步

- [配置 PID 参数](/zh/fydelix/configuration/pid-tuning/) - 优化飞行手感
- [了解 Failsafe](/zh/fydelix/configuration/failsafe/) - 确保飞行安全

:::note[关于滤波器]
Fidelity X 固件采用硬编码滤波器设计，用户无需也不应当自行调整滤波器参数。
:::

---

## 常见问题

### 无法进入 DFU 模式

- 确保按住 BOOT 按钮后再连接 USB
- 检查 USB 线是否为数据线（非纯充电线）
- 确认已安装雅特力 DFU 驱动
- 尝试其他 USB 端口

### Configurator 无法连接

- 确认使用的是 Chrome 或基于 Chromium 的浏览器
- 检查浏览器是否支持 WebUSB/WebSerial
- 尝试重新连接 USB

### 电机不转

- 确认已成功解锁（Arm）
- 检查电机极对数设置是否正确
- 检查电调连接和供电
