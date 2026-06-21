---
title: Firmware Flashing
description: How to flash Fidelity X firmware to your flight controller
---

This guide covers flashing Fidelity X firmware onto your flight controller.

---

## Flashing Methods

| Method | Use case | Difficulty |
|--------|----------|------------|
| Configurator online flashing | Everyday updates (**recommended**) | ⭐ Easy |
| Artery ISP Programmer | Manual flashing / recovery (AT32) | ⭐⭐ Medium |
| SWD debugger | Development / debugging | ⭐⭐⭐ Advanced |

---

## Flashing with the Configurator (Recommended)

The [Fidelity X Configurator](https://app.flightng.com) has built-in WebUSB DFU flashing — no extra software required.

### Steps

1. Open [app.flightng.com](https://app.flightng.com) in your browser (the Home page)
2. Put the flight controller into **DFU mode**:
   - If it already runs Fidelity X: connect, then click **Reset to Bootloader** on the **Status** page, or run `bootloader` in the CLI
   - Brand new / no firmware: **power off → hold BOOT → connect USB → release BOOT**
3. Click **Connect DFU Device** in the Home page's DFU section
4. Choose the firmware source:
   - **Online firmware**: pick your target board and version (Release / Candidate / Development)
   - **Local file**: select a local `.hex` file
5. Flash and wait for completion

:::note[Windows driver]
On Windows you may need to install the [Artery DFU / WinUSB driver](https://www.arterytek.com/en/support/index.jsp) the first time so the browser can detect the DFU device.
:::

---

## Entering DFU Mode

Whichever method you use, the flight controller must first be in DFU mode.

**Hardware method** (for blank chips or a board that won't boot):

1. **Disconnect** all power from the flight controller
2. **Hold** the BOOT button
3. **Connect** the USB cable to your computer
4. **Release** the BOOT button

**CLI method** (FC already running Fidelity X):

```bash
bootloader
```

The flight controller reboots straight into DFU mode.

In Windows Device Manager you should see `AT32 DFU Device` (AT32 boards). If it shows as "Unknown device", install the Artery DFU driver.

---

## Using Artery ISP Programmer (Alternative, AT32)

If you'd rather not use the configurator, you can flash AT32 boards with Artery's official tool:

1. Download [Artery ISP Programmer](https://www.arterytek.com/en/support/index.jsp)
2. Put the FC into DFU mode (see above)
3. Open Artery ISP Programmer, select the **USB** interface and **Connect**
4. Load the `.hex` firmware in the Download tab
5. Click **Download** to start flashing

---

## First Flash of a Blank Chip

:::note[Important]
A brand-new blank AT32 chip needs its **User System Data (USD)** written first. Production flight controllers usually ship with this already done.
:::

1. Select "User System Data" in Artery ISP Programmer
2. Load the USD file for your chip
3. Click Download
4. Then flash the firmware

---

## SWD Debugger Flashing

For development and debugging, using an SWD debugger (J-Link, DAP-Link, etc.).

| Debugger | Flight controller |
|----------|-------------------|
| SWDIO | SWDIO |
| SWCLK | SWCLK |
| GND | GND |

---

## Choosing Firmware

Firmware naming format: `fydelix-<firmware target>-<version>-<commit>.hex` (e.g. `fydelix-NeutronRCF435MINI-0.2.0-8ab496d.hex`).

Pick the firmware target matching your **MCU** and **gyro**. See the full table in [Supported Hardware](/en/fydelix/supported-boards/).

:::caution[Do not flash the wrong firmware]
The `_legacy` suffix targets the **ICM42688P**; no suffix targets the **BMI270**. Flashing the wrong one leaves the gyro non-functional and the FC unable to arm.
:::

---

## Post-Flash Verification

Connect over the USB virtual serial port (or the configurator's CLI page) at **115200** baud.

After a normal boot you'll see the `msh />` prompt — type `status` to check the system state.

---

## Troubleshooting

### Cannot enter DFU mode

- Make sure the USB cable is a data cable (not charge-only)
- Hold the BOOT button before connecting USB
- Try a different USB port
- On Windows, confirm the Artery DFU driver is installed

### Flashing fails

- Check the firmware matches your board (MCU + gyro)
- Try a full chip erase, then reflash
- Check the USB connection is stable

### Won't boot after flashing

- Confirm the firmware target is correct
- If your gyro is the ICM42688P, try the `_legacy` build
- Check the serial baud rate

---

## Backup and Restore

Restore factory defaults (CLI):

```bash
config reset
config save
```

:::danger[Warning]
This wipes all custom settings! First export your current config with the **Backup (YAML)** feature on the configurator's **Status** page.
:::
