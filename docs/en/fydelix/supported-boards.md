# Supported Hardware

Fidelity X supports multiple AT32F43x-based flight controllers.

---

## Officially Supported Flight Controllers

The following flight controllers are fully tested with official support:

### NeutronRC Series

#### NeutronRC F435 SE

| Spec | Value |
|------|-------|
| MCU | AT32F435RGT7 |
| Package | LQFP64 |
| Gyro | BMI270 |
| Size | 30.5 x 30.5mm |
| Firmware | `fydelix-NeutronRCF435SE` |

#### NeutronRC F435 MINI

| Spec | Value |
|------|-------|
| MCU | AT32F435CGU7 |
| Package | QFN48 |
| Gyro | BMI270 |
| Size | 20 x 20mm |
| Firmware | `fydelix-NeutronRCF435MINI` |

---

### Hummingbird Series

#### Hummingbird 200RS

| Spec | Value |
|------|-------|
| MCU | AT32F435 |
| Gyro | BMI270 / ICM-42688-P |
| Size | 20 x 20mm |
| Firmware | `fydelix-Hummingbird200RS` |

#### Hummingbird 255 V1

| Spec | Value |
|------|-------|
| MCU | AT32F435 |
| Gyro | BMI270 |
| Size | 25.5 x 25.5mm |
| Firmware | `fydelix-Hummingbird255V1REVA` |

---

### Other Flight Controllers

#### StingerBee

| Spec | Value |
|------|-------|
| MCU | AT32F435 |
| Gyro | BMI270 |
| Use Case | Tiny Whoop |
| Firmware | `fydelix-StingerBee` |

---

## Choosing the Right Firmware

### Firmware Naming Convention

```
fydelix-<board>-<version>-<commit>.hex
```

**Example**: `fydelix-NeutronRCF435MINI-0.1.3-8ab496d.hex`

### Legacy Versions

Some boards have firmware with `_legacy` suffix for compatibility with older hardware revisions.

!!! tip "How to Choose"
    - Try the regular version first
    - If you encounter issues, try the legacy version

---

## Supported MCUs

| Chip | Package | Flash | RAM |
|------|---------|-------|-----|
| AT32F435CGU7 | QFN48 | 1MB | 384KB |
| AT32F435RGT7 | LQFP64 | 1MB | 384KB |
| AT32F437VMT7 | LQFP100 | 4MB | 512KB |

---

## Supported Sensors

### Gyro/Accelerometer

| Sensor | Status |
|--------|--------|
| BMI270 | ✅ Full Support |
| ICM-42688-P | ✅ Full Support |
| QMI8658C | ✅ Full Support |

---

## Where to Buy

### NeutronRC

- Official: [NeutronRC](https://www.neutronrc.com)
- Taobao: Search "NeutronRC F435"

---

## Adding New Board Support

If you're a flight controller manufacturer and want Fidelity X to support your board, please contact us via GitHub.

