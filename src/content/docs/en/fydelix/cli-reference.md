---
title: CLI Reference
description: Fidelity X command line interface reference
---

Fidelity X provides a command line interface (CLI) for advanced configuration and debugging.

:::tip[Use the configurator for everyday config]
Almost everything can be done in the graphical [Fidelity X Configurator](https://app.flightng.com) — it's more intuitive and safer. The CLI is mainly for advanced users and troubleshooting — the configurator's **CLI** tab lets you type the commands below directly.
:::

---

## Connection

Connect over the USB virtual serial port (CDC), or use the configurator's CLI tab.

| Setting | Value |
|---------|-------|
| Baud rate | 115200 |
| Data bits | 8 |
| Stop bits | 1 |

---

## System Commands

| Command | Function |
|---------|----------|
| `help` | List all available commands |
| `status` | Show flight controller status overview |
| `status -v` | Show firmware version info |
| `bootloader` | Reboot into DFU / system bootloader |
| `msc` | Reboot into USB Mass Storage mode (export blackbox logs) |
| `msp` | Reboot into MSP mode |
| `usb` | Show USB CDC bridge state |
| `top` | Show per-thread CPU usage |

---

## Parameter Commands

All flight controller parameters are read and written via the `config` command.

| Command | Function |
|---------|----------|
| `config show` | List all parameters |
| `config get <name>` | Get a parameter value |
| `config set <name> <value>` | Set a parameter |
| `config save` | Save to Flash |
| `config reload` | Reload from Flash |
| `config reset` | Reset to defaults |
| `config help` | Show parameter command usage |

:::note[Always save after changing]
`config set` only changes the runtime value — you must run `config save` to persist it to Flash.
:::

**Examples**:

```bash
config get rate_pid_roll          # View Roll axis PID
config set dterm_lpf_cutoff 90    # Set D-term LPF cutoff
config set motor_pole_pairs 14    # Set motor pole pairs
config save                       # Save
```

:::tip[Array parameters]
Array parameters such as `rate_pid_roll` and `rate_curve_roll` (which hold several values) are easier to edit in the graphical configurator — prefer the matching configurator page for those.
:::

---

## Calibration Commands

| Command | Function |
|---------|----------|
| `imu_cal acc` | Calibrate the accelerometer |
| `imu_cal gyro` | Calibrate the gyro |
| `imu_cal all` | Calibrate both accelerometer and gyro |
| `imu_cal status` | Show calibration status |
| `imu_cal info` | Show calibration info |
| `imu_cal reset` | Clear calibration data |

:::caution[Hold still while calibrating]
Place the aircraft on a level surface and keep it still during accelerometer calibration.
:::

---

## Motor Commands

:::danger[Safety warning]
**Remove the propellers** before testing motors!
:::

| Command | Function |
|---------|----------|
| `motor enable` | Enter motor test mode |
| `motor disable` | Exit motor test mode |
| `motor set <index> <throttle>` | Set a specific motor's throttle |
| `motor get` | Show motor status / configuration |
| `motor reload` | Reload motor configuration |

---

## Sensors and Attitude

| Command | Function |
|---------|----------|
| `imu` | Print IMU accelerometer/gyro data |
| `quat` | Print the current attitude quaternion |
| `rc` | Print live RC channel data |
| `rc reload` | Reload RC configuration |

---

## Logging and Storage

| Command | Function |
|---------|----------|
| `glog start` | Start blackbox logging |
| `glog stop` | Stop logging |
| `glog state` | Show logging state |
| `blackbox status` | Show blackbox storage status |
| `blackbox info` | Show blackbox storage info |
| `blackbox list` | List recorded logs |
| `blackbox format` | Format blackbox storage |
| `sd info` / `sd status` | SD card info / status |
| `sd format` | Format the SD card |

:::tip[Exporting logs]
Run `msc` to reboot into USB Mass Storage mode — the flight controller appears as a read-only USB drive so you can copy logs straight to your computer.
:::

---

## OSD Commands

| Command | Function |
|---------|----------|
| `osd_status` | Show OSD status |
| `osd_screen` | Switch OSD screen |
| `osd_element` | Configure an OSD element |
| `osd_reload` | Reload OSD layout from param storage |
| `osd_refresh` | Force an OSD refresh |
| `osd_test` | Refresh the OSD with test data |

---

## Keyboard Shortcuts

| Shortcut | Function |
|----------|----------|
| Tab | Command completion |
| ↑ / ↓ | Command history |
| Ctrl+C | Cancel the current command |
