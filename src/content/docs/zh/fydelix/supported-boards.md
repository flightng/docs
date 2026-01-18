---
title: 支持的硬件
description: Fidelity X 支持的飞控与传感器一览
---

Fidelity X 目前支持多款基于 AT32F43x 系列 MCU 的飞控。

---

## 官方支持的飞控

以下飞控均经过完整测试，享有官方支持：

### NeutronRC 系列

#### NeutronRCF435SE

| 项目 | 规格 |
|------|------|
| MCU | AT32F435RGT7 |
| 封装 | LQFP64 |
| 陀螺仪 | BMI270 |
| 孔距 | 20x20mm / 30.5x30.5mm |
| 固件 | `fydelix-NeutronRCF435SE` |

一款经典的多用途飞控，兼容 20x20mm 与 30.5x30.5mm 两种安装孔距，适配性极佳。

:::danger[购买前必读]
NeutronRC 已推出同名的新版 F435SE，但采用了 **ICM42688P** 陀螺仪。**Fidelity X 不兼容该新版本**。选购时请务必向卖家确认陀螺仪型号为 **BMI270**。
:::

#### NeutronRCF435MINI

| 项目 | 规格 |
|------|------|
| MCU | AT32F435CGU7 |
| 封装 | QFN48 |
| 陀螺仪 | BMI270 |
| 尺寸 | 20 x 20mm |
| 固件 | `fydelix-NeutronRCF435MINI` |

常见于 NeutronRC 的 AIO（All-In-One）一体化产品中。

:::caution[注意事项]
- **陀螺仪限制**：仅支持搭载 BMI270 的版本；部分采用 ICM42688P 的变体机型不受支持
- **ESC 固件要求**：仅兼容 **Bluejay**、**AM32** 及 **BLHeli_32**，暂无其他 ESC 固件的支持计划
:::

---

### NewBeeDrone 系列

#### Hummingbird 200RS

| 项目 | 规格 |
|------|------|
| MCU | AT32F435 |
| 陀螺仪 | BMI270 / ICM42688P |
| 尺寸 | 20 x 20mm |
| 固件 | `fydelix-Hummingbird200RS` / `fydelix-Hummingbird200RS_legacy` |

#### Hummingbird 255 V1

| 项目 | 规格 |
|------|------|
| MCU | AT32F435 |
| 陀螺仪 | BMI270 / ICM42688P |
| 尺寸 | 25.5 x 25.5mm |
| 固件 | `fydelix-Hummingbird255V1REVA` / `fydelix-Hummingbird255V1REVA_legacy` |

:::tip[如何选择固件]
Hummingbird 系列存在两种陀螺仪变体，刷机前请先确认你的硬件版本：
- **无 `_legacy` 后缀**：适用于 **BMI270** 陀螺仪
- **带 `_legacy` 后缀**：适用于 **ICM42688P** 陀螺仪
:::

#### StingerBee

| 项目 | 规格 |
|------|------|
| MCU | AT32F435 |
| 陀螺仪 | ICM42688P |
| 类型 | BNF 到手飞套机 |
| 适用 | Tiny Whoop |
| 固件 | `fydelix-StingerBee` |

StingerBee 是 NewBeeDrone 推出的 BNF（Bind-and-Fly）到手飞套机，并非独立销售的飞控板。

:::note[厂家预设说明]
StingerBee 固件内置了由 NewBeeDrone 定制的出厂预设。执行恢复出厂设置时，系统将还原至 **NewBeeDrone 厂家预设**，而非 Fidelity X 的默认参数。
:::

---

### 开源设计方案

#### ESMRPROTO2

| 项目 | 规格 |
|------|------|
| MCU | AT32F435 |
| 陀螺仪 | BMI270 / ICM42688P |
| 类型 | 开源硬件设计 |
| 固件 | `fydelix-ESMRPROTO2` / `fydelix-ESMRPROTO2_legacy` |

ESMRPROTO2 是一款广受欢迎的开源飞控原理图设计，被众多商业飞控厂商及 DIY 爱好者采用。如果你的飞控基于此设计，可尝试使用本固件。

:::tip[如何选择固件]
固件选择规则与 Hummingbird 系列一致：
- **无 `_legacy` 后缀**：适用于 **BMI270** 陀螺仪
- **带 `_legacy` 后缀**：适用于 **ICM42688P** 陀螺仪
:::

---

## 固件选择指南

### 命名规则

```text
fydelix-<飞控型号>-<版本号>-<Git提交哈希>.hex
```

**示例**：`fydelix-NeutronRCF435MINI-0.1.3-8ab496d.hex`

### Legacy 版本说明

带有 `_legacy` 后缀的固件专为搭载 **ICM42688P** 陀螺仪的飞控设计。

| 固件类型 | 适用陀螺仪 |
|----------|------------|
| 标准版本（无后缀） | BMI270 |
| Legacy 版本（`_legacy` 后缀） | ICM42688P |

:::caution[请勿刷错固件]
刷入错误版本的固件将导致陀螺仪无法正常工作，飞控不能解锁。刷机前请务必确认你的飞控所搭载的陀螺仪型号。
:::

---

## 支持的 MCU

### AT32 系列

| 芯片型号 | 封装 | Flash | RAM | 支持状态 |
|----------|------|-------|-----|----------|
| AT32F435CGU7 | QFN48 | 1MB | 384KB | ✅ 完整支持 |
| AT32F435RGT7 | LQFP64 | 1MB | 384KB | ✅ 完整支持 |
| AT32F437VMT7 | LQFP100 | 4MB | 384KB | ✅ 完整支持 |

### STM32 系列

| 芯片型号 | 封装 | Flash | RAM | 支持状态 |
|----------|------|-------|-----|----------|
| STM32G474CGU6 | QFN48 | 512KB | 128KB | 🚧 开发中 |
| STM32G473CGU6 | QFN48 | 512KB | 128KB | 🚧 开发中 |

---

## 支持的传感器

### 陀螺仪 / 加速度计

| 传感器型号 | 支持状态 | 备注 |
|------------|----------|------|
| BMI270 | ✅ 完整支持 | 推荐首选 |
| QMI8658C | ✅ 完整支持 | 推荐首选 |
| ICM42688P | ⚠️ 有限支持 | 不建议用于新设计 |

:::warning[关于 ICM42688P 的说明]
ICM42688P 目前仅提供有限度的支持，我们 **强烈不建议** 将其用于任何新飞控的设计或选型。如果你正在设计新飞控或选购现成产品，请优先考虑搭载 BMI270 或 QMI8658C 的版本。
:::

---

## 申请新飞控适配

如果你是飞控厂商，希望 Fidelity X 为你的产品提供官方支持，欢迎通过 GitHub 与我们联系。
