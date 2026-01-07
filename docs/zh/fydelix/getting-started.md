# 快速开始

本指南将帮助你快速上手 Fydelix 固件。

---

## 准备工作

### 硬件需求

- 支持的飞控板（[查看列表](supported-boards.md)）
- USB 数据线
- 电脑（Windows/macOS/Linux）

### 软件需求

| 软件 | 用途 | 获取方式 |
|------|------|----------|
| Artery ISP Programmer | 固件烧录 | [雅特力官网](https://www.arterytek.com/cn/support/index.jsp) |
| 串口终端 | 配置调试 | PuTTY / Tera Term / minicom |

---

## 安装步骤

### 1. 下载固件

从 [GitHub Releases](https://github.com/flightng/fydelix/releases) 下载对应你飞控板的固件。

固件命名格式：`fydelix-<飞控型号>-<版本>-<提交号>.hex`

!!! tip "提示"
    不确定选哪个固件？查看 [支持的硬件](supported-boards.md) 找到你的飞控型号。

### 2. 烧录固件

详细的烧录步骤请参考 [固件烧录指南](flashing.md)。

**简要步骤：**

1. 按住飞控 **BOOT** 按钮
2. 连接 USB 线到电脑
3. 松开 BOOT 按钮
4. 使用 Artery ISP Programmer 烧录固件

### 3. 首次连接

烧录完成后，重新连接 USB，使用串口终端连接飞控：

- **波特率**：115200
- **数据位**：8
- **停止位**：1

连接成功后会看到命令提示符 `msh />`。

---

## 基本设置

### 校准加速度计

首飞前必须校准加速度计：

1. 将飞机放在**水平面**上
2. 输入命令：`accel_cal`
3. 等待校准完成

!!! warning "注意"
    校准期间请勿移动飞机！

### 配置遥控器

根据你的遥控器类型设置 RC 协议：

```
# CRSF 协议
param set RC_CONFIG_PROTOCOL 0

# SBUS 协议
param set RC_CONFIG_PROTOCOL 1

# 保存设置
param save
```

### 验证电机

!!! danger "安全警告"
    测试电机前请**务必卸下螺旋桨**！

使用电机测试命令验证电机方向：

```
motor test 1 0.1    # 测试电机1，10%油门
motor stop          # 停止测试
```

---

## 首飞检查清单

飞行前请确认：

- [ ] 加速度计已校准
- [ ] 电机方向正确
- [ ] 螺旋桨安装正确（注意正反桨）
- [ ] 遥控器已绑定
- [ ] 电池电压正常
- [ ] Failsafe 测试通过

---

## 下一步

- [配置 PID 参数](configuration/pid-tuning.md) - 优化飞行手感
- [配置滤波器](configuration/filters.md) - 减少噪声
- [了解 Failsafe](configuration/failsafe.md) - 确保飞行安全

---

## 常见问题

??? question "无法进入 DFU 模式"
    - 确保按住 BOOT 按钮后再连接 USB
    - 检查 USB 线是否为数据线（非纯充电线）
    - 尝试其他 USB 端口

??? question "串口无响应"
    - 确认波特率为 115200
    - 检查是否选择了正确的 COM 端口
    - 尝试重新连接 USB

??? question "电机不转"
    - 确认已成功解锁（arm）
    - 检查电机协议设置
    - 检查电调连接

