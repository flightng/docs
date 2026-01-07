# Firmware Flashing

This guide explains how to flash Fydelix firmware to your flight controller.

---

## Flashing Methods

| Method | Use Case | Difficulty |
|--------|----------|------------|
| USB DFU | Regular updates | ⭐ Easy |
| Artery ISP | First flash/Recovery | ⭐⭐ Medium |
| SWD | Development | ⭐⭐⭐ Advanced |

---

## USB DFU Mode (Recommended)

This is the most common firmware flashing method.

### Preparation

1. Download [Artery DFU Driver](https://www.arterytek.com/en/support/index.jsp)
2. Download [Artery ISP Programmer](https://www.arterytek.com/en/support/index.jsp)
3. Download firmware for your board

### Steps

#### 1. Enter DFU Mode

1. **Disconnect** all power from flight controller
2. **Press and hold** BOOT button
3. **Connect** USB cable to computer
4. **Release** BOOT button

#### 2. Verify DFU Mode

In Windows Device Manager, you should see:

```
Universal Serial Bus controllers
└── AT32 DFU Device
```

!!! warning "Driver Issues"
    If shown as "Unknown device", install the Artery DFU driver.

#### 3. Flash Firmware

1. Open **Artery ISP Programmer**
2. Select **USB** interface
3. Click **Connect**
4. Load `.hex` firmware in Download tab
5. Click **Download** to start flashing
6. Wait for completion

#### 4. Complete

Disconnect USB, reconnect, and the flight controller will run the new firmware.

---

## Using CLI to Enter DFU

If the flight controller is already running Fydelix, you can enter DFU mode via command:

```
bootloader
```

The flight controller will reboot and automatically enter DFU mode.

---

## First Flash on Blank Chip

!!! important "Important"
    Brand new blank chips require **User System Data (USD)** to be written first.
    Pre-built flight controllers usually have this pre-written and don't need this step.

1. In Artery ISP Programmer, select "User System Data"
2. Load the USD file for your chip
3. Click Download
4. Then flash the firmware

---

## SWD Debugger Flashing

For development, requires SWD debugger (e.g., J-Link, DAP-Link).

### Wiring

| Debugger | FC |
|----------|-----|
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

### Connect Serial

- Baud rate: **115200**
- Data bits: 8
- Stop bits: 1

### Check Boot

After normal boot, you'll see the command prompt: `msh />`

Enter `status` to view system status.

---

## Troubleshooting

??? question "Cannot enter DFU mode"
    - Ensure USB cable is a data cable
    - Try different USB port
    - Hold BOOT button before connecting USB

??? question "Flash failed"
    - Check if firmware matches your board
    - Try full chip erase then reflash
    - Check USB connection stability

??? question "Cannot boot after flash"
    - Confirm correct firmware model
    - Try `_legacy` version firmware
    - Check serial port baud rate settings

---

## Backup & Recovery

### Factory Reset

```
param reset
param save
```

!!! warning "Warning"
    This will erase all custom settings!

