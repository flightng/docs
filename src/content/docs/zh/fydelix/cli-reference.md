---
title: CLI 命令
description: Fidelity X 命令行接口参考
---

Fidelity X 提供命令行接口（CLI）用于高级配置与调试。

:::tip[日常配置请用调参器]
绝大多数配置都能在图形化的 [Fidelity X Configurator](https://app.flightng.com) 里完成，更直观、更安全。CLI 主要面向高级用户和故障排查——调参器的 **CLI** 标签页里也可以直接输入下列命令。
:::

---

## 连接方式

通过 USB 虚拟串口（CDC）连接，或直接使用调参器的 CLI 标签页。

| 参数 | 值 |
|------|---|
| 波特率 | 115200 |
| 数据位 | 8 |
| 停止位 | 1 |

---

## 系统命令

| 命令 | 功能 |
|------|------|
| `help` | 显示所有可用命令 |
| `status` | 显示飞控状态概览 |
| `status -v` | 显示固件版本信息 |
| `bootloader` | 重启进入 DFU/系统引导模式 |
| `msc` | 重启进入 USB 大容量存储模式（导出黑盒日志） |
| `msp` | 重启进入 MSP 模式 |
| `usb` | 显示 USB CDC 桥接状态 |
| `top` | 显示各线程 CPU 占用 |

---

## 参数命令

所有飞控参数通过 `config` 命令读写。

| 命令 | 功能 |
|------|------|
| `config show` | 列出所有参数 |
| `config get <名称>` | 获取参数值 |
| `config set <名称> <值>` | 设置参数 |
| `config save` | 保存到 Flash |
| `config reload` | 从 Flash 重新加载 |
| `config reset` | 重置为默认值 |
| `config help` | 显示参数命令用法 |

:::note[修改后务必保存]
`config set` 只改运行时的值，必须执行 `config save` 才能永久写入 Flash。
:::

**示例**：

```bash
config get rate_pid_roll          # 查看 Roll 轴 PID
config set dterm_lpf_cutoff 90    # 设置 D 项滤波截止频率
config set motor_pole_pairs 14    # 设置电机极对数
config save                       # 保存
```

:::tip[数组类参数]
像 `rate_pid_roll`、`rate_curve_roll` 这类数组参数（包含多个数值）在图形调参器里编辑更方便，建议优先使用调参器对应页面。
:::

---

## 校准命令

| 命令 | 功能 |
|------|------|
| `imu_cal acc` | 校准加速度计 |
| `imu_cal gyro` | 校准陀螺仪 |
| `imu_cal all` | 校准加速度计与陀螺仪 |
| `imu_cal status` | 显示校准状态 |
| `imu_cal info` | 显示校准信息 |
| `imu_cal reset` | 清除校准数据 |

:::caution[校准时勿动]
加速度计校准时请将飞机放在水平面上并保持静止。
:::

---

## 电机命令

:::danger[安全警告]
测试电机前请**务必卸下螺旋桨**！
:::

| 命令 | 功能 |
|------|------|
| `motor enable` | 进入电机测试模式 |
| `motor disable` | 退出电机测试模式 |
| `motor set <电机号> <油门>` | 设置指定电机油门 |
| `motor get` | 显示电机状态/配置 |
| `motor reload` | 重新加载电机配置 |

---

## 传感器与姿态

| 命令 | 功能 |
|------|------|
| `imu` | 打印 IMU 加速度/陀螺仪数据 |
| `quat` | 打印当前姿态四元数 |
| `rc` | 打印实时 RC 通道数据 |
| `rc reload` | 重新加载 RC 配置 |

---

## 日志与存储

| 命令 | 功能 |
|------|------|
| `glog start` | 开始记录黑盒日志 |
| `glog stop` | 停止记录 |
| `glog state` | 显示日志状态 |
| `blackbox status` | 显示黑盒存储状态 |
| `blackbox info` | 显示黑盒存储信息 |
| `blackbox list` | 列出已记录的日志 |
| `blackbox format` | 格式化黑盒存储 |
| `sd info` / `sd status` | SD 卡信息/状态 |
| `sd format` | 格式化 SD 卡 |

:::tip[导出日志]
执行 `msc` 重启进入 USB 大容量存储模式，飞控会作为只读 U 盘出现，可直接把日志拷贝到电脑。
:::

---

## OSD 命令

| 命令 | 功能 |
|------|------|
| `osd_status` | 显示 OSD 状态 |
| `osd_screen` | 切换 OSD 屏幕 |
| `osd_element` | 配置 OSD 元素 |
| `osd_reload` | 从参数存储重新加载 OSD 布局 |
| `osd_refresh` | 强制刷新 OSD |
| `osd_test` | 用测试数据刷新 OSD |

---

## 快捷键

| 快捷键 | 功能 |
|--------|------|
| Tab | 命令补全 |
| ↑ / ↓ | 历史命令 |
| Ctrl+C | 取消当前命令 |
