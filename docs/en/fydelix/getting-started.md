# Getting Started

This guide will help you get started with Fidelity X firmware quickly.

---

## Prerequisites

### Hardware Requirements

- Supported flight controller ([view list](supported-boards.md))
- USB data cable
- Computer (Windows/macOS/Linux)

### Software Requirements

| Software | Purpose | Source |
|----------|---------|--------|
| Artery DFU Driver | Firmware flashing | [Artery Website](https://www.arterytek.com/en/support/index.jsp) |
| Chrome/Chromium Browser | Configurator access | Must support WebUSB/WebSerial |

!!! info "Browser Requirements"
    A browser with WebUSB/WebSerial support is required. Chrome or Chromium-based browsers (such as Edge, Brave, etc.) are recommended.

---

## Installation Steps

### 1. Download Firmware

Download the firmware for your flight controller from [GitHub Releases](https://github.com/flightng/firmware/releases).

Firmware naming format: `fydelix-<board>-<version>-<commit>.hex`

!!! tip "Tip"
    Not sure which firmware? Check [Supported Hardware](supported-boards.md) to find your board.

### 2. Flash Firmware

See [Firmware Flashing Guide](flashing.md) for detailed steps.

**Quick steps:**

1. Press and hold the **BOOT** button
2. Connect USB cable to computer
3. Release BOOT button
4. Select the local firmware file in Configurator
5. Click the flash button

### 3. First Connection

After flashing, connect to the flight controller using Configurator:

1. Click the **Connect** button in the top right corner
2. Select **FlightNG FC** from the popup menu

---

## Basic Setup

### Check Flight Controller Orientation

First, verify that the flight controller orientation is correct:

1. Observe the aircraft attitude displayed in Configurator
2. Move the actual aircraft and confirm the virtual aircraft follows accordingly
3. If they don't match, click the **Edit** button in the top right corner of the aircraft display box on the Status page
4. Select the correct flight controller orientation
5. Save and restart until the orientation is correct

### Calibrate IMU

You must calibrate the accelerometer before first flight:

1. Place the aircraft on a **level surface**
2. Click the **Calibrate** button in the top right corner of the aircraft display box
3. Wait for calibration to complete
4. Restart the flight controller

!!! warning "Warning"
    Do not move the aircraft during calibration!

### Configure Motors

!!! danger "Safety Warning"
    **Remove propellers** before configuring motors! ESC must be powered on.

On the Motor page, configure the following:

1. **Configure motor pole pairs**: Set according to your motor specifications
2. **Configure propeller rotation direction**: Set the correct rotation direction
3. **Check motor order and direction**:
    - Verify motor positions and directions match expectations on the Motor Map
    - If they don't match, you can edit directly on the Motor Map
    - Click on a motor position to change its rotation direction
    - Use the arrows to change motor position
    - Adjust until everything matches expectations

### Configure Receiver

With the receiver powered on:

1. Go to the Stick Preview page to view stick status
2. Move the transmitter sticks and confirm the display matches your actual inputs
3. If they don't match, click the **Edit** button in the top right corner to modify:
    - **Channel mapping**: Adjust channel assignments
    - **Polarity**: Fix reversed directions
    - **Deadband**: Adjust stick deadband size
4. The **AuxFunction** section allows you to bind functions to specific channels:
    - Arm
    - Pre-arm
    - Angle Mode
    - Other functions...

---

## Pre-Flight Checklist

Before flying, confirm:

- [ ] Flight controller orientation correct
- [ ] IMU calibrated
- [ ] Motor direction and order correct
- [ ] Propellers installed correctly (check CW/CCW)
- [ ] Receiver channel mapping correct
- [ ] Arm switch configured
- [ ] Battery voltage normal
- [ ] Failsafe test passed

---

## Next Steps

- [Configure PID](configuration/pid-tuning.md) - Optimize flight feel
- [Learn about Failsafe](configuration/failsafe.md) - Ensure flight safety

!!! note "About Filters"
    Fidelity X firmware uses hardcoded filters by design. Users should not adjust filter parameters.

---

## FAQ

??? question "Cannot enter DFU mode"
    - Make sure to hold BOOT button before connecting USB
    - Check if USB cable is a data cable (not charge-only)
    - Confirm Artery DFU driver is installed
    - Try different USB port

??? question "Configurator cannot connect"
    - Confirm you are using Chrome or a Chromium-based browser
    - Check if browser supports WebUSB/WebSerial
    - Try reconnecting USB

??? question "Motors not spinning"
    - Confirm successful arm
    - Check motor pole pair settings
    - Check ESC connection and power
