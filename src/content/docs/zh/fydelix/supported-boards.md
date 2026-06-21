---
title: 支持的硬件
description: Fidelity X 支持的飞控、MCU 与传感器一览
---

Fidelity X 已不再局限于单一芯片平台。固件目前覆盖 **AT32F435/F437**、**STM32G474**、**STM32F405** 以及 **Unicmicro UM324xF** 等多个 MCU 平台，并支持四种主流 IMU 传感器。

:::tip[固件选型一句话]
看准两件事：**MCU 型号** 和 **陀螺仪型号**。带 `_legacy` 后缀的固件对应 **ICM42688P**，不带后缀的对应 **BMI270**。
:::

---

## 官方支持的飞控

以下飞控均经过测试，享有官方支持。表中"固件目标名"即烧录时选择的固件标识。

### NeutronRC 系列

| 飞控 | MCU | 陀螺仪 | 安装孔距 | 固件目标名 |
|------|-----|--------|----------|------------|
| NeutronRCF435SE | AT32F435RGT7 (LQFP64) | BMI270 | 20×20 / 30.5×30.5mm | `NeutronRCF435SE` |
| NeutronRCF435MINI | AT32F435CGU7 (QFN48) | BMI270 | 20×20mm | `NeutronRCF435MINI` |

:::danger[购买 NeutronRCF435SE 前必读]
NeutronRC 推出过同名的新版 F435SE，改用了 **ICM42688P** 陀螺仪。官方目前**只提供 BMI270 版本的 F435SE 固件**，没有对应的 ICM42688P 构建。选购时请向卖家确认陀螺仪型号为 **BMI270**。
:::

:::caution[NeutronRCF435MINI 注意事项]
- **陀螺仪**：官方固件目标为 BMI270 版本
- **ESC 固件要求**：仅兼容 **Bluejay**、**AM32** 及 **BLHeli_32**
:::

### NewBeeDrone 系列

| 飞控 | MCU | 陀螺仪 | 固件目标名 |
|------|-----|--------|------------|
| Hummingbird 200RS | AT32F435CGU7 | BMI270 | `Hummingbird200RS` |
| Hummingbird 200RS（ICM 版） | AT32F435CGU7 | ICM42688P | `Hummingbird200RS_legacy` |
| Hummingbird 255 V1 REVA | AT32F435CGU7 | BMI270 | `Hummingbird255V1REVA` |
| Hummingbird 255 V1 REVA（ICM 版） | AT32F435CGU7 | ICM42688P | `Hummingbird255V1REVA_legacy` |
| StingerBee | AT32F435CGU7 | ICM42688P | `StingerBee` |
| BeeBrainHD ELRS | STM32G474CEU6 | ICM42688P | `BeeBrainHD_ELRS` |

:::tip[Hummingbird 如何选固件]
Hummingbird 系列存在 BMI270 与 ICM42688P 两种陀螺仪变体，刷机前请先确认硬件版本：
- **不带 `_legacy` 后缀** → BMI270
- **带 `_legacy` 后缀** → ICM42688P
:::

:::note[StingerBee 说明]
StingerBee 是 NewBeeDrone 推出的 BNF（到手飞）套机，搭载 **ICM42688P**，并非独立销售的飞控板。其固件内置 NewBeeDrone 定制的出厂预设；执行恢复出厂设置时将还原到 **NewBeeDrone 厂家预设**，而非 Fidelity X 默认参数。
:::

### 开源设计方案

| 飞控 | MCU | 陀螺仪 | 固件目标名 |
|------|-----|--------|------------|
| EMSR_PROTO2 | AT32F437VMT7 | BMI270 | `EMSR_PROTO2` |
| EMSR_PROTO2（ICM 版） | AT32F437VMT7 | ICM42688P | `EMSR_PROTO2_legacy` |

EMSR_PROTO2 是一款广受欢迎的开源飞控原理图设计，被众多商业飞控厂商及 DIY 爱好者采用。如果你的飞控基于此设计，可尝试使用本固件（同样遵循 `_legacy` = ICM42688P 的规则）。

---

## 参考与开发板

下列为 FlightNG 官方的参考/开发板，主要面向固件开发与硬件移植，**通常不在零售渠道出售**。它们也体现了 Fidelity X 跨平台的能力。

| 飞控 | MCU | 陀螺仪 | 备注 |
|------|-----|--------|------|
| FDX_REF_REVA | AT32F437VMT7 | BMI270 | 参考板，SD 卡黑盒 |
| FDX_REF_REVAK | AT32F437VMT7 | LSM6DSK320X | REVA 的高量程加速度计变体 |
| FDX_REF_REVC | STM32G474RE | BMI270 | STM32G4 参考板 |
| FDX_REF_REVD | STM32F405RGT6 | LSM6DSV16X | STM32F4 参考板，板载 MAX7456 |
| FDX_REF_REVSEK | AT32F435RGT7 | LSM6DSK320X | F435SE 兼容布线的高量程变体 |
| UM3241F_REF_REV2 | UM324xF (Unicmicro) | ICM42688P | Unicmicro 平台参考板 |

---

## 固件命名规则

```text
fydelix-<固件目标名>-<版本号>-<Git提交哈希>.hex
```

**示例**：`fydelix-NeutronRCF435MINI-0.2.0-8ab496d.hex`

| 固件类型 | 适用陀螺仪 |
|----------|------------|
| 标准版本（无后缀） | BMI270 |
| Legacy 版本（`_legacy` 后缀） | ICM42688P |

:::caution[请勿刷错固件]
刷入错误版本的固件会导致陀螺仪无法正常工作，飞控不能解锁。刷机前请务必确认你的飞控所搭载的 **MCU** 与 **陀螺仪** 型号。
:::

---

## 支持的 MCU

| 芯片型号 | 封装 | Flash | RAM | 支持状态 |
|----------|------|-------|-----|----------|
| AT32F435CGU7 | QFN48 | 1MB | 384KB | ✅ 完整支持 |
| AT32F435RGT7 | LQFP64 | 1MB | 384KB | ✅ 完整支持 |
| AT32F437VMT7 | LQFP100 | 4MB | 384KB | ✅ 完整支持 |
| STM32G474RE / CEU6 | LQFP64 / QFN48 | 512KB | 128KB | ✅ 完整支持 |
| STM32F405RGT6 | LQFP64 | 1MB | 128KB | ✅ 完整支持 |
| UM324xF (Unicmicro) | — | 512KB | 128KB | ✅ 完整支持 |

---

## 支持的传感器

### 陀螺仪 / 加速度计

| 传感器型号 | 支持状态 | 备注 |
|------------|----------|------|
| BMI270 | ✅ 完整支持 | 应用最广泛 |
| ICM42688P | ⚠️ 有限支持 | 不推荐用于新设计 |
| LSM6DSV16X | ✅ 完整支持 | 用于参考板 |
| LSM6DSK320X | ✅ 完整支持 | 高量程加速度计变体 |
| QMI8658C | 🧪 驱动可用 | 已有驱动，暂无默认采用该传感器的官方机型 |

:::warning[关于 ICM42688P]
ICM42688P 目前仅提供有限支持，**不推荐用于新飞控的设计或选型**。设计或选购新飞控时，请优先考虑搭载 **BMI270** 的版本。现有搭载 ICM42688P 的官方机型（如 StingerBee、`_legacy` 版本）仍可正常使用。
:::

---

## 申请新飞控适配

如果你是飞控厂商，希望 Fidelity X 为你的产品提供官方支持，欢迎通过 [GitHub](https://github.com/flightng) 与我们联系。
