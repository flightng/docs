---
title: Supported Hardware
description: Flight controllers, MCUs and sensors compatible with Fidelity X
---

Fidelity X is no longer tied to a single chip platform. The firmware now spans **AT32F435/F437**, **STM32G474**, **STM32F405** and **Unicmicro UM324xF**, and supports four mainstream IMU sensors.

:::tip[Firmware selection in one line]
Match two things: the **MCU** and the **gyro**. Firmware with the `_legacy` suffix targets the **ICM42688P**; firmware without it targets the **BMI270**.
:::

---

## Officially Supported Boards

The boards below are tested and officially supported. The "Firmware target" column is the firmware identifier you select when flashing.

### NeutronRC Series

| Board | MCU | Gyro | Mounting | Firmware target |
|-------|-----|------|----------|-----------------|
| NeutronRCF435SE | AT32F435RGT7 (LQFP64) | BMI270 | 20×20 / 30.5×30.5mm | `NeutronRCF435SE` |
| NeutronRCF435MINI | AT32F435CGU7 (QFN48) | BMI270 | 20×20mm | `NeutronRCF435MINI` |

:::danger[Read before buying the NeutronRCF435SE]
NeutronRC also released a newer F435SE under the same name that switched to the **ICM42688P** gyro. The official firmware **only ships a BMI270 build of the F435SE** — there is no ICM42688P build for it. Confirm with the seller that the gyro is **BMI270**.
:::

:::caution[NeutronRCF435MINI notes]
- **Gyro**: the official firmware target is the BMI270 version
- **ESC firmware**: only **Bluejay**, **AM32** and **BLHeli_32** are compatible
:::

### NewBeeDrone Series

| Board | MCU | Gyro | Firmware target |
|-------|-----|------|-----------------|
| Hummingbird 200RS | AT32F435CGU7 | BMI270 | `Hummingbird200RS` |
| Hummingbird 200RS (ICM) | AT32F435CGU7 | ICM42688P | `Hummingbird200RS_legacy` |
| Hummingbird 255 V1 REVA | AT32F435CGU7 | BMI270 | `Hummingbird255V1REVA` |
| Hummingbird 255 V1 REVA (ICM) | AT32F435CGU7 | ICM42688P | `Hummingbird255V1REVA_legacy` |
| StingerBee | AT32F435CGU7 | ICM42688P | `StingerBee` |
| BeeBrainHD ELRS | STM32G474CEU6 | ICM42688P | `BeeBrainHD_ELRS` |

:::tip[Choosing Hummingbird firmware]
The Hummingbird series comes in BMI270 and ICM42688P gyro variants. Confirm your hardware version before flashing:
- **No `_legacy` suffix** → BMI270
- **With `_legacy` suffix** → ICM42688P
:::

:::note[About StingerBee]
StingerBee is a NewBeeDrone BNF (Bind-and-Fly) kit built around the **ICM42688P**, not a standalone flight controller. Its firmware ships with a NewBeeDrone factory preset; a factory reset restores the **NewBeeDrone preset**, not the Fidelity X defaults.
:::

### Open-Source Designs

| Board | MCU | Gyro | Firmware target |
|-------|-----|------|-----------------|
| EMSR_PROTO2 | AT32F437VMT7 | BMI270 | `EMSR_PROTO2` |
| EMSR_PROTO2 (ICM) | AT32F437VMT7 | ICM42688P | `EMSR_PROTO2_legacy` |

EMSR_PROTO2 is a popular open-source flight controller schematic adopted by many commercial vendors and DIY builders. If your board is based on this design, you can try this firmware (same `_legacy` = ICM42688P rule applies).

---

## Reference & Developer Boards

The following are FlightNG's own reference/developer boards, aimed at firmware development and hardware porting. They are **generally not sold at retail**, but they demonstrate the cross-platform reach of Fidelity X.

| Board | MCU | Gyro | Notes |
|-------|-----|------|-------|
| FDX_REF_REVA | AT32F437VMT7 | BMI270 | Reference board, SD-card blackbox |
| FDX_REF_REVAK | AT32F437VMT7 | LSM6DSK320X | High-g accelerometer variant of REVA |
| FDX_REF_REVC | STM32G474RE | BMI270 | STM32G4 reference board |
| FDX_REF_REVD | STM32F405RGT6 | LSM6DSV16X | STM32F4 reference board, onboard MAX7456 |
| FDX_REF_REVSEK | AT32F435RGT7 | LSM6DSK320X | High-g variant on F435SE-compatible wiring |
| UM3241F_REF_REV2 | UM324xF (Unicmicro) | ICM42688P | Unicmicro platform reference board |

---

## Firmware Naming

```text
fydelix-<firmware target>-<version>-<git hash>.hex
```

**Example**: `fydelix-NeutronRCF435MINI-0.2.0-8ab496d.hex`

| Firmware type | Target gyro |
|---------------|-------------|
| Standard (no suffix) | BMI270 |
| Legacy (`_legacy` suffix) | ICM42688P |

:::caution[Do not flash the wrong firmware]
Flashing the wrong build will leave the gyro non-functional and the flight controller unable to arm. Always confirm your board's **MCU** and **gyro** before flashing.
:::

---

## Supported MCUs

| Chip | Package | Flash | RAM | Status |
|------|---------|-------|-----|--------|
| AT32F435CGU7 | QFN48 | 1MB | 384KB | ✅ Full support |
| AT32F435RGT7 | LQFP64 | 1MB | 384KB | ✅ Full support |
| AT32F437VMT7 | LQFP100 | 4MB | 384KB | ✅ Full support |
| STM32G474RE / CEU6 | LQFP64 / QFN48 | 512KB | 128KB | ✅ Full support |
| STM32F405RGT6 | LQFP64 | 1MB | 128KB | ✅ Full support |
| UM324xF (Unicmicro) | — | 512KB | 128KB | ✅ Full support |

---

## Supported Sensors

### Gyro / Accelerometer

| Sensor | Status | Notes |
|--------|--------|-------|
| BMI270 | ✅ Full support | Most widely used |
| ICM42688P | ⚠️ Limited support | Not recommended for new designs |
| LSM6DSV16X | ✅ Full support | Used on reference boards |
| LSM6DSK320X | ✅ Full support | High-g accelerometer variant |
| QMI8658C | 🧪 Driver available | Driver present; no official board uses it by default yet |

:::warning[About the ICM42688P]
The ICM42688P currently has only limited support and is **not recommended for new flight controller designs**. When designing or buying a new board, prefer a **BMI270** version. Existing official boards that use the ICM42688P (e.g. StingerBee, `_legacy` builds) still work fine.
:::

---

## Requesting a New Board Port

If you are a flight controller manufacturer and would like official Fidelity X support for your product, reach out via [GitHub](https://github.com/flightng).
