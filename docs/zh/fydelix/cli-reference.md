# CLI 命令

!!! warning "页面未完成"
    本页面内容尚未完成，仅供参考。

Fidelity X 提供命令行接口（CLI）用于配置和调试。

---

## 连接方式

通过 USB 虚拟串口连接：

| 参数 | 值 |
|------|---|
| 波特率 | 115200 |
| 数据位 | 8 |
| 停止位 | 1 |

---

## 基础命令

| 命令 | 功能 |
|------|------|
| `help` | 显示所有命令 |
| `status` | 系统状态概览 |
| `version` | 固件版本信息 |
| `reboot` | 重启系统 |
| `bootloader` | 进入 DFU 模式 |

---

## 参数命令

| 命令 | 功能 |
|------|------|
| `param list` | 列出所有参数 |
| `param get <名称>` | 获取参数值 |
| `param set <名称> <值>` | 设置参数 |
| `param save` | 保存到 Flash |
| `param load` | 从 Flash 加载 |
| `param reset` | 重置为默认值 |

---

## 安全系统命令

| 命令 | 功能 |
|------|------|
| `failsafe status` | 显示安全系统状态 |
| `failsafe test rc` | 测试 RC 丢失响应 |
| `failsafe test arming` | 测试解锁条件 |
| `failsafe reset` | 重置安全系统状态 |

---

## 电机命令

!!! danger "警告"
    测试电机前请卸下螺旋桨！

| 命令 | 功能 |
|------|------|
| `motor test <电机号> <油门>` | 测试单个电机 |
| `motor stop` | 停止电机测试 |
| `motor info` | 显示电机配置 |

**示例**：
```
motor test 1 0.1    # 电机1，10%油门
motor stop
```

---

## 校准命令

| 命令 | 功能 |
|------|------|
| `accel_cal` | 校准加速度计 |

---

## 传感器命令

| 命令 | 功能 |
|------|------|
| `imu info` | IMU 传感器信息 |
| `imu data` | 实时 IMU 数据 |

---

## RC 命令

| 命令 | 功能 |
|------|------|
| `rc info` | RC 配置信息 |
| `rc data` | 实时 RC 通道数据 |

---

## 日志命令

| 命令 | 功能 |
|------|------|
| `glog status` | Blackbox 日志状态 |
| `glog start` | 开始记录 |
| `glog stop` | 停止记录 |
| `msc` | 进入 USB 存储模式导出日志 |

---

## 快捷键

| 快捷键 | 功能 |
|--------|------|
| Tab | 命令补全 |
| ↑ / ↓ | 历史命令 |
| Ctrl+C | 取消当前命令 |

---

## 常用参数速查

### PID 参数

| 参数 | 默认值 | 说明 |
|------|--------|------|
| `PID_ROLL_P` | 45 | Roll P增益 |
| `PID_ROLL_I` | 80 | Roll I增益 |
| `PID_ROLL_D` | 35 | Roll D增益 |
| `PID_PITCH_P` | 45 | Pitch P增益 |
| `PID_PITCH_I` | 80 | Pitch I增益 |
| `PID_PITCH_D` | 35 | Pitch D增益 |
| `PID_YAW_P` | 45 | Yaw P增益 |
| `PID_YAW_I` | 80 | Yaw I增益 |

### 滤波器参数

| 参数 | 默认值 | 说明 |
|------|--------|------|
| `GYRO_LPF_CUTOFF` | 100 | 陀螺仪滤波截止频率 |
| `D_TERM_LPF_CUTOFF` | 80 | D项滤波截止频率 |

### 安全系统参数

| 参数 | 默认值 | 说明 |
|------|--------|------|
| `FS_RC_LOSS_STAGE_1_TIME` | 150 | RC丢失阶段1时间(ms) |
| `FS_BAT_WARN_V` | 14.4 | 电池警告电压 |
| `FS_BAT_CRIT_V` | 13.2 | 电池危险电压 |

