---
title: 速率曲线
description: 配置摇杆响应曲线
---

速率曲线定义了摇杆位置与飞机旋转速度之间的关系。在 [调参器](https://app.flightng.com) 的 **配置（Configuration）→ Rates** 部分设置。

---

## 三种曲线类型

Fidelity X 支持三种速率曲线算法，**每个轴（Roll / Pitch / Yaw）可以独立选择不同类型**：

| 类型 | 适合 |
|------|------|
| Betaflight Rate | 从 Betaflight 迁移的飞手，手感一致 |
| Actual Rate | 喜欢直观设置、直接指定最大角速度的飞手 |
| FlightOne Rate | 从 FalcoX / FlightOne 迁移的飞手 |

各轴的曲线类型保存在 `rate_curve_type`（数组，依次对应 Roll / Pitch / Yaw）。

---

## 曲线参数

无论哪种类型，每个轴的曲线参数都保存在对应的数组参数中：

| 参数 | 轴 |
|------|----|
| `rate_curve_roll` | Roll |
| `rate_curve_pitch` | Pitch |
| `rate_curve_yaw` | Yaw |

在调参器的 **Rates** 部分，每个轴提供三个可调项（以 Betaflight Rate 为例）：

| 项 | 作用 |
|----|------|
| RC Rate | 基础速率，影响整体响应 |
| Super Rate | 摇杆末端增益，影响最大角速度 |
| Expo | 中心区域曲线，降低中心灵敏度 |

:::tip[在哪里改]
速率曲线包含多个数值，强烈建议在调参器 **配置 → Rates** 中用图形界面调整——可以实时看到曲线形状，比命令行直观得多。
:::

---

## 调优建议

### 中心太敏感

适当增加 **Expo**，让中心区域更柔和。

### 翻滚速度不够

适当增加 **Super Rate**，提高摇杆末端的最大角速度。

### Yaw 太灵敏 / 抖动

单独降低 Yaw 轴的 **RC Rate** 或 **Super Rate**——得益于每轴独立曲线，调 Yaw 不会影响 Roll / Pitch。

---

## 从 Betaflight 迁移

如果你从 Betaflight 迁移：

1. 将对应轴的曲线类型设为 **Betaflight Rate**
2. 填入你在 Betaflight 中的 RC Rate、Super Rate、Expo 值
3. 点击 **保存（Save）**

手感即可无缝延续。

:::note[保存设置]
修改后记得点击 **保存（Save）**（命令行下为 `config save`）。
:::
