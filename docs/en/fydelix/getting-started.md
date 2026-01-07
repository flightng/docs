# Getting Started

This guide will help you get started with Fydelix firmware quickly.

---

## Prerequisites

### Hardware Requirements

- Supported flight controller ([view list](supported-boards.md))
- USB data cable
- Computer (Windows/macOS/Linux)

### Software Requirements

| Software | Purpose | Source |
|----------|---------|--------|
| Artery ISP Programmer | Firmware flashing | [Artery Website](https://www.arterytek.com/en/support/index.jsp) |
| Serial Terminal | Configuration | PuTTY / Tera Term / minicom |

---

## Installation Steps

### 1. Download Firmware

Download the firmware for your flight controller from [GitHub Releases](https://github.com/flightng/fydelix/releases).

Firmware naming format: `fydelix-<board>-<version>-<commit>.hex`

!!! tip "Tip"
    Not sure which firmware? Check [Supported Hardware](supported-boards.md) to find your board.

### 2. Flash Firmware

See [Firmware Flashing Guide](flashing.md) for detailed steps.

**Quick steps:**

1. Press and hold the **BOOT** button
2. Connect USB cable to computer
3. Release BOOT button
4. Flash firmware using Artery ISP Programmer

### 3. First Connection

After flashing, reconnect USB and connect to the flight controller using a serial terminal:

- **Baud rate**: 115200
- **Data bits**: 8
- **Stop bits**: 1

You'll see the command prompt `msh />` after successful connection.

---

## Basic Setup

### Calibrate Accelerometer

You must calibrate the accelerometer before first flight:

1. Place the aircraft on a **level surface**
2. Enter command: `accel_cal`
3. Wait for calibration to complete

!!! warning "Warning"
    Do not move the aircraft during calibration!

### Configure RC

Set the RC protocol based on your transmitter:

```
# CRSF protocol
param set RC_CONFIG_PROTOCOL 0

# SBUS protocol
param set RC_CONFIG_PROTOCOL 1

# Save settings
param save
```

### Verify Motors

!!! danger "Safety Warning"
    **Remove propellers** before testing motors!

Use motor test commands to verify motor direction:

```
motor test 1 0.1    # Test motor 1, 10% throttle
motor stop          # Stop test
```

---

## Pre-Flight Checklist

Before flying, confirm:

- [ ] Accelerometer calibrated
- [ ] Motor direction correct
- [ ] Propellers installed correctly (check CW/CCW)
- [ ] Transmitter bound
- [ ] Battery voltage normal
- [ ] Failsafe test passed

---

## Next Steps

- [Configure PID](configuration/pid-tuning.md) - Optimize flight feel
- [Configure Filters](configuration/filters.md) - Reduce noise
- [Learn about Failsafe](configuration/failsafe.md) - Ensure flight safety

---

## FAQ

??? question "Cannot enter DFU mode"
    - Make sure to hold BOOT button before connecting USB
    - Check if USB cable is a data cable (not charge-only)
    - Try different USB port

??? question "Serial port not responding"
    - Confirm baud rate is 115200
    - Check if correct COM port is selected
    - Try reconnecting USB

??? question "Motors not spinning"
    - Confirm successful arm
    - Check motor protocol settings
    - Check ESC connection

