# atbetaflight Tutorial

This tutorial explains how to use atbetaflight firmware.

---

## Prerequisites

You need to install:

- Artery DFU Driver
- Betaflight Configurator (specific version)

[Download Artery DFU Driver](https://we.tl/t-JOhrAN9Des){ .md-button }
[Download Betaflight Configurator](https://github.com/betaflight/betaflight-configurator-nightlies/releases/tag/v20230129.363){ .md-button }

---

## Download Firmware

Download the latest firmware from [GitHub Releases](https://github.com/flightng/atbetaflight/releases).

---

## Firmware Selection Guide

Choose firmware based on your flight controller:

| MCU | FC | Firmware |
|-----|-----|----------|
| AT32F435VMT7 | EMSRPROTO2 | betaflight-xxx-EMSRPROTO2 |
| AT32F437VGT7 | EMSRPROTO3 | betaflight-xxx-EMSRPROTO3 |
| AT32F435RGT7 | NEUTRONRCF435SE | betaflight-xxx-NEUTRONRCF435SE |
| AT32F435CGU7 | NEUTRONRCF435MINI | betaflight-xxx-NEUTRONRCF435MINI |

---

## Flash Firmware

1. Hold FC BOOT button and connect USB
2. Open Betaflight Configurator
3. Click `Firmware Flasher`
4. Click `Load local firmware` and select firmware
5. Flash like a normal F4 flight controller

---

## Notes

!!! warning "Important"
    - DIY boards with blank MCU need to flash User System Data first (only once) using Artery tools
    - Pre-built flight controllers don't need this step
    - Do not check "No reboot sequence" option if FC is not in DFU mode

