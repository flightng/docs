# 支持的硬件

Fidelity X 支持多款基于 AT32F43x 的飞控板。

---

## 官方支持的飞控板

以下飞控板经过完整测试，提供官方支持：

### NeutronRC 系列

#### NeutronRC F435 SE

| 项目 | 规格 |
|------|------|
| MCU | AT32F435RGT7 |
| 封装 | LQFP64 |
| 陀螺仪 | BMI270 |
| 尺寸 | 30.5 x 30.5mm |
| 固件 | `fydelix-NeutronRCF435SE` |

#### NeutronRC F435 MINI

| 项目 | 规格 |
|------|------|
| MCU | AT32F435CGU7 |
| 封装 | QFN48 |
| 陀螺仪 | BMI270 |
| 尺寸 | 20 x 20mm |
| 固件 | `fydelix-NeutronRCF435MINI` |

---

### Hummingbird 系列

#### Hummingbird 200RS

| 项目 | 规格 |
|------|------|
| MCU | AT32F435 |
| 陀螺仪 | BMI270 / ICM-42688-P |
| 尺寸 | 20 x 20mm |
| 固件 | `fydelix-Hummingbird200RS` |

#### Hummingbird 255 V1

| 项目 | 规格 |
|------|------|
| MCU | AT32F435 |
| 陀螺仪 | BMI270 |
| 尺寸 | 25.5 x 25.5mm |
| 固件 | `fydelix-Hummingbird255V1REVA` |

---

### 其他飞控

#### StingerBee

| 项目 | 规格 |
|------|------|
| MCU | AT32F435 |
| 陀螺仪 | BMI270 |
| 适用 | Tiny Whoop |
| 固件 | `fydelix-StingerBee` |

---

## 选择正确的固件

### 固件命名规则

```
fydelix-<飞控型号>-<版本号>-<提交号>.hex
```

**示例**：`fydelix-NeutronRCF435MINI-0.1.3-8ab496d.hex`

### Legacy 版本

部分飞控有 `_legacy` 后缀的固件，用于兼容旧版硬件。

!!! tip "如何选择"
    - 先尝试普通版本
    - 如果遇到问题，再试 legacy 版本

---

## 支持的 MCU

| 芯片 | 封装 | Flash | RAM |
|------|------|-------|-----|
| AT32F435CGU7 | QFN48 | 1MB | 384KB |
| AT32F435RGT7 | LQFP64 | 1MB | 384KB |
| AT32F437VMT7 | LQFP100 | 4MB | 512KB |

---

## 支持的传感器

### 陀螺仪/加速度计

| 传感器 | 状态 |
|--------|------|
| BMI270 | ✅ 完整支持 |
| ICM-42688-P | ✅ 完整支持 |
| QMI8658C | ✅ 完整支持 |

---

## 购买渠道

### NeutronRC

- 官方：[NeutronRC](https://www.neutronrc.com)
- 淘宝：搜索 "NeutronRC F435"

---

## 添加新飞控支持

如果你是飞控厂商，希望 Fidelity X 支持你的飞控板，请通过 GitHub 联系我们。

