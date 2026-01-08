# CLI Commands

!!! warning "Page Incomplete"
    This page is not yet complete and is for reference only.

Fidelity X provides a Command Line Interface (CLI) for configuration and debugging.

---

## Connection

Connect via USB virtual serial port:

| Parameter | Value |
|-----------|-------|
| Baud rate | 115200 |
| Data bits | 8 |
| Stop bits | 1 |

---

## Basic Commands

| Command | Function |
|---------|----------|
| `help` | Show all commands |
| `status` | System status overview |
| `version` | Firmware version info |
| `reboot` | Restart system |
| `bootloader` | Enter DFU mode |

---

## Parameter Commands

| Command | Function |
|---------|----------|
| `param list` | List all parameters |
| `param get <name>` | Get parameter value |
| `param set <name> <value>` | Set parameter |
| `param save` | Save to Flash |
| `param load` | Load from Flash |
| `param reset` | Reset to defaults |

---

## Safety System Commands

| Command | Function |
|---------|----------|
| `failsafe status` | Show safety system status |
| `failsafe test rc` | Test RC loss response |
| `failsafe test arming` | Test arming conditions |
| `failsafe reset` | Reset safety system state |

---

## Motor Commands

!!! danger "Warning"
    Remove propellers before testing motors!

| Command | Function |
|---------|----------|
| `motor test <num> <throttle>` | Test single motor |
| `motor stop` | Stop motor test |
| `motor info` | Show motor config |

**Example**:
```
motor test 1 0.1    # Motor 1, 10% throttle
motor stop
```

---

## Calibration Commands

| Command | Function |
|---------|----------|
| `accel_cal` | Calibrate accelerometer |

---

## Sensor Commands

| Command | Function |
|---------|----------|
| `imu info` | IMU sensor info |
| `imu data` | Real-time IMU data |

---

## RC Commands

| Command | Function |
|---------|----------|
| `rc info` | RC config info |
| `rc data` | Real-time RC channel data |

---

## Logging Commands

| Command | Function |
|---------|----------|
| `glog status` | Blackbox log status |
| `glog start` | Start recording |
| `glog stop` | Stop recording |
| `msc` | Enter USB storage mode for log export |

---

## Shortcuts

| Shortcut | Function |
|----------|----------|
| Tab | Command completion |
| ↑ / ↓ | Command history |
| Ctrl+C | Cancel current command |

---

## Common Parameters Quick Reference

### PID Parameters

| Parameter | Default | Description |
|-----------|---------|-------------|
| `PID_ROLL_P` | 45 | Roll P gain |
| `PID_ROLL_I` | 80 | Roll I gain |
| `PID_ROLL_D` | 35 | Roll D gain |
| `PID_PITCH_P` | 45 | Pitch P gain |
| `PID_PITCH_I` | 80 | Pitch I gain |
| `PID_PITCH_D` | 35 | Pitch D gain |
| `PID_YAW_P` | 45 | Yaw P gain |
| `PID_YAW_I` | 80 | Yaw I gain |

### Filter Parameters

| Parameter | Default | Description |
|-----------|---------|-------------|
| `GYRO_LPF_CUTOFF` | 100 | Gyro filter cutoff frequency |
| `D_TERM_LPF_CUTOFF` | 80 | D-term filter cutoff frequency |

### Safety System Parameters

| Parameter | Default | Description |
|-----------|---------|-------------|
| `FS_RC_LOSS_STAGE_1_TIME` | 150 | RC loss stage 1 time (ms) |
| `FS_BAT_WARN_V` | 14.4 | Battery warning voltage |
| `FS_BAT_CRIT_V` | 13.2 | Battery critical voltage |

