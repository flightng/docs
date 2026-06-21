---
title: Getting Started
description: Quick start guide for Fidelity X firmware
---

This guide will help you get started with Fidelity X firmware quickly.

---

## Prerequisites

### Hardware Requirements

- Supported flight controller ([view list](/en/fydelix/supported-boards/))
- USB data cable
- Computer (Windows/macOS/Linux)

### Software Requirements

| Software | Purpose | Source |
|----------|---------|--------|
| Fidelity X Configurator | Flash firmware / configure the FC | [app.flightng.com](https://app.flightng.com) (web, no install) |
| Chrome / Edge browser | Run the configurator | Must support WebSerial / WebUSB |
| Artery DFU Driver | Flashing AT32 boards (Windows) | [Artery Website](https://www.arterytek.com/en/support/index.jsp) |

:::note[Browser Requirements]
A browser with WebUSB/WebSerial support is required. Chrome or Chromium-based browsers (such as Edge, Brave, etc.) are recommended.
:::

---

## Installation Steps

### 1. Download Firmware

Download the firmware for your flight controller from [GitHub Releases](https://github.com/flightng/firmware/releases).

Firmware naming format: `fydelix-<board>-<version>-<commit>.hex`

:::tip
Not sure which firmware? Check [Supported Hardware](/en/fydelix/supported-boards/) to find your board.
:::

### 2. Flash Firmware

See [Firmware Flashing Guide](/en/fydelix/flashing/) for detailed steps.

**Quick steps:**

1. Press and hold the **BOOT** button
2. Connect USB cable to computer
3. Release BOOT button
4. Select the local firmware file in Configurator
5. Click the flash button

### 3. First Connection

After flashing, open the [Fidelity X Configurator](https://app.flightng.com) in your browser to connect:

1. Click the **Connect** button in the top right corner
2. In the browser's serial port picker, select the matching serial device and authorize it

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

:::caution[Warning]
Do not move the aircraft during calibration!
:::

### Configure Motors

:::danger[Safety Warning]
**Remove propellers** before configuring motors! ESC must be powered on.
:::

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
4. The **AUX functions (AuxFunction)** section lets you bind switch functions to channels:
   - Arm
   - Pre-arm
   - Angle
   - Blackbox
   - Beeper
   - Beacon

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

- [Configure PID](/en/fydelix/configuration/pid-tuning/) - Optimize flight feel
- [Learn about Failsafe](/en/fydelix/configuration/failsafe/) - Ensure flight safety

:::note[About Filters]
Most of the Fidelity X filtering chain is pre-tuned for you. Day to day you only need the **Configuration** page's D-term filter (`dterm_lpf_cutoff`) and RPM filter strength (`rpm_filter_strength`) — there's no need to touch the lower-level parameters.
:::

---

## FAQ

### Cannot enter DFU mode

- Make sure to hold BOOT button before connecting USB
- Check if USB cable is a data cable (not charge-only)
- Confirm Artery DFU driver is installed
- Try different USB port

### Configurator cannot connect

- Confirm you are using Chrome or a Chromium-based browser
- Check if browser supports WebUSB/WebSerial
- Try reconnecting USB

### Motors not spinning

- Confirm successful arm
- Check motor pole pair settings
- Check ESC connection and power
