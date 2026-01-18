---
title: Supported Hardware
description: Flight controllers and sensors compatible with Fidelity X
---

Fidelity X currently supports a range of flight controllers based on the AT32F43x MCU family.

---

## Officially Supported Flight Controllers

The following flight controllers have been thoroughly tested and receive official support:

### NeutronRC Series

#### NeutronRCF435SE

| Item | Specification |
|------|---------------|
| MCU | AT32F435RGT7 |
| Package | LQFP64 |
| Gyro | BMI270 |
| Mounting | 20x20mm / 30.5x30.5mm |
| Firmware | `fydelix-NeutronRCF435SE` |

A versatile classic that accommodates both 20x20mm and 30.5x30.5mm mounting patterns, making it highly adaptable for various builds.

:::danger[Read Before Purchasing]
NeutronRC has released a newer revision of the F435SE under the same name, but equipped with an **ICM42688P** gyroscope. **Fidelity X does NOT support this newer revision**. Before purchasing, always confirm with the seller that the unit uses a **BMI270** gyroscope.
:::

#### NeutronRCF435MINI

| Item | Specification |
|------|---------------|
| MCU | AT32F435CGU7 |
| Package | QFN48 |
| Gyro | BMI270 |
| Size | 20 x 20mm |
| Firmware | `fydelix-NeutronRCF435MINI` |

Commonly found in NeutronRC's AIO (All-In-One) integrated products.

:::caution[Important Notes]
- **Gyroscope Compatibility**: Only the BMI270 variant is supported; units equipped with ICM42688P are NOT compatible
- **ESC Firmware Requirements**: Only **Bluejay**, **AM32**, and **BLHeli_32** ESC firmware are supported. Other ESC firmware is not compatible, with no plans to add support
:::

---

### NewBeeDrone Series

#### Hummingbird 200RS

| Item | Specification |
|------|---------------|
| MCU | AT32F435 |
| Gyro | BMI270 / ICM42688P |
| Size | 20 x 20mm |
| Firmware | `fydelix-Hummingbird200RS` / `fydelix-Hummingbird200RS_legacy` |

#### Hummingbird 255 V1

| Item | Specification |
|------|---------------|
| MCU | AT32F435 |
| Gyro | BMI270 / ICM42688P |
| Size | 25.5 x 25.5mm |
| Firmware | `fydelix-Hummingbird255V1REVA` / `fydelix-Hummingbird255V1REVA_legacy` |

:::tip[Choosing the Right Firmware]
The Hummingbird series comes in two gyroscope variants. Verify your hardware before flashing:
- **Without `_legacy` suffix**: For **BMI270** gyroscope
- **With `_legacy` suffix**: For **ICM42688P** gyroscope
:::

#### StingerBee

| Item | Specification |
|------|---------------|
| MCU | AT32F435 |
| Gyro | ICM42688P |
| Type | BNF (Bind-and-Fly) Kit |
| Use Case | Tiny Whoop |
| Firmware | `fydelix-StingerBee` |

The StingerBee is a complete BNF (Bind-and-Fly) kit from NewBeeDrone—not a standalone flight controller board.

:::note[Factory Preset Information]
The StingerBee firmware ships with factory presets customized by NewBeeDrone. Performing a factory reset will restore the **NewBeeDrone factory presets**, not the Fidelity X defaults.
:::

---

### Open Source Designs

#### ESMRPROTO2

| Item | Specification |
|------|---------------|
| MCU | AT32F435 |
| Gyro | BMI270 / ICM42688P |
| Type | Open-Source Hardware Design |
| Firmware | `fydelix-ESMRPROTO2` / `fydelix-ESMRPROTO2_legacy` |

ESMRPROTO2 is a widely adopted open-source flight controller schematic used by numerous commercial manufacturers and DIY enthusiasts alike. If your flight controller is based on this reference design, this firmware should be compatible.

:::tip[Choosing the Right Firmware]
The same selection rules apply as for the Hummingbird series:
- **Without `_legacy` suffix**: For **BMI270** gyroscope
- **With `_legacy` suffix**: For **ICM42688P** gyroscope
:::

---

## Firmware Selection Guide

### Naming Convention

```text
fydelix-<board>-<version>-<git-commit>.hex
```

**Example**: `fydelix-NeutronRCF435MINI-0.1.3-8ab496d.hex`

### Understanding Legacy Versions

Firmware files with the `_legacy` suffix are specifically built for flight controllers equipped with the **ICM42688P** gyroscope.

| Firmware Type | Target Gyroscope |
|---------------|------------------|
| Standard (no suffix) | BMI270 |
| Legacy (`_legacy` suffix) | ICM42688P |

:::caution[Flash the Correct Version]
Flashing the wrong firmware variant will cause the gyroscope to malfunction, preventing the flight controller from arming. Always verify your gyroscope model before flashing.
:::

---

## Supported MCUs

### AT32 Series

| Chip | Package | Flash | RAM | Status |
|------|---------|-------|-----|--------|
| AT32F435CGU7 | QFN48 | 1MB | 384KB | ✅ Full Support |
| AT32F435RGT7 | LQFP64 | 1MB | 384KB | ✅ Full Support |
| AT32F437VMT7 | LQFP100 | 4MB | 384KB | ✅ Full Support |

### STM32 Series

| Chip | Package | Flash | RAM | Status |
|------|---------|-------|-----|--------|
| STM32G474CGU6 | QFN48 | 512KB | 128KB | 🚧 In Development |
| STM32G473CGU6 | QFN48 | 512KB | 128KB | 🚧 In Development |

---

## Supported Sensors

### Gyroscope / Accelerometer

| Sensor | Status | Notes |
|--------|--------|-------|
| BMI270 | ✅ Full Support | Recommended |
| QMI8658C | ✅ Full Support | Recommended |
| ICM42688P | ⚠️ Limited Support | Not recommended for new designs |

:::warning[About ICM42688P Support]
The ICM42688P currently receives only limited support and is **strongly discouraged** for any new flight controller designs. If you are developing a new flight controller or shopping for one, please prioritize units equipped with BMI270 or QMI8658C gyroscopes.
:::

---

## Requesting Support for New Hardware

If you are a flight controller manufacturer interested in official Fidelity X support for your product, please reach out to us via GitHub.
