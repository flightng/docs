---
title: Firmware Flashing
description: How to flash Fidelity X firmware to your flight controller
---

:::caution[Page Incomplete]
This page is not yet complete and is for reference only.
:::

This guide explains how to flash Fidelity X firmware to your flight controller.

---

## Flashing Methods

| Method | Use Case | Difficulty |
|--------|----------|------------|
| USB DFU | Daily updates | ⭐ Easy |
| Artery ISP | First flash/Recovery | ⭐⭐ Medium |
| SWD | Development/Debug | ⭐⭐⭐ Advanced |

---

## USB DFU Mode (Recommended)

This is the most common firmware flashing method.

### Preparation

1. Download [Artery DFU Driver](https://www.arterytek.com/en/support/index.jsp)
2. Download [Artery ISP Programmer](https://www.arterytek.com/en/support/index.jsp)
3. Download the firmware for your flight controller

### Steps

#### 1. Enter DFU Mode

1. **Disconnect** all power from the flight controller
2. **Press and hold** the BOOT button
3. **Connect** USB cable to computer
4. **Release** the BOOT button

#### 2. Verify DFU Mode

In Windows Device Manager, you should see:

```
Universal Serial Bus controllers
└── AT32 DFU Device
```

:::caution[Driver Issues]
If it shows as "Unknown Device", install the Artery DFU driver.
:::

#### 3. Flash Firmware

1. Open **Artery ISP Programmer**
2. Select **USB** interface
3. Click **Connect**
4. Load the `.hex` firmware in the Download tab
5. Click **Download** to start flashing
6. Wait for flashing to complete

#### 4. Done

Disconnect USB, reconnect, and the flight controller will run the new firmware.

---

## Using CLI to Enter DFU

If the flight controller is already running Fidelity X, you can enter DFU mode via command:

```bash
bootloader
```

The flight controller will reboot and automatically enter DFU mode.

---

## First Flash on Blank Chip

:::note[Important]
When flashing a brand new blank chip for the first time, you need to write the **User System Data (USD)** first. Pre-built flight controllers usually have this pre-written and don't need this step.
:::

1. Select "User System Data" in Artery ISP Programmer
2. Load the USD file for the corresponding chip
3. Click Download
4. Then flash the firmware

---

## SWD Debugger Flashing

For development and debugging, requires an SWD debugger (e.g., J-Link, DAP-Link).

### Wiring

| Debugger | Flight Controller |
|----------|-------------------|
| SWDIO | SWDIO |
| SWCLK | SWCLK |
| GND | GND |

---

## Firmware Selection Reference

| Board | Firmware Name |
|-------|---------------|
| NeutronRC F435 SE | `fydelix-NeutronRCF435SE` |
| NeutronRC F435 MINI | `fydelix-NeutronRCF435MINI` |
| Hummingbird 200RS | `fydelix-Hummingbird200RS` |
| Hummingbird 255 V1 | `fydelix-Hummingbird255V1REVA` |
| StingerBee | `fydelix-StingerBee` |

---

## Post-Flash Verification

### Serial Connection

- Baud rate: **115200**
- Data bits: 8
- Stop bits: 1

### Check Startup

After normal startup, the command prompt will display: `msh />`

Enter `status` to view system status.

---

## Troubleshooting

### Cannot Enter DFU Mode

- Make sure USB cable is a data cable
- Try a different USB port
- Hold BOOT button before connecting USB

### Flash Failed

- Check if firmware matches your flight controller model
- Try full chip erase before reflashing
- Check USB connection stability

### Won't Start After Flashing

- Confirm firmware model is correct
- Try `_legacy` version firmware
- Check serial port baud rate settings

---

## Backup & Recovery

### Factory Reset

```bash
param reset
param save
```

:::danger[Warning]
This will clear all custom settings!
:::
