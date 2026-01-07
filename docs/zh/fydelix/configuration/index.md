# 配置指南

本章节介绍如何配置 Fydelix 固件。

---

## 参数系统

Fydelix 使用参数系统进行配置。所有配置都通过 CLI 命令完成。

### 基本操作

| 命令 | 功能 |
|------|------|
| `param list` | 列出所有参数 |
| `param get <名称>` | 获取参数值 |
| `param set <名称> <值>` | 设置参数 |
| `param save` | 保存到 Flash |
| `param load` | 从 Flash 加载 |
| `param reset` | 重置为默认值 |

!!! important "保存参数"
    修改参数后必须执行 `param save` 才能永久保存！

---

## 配置分类

<div class="grid cards" markdown>

-   :material-tune:{ .lg .middle } **PID 调参**

    ---

    调整飞行响应和手感

    [:octicons-arrow-right-24: 前往](pid-tuning.md)

-   :material-filter:{ .lg .middle } **滤波器**

    ---

    优化信号质量，减少噪声

    [:octicons-arrow-right-24: 前往](filters.md)

-   :material-gauge:{ .lg .middle } **速率曲线**

    ---

    调整操控灵敏度

    [:octicons-arrow-right-24: 前往](rate-profiles.md)

-   :material-shield:{ .lg .middle } **安全系统**

    ---

    配置 Failsafe 保护

    [:octicons-arrow-right-24: 前往](failsafe.md)

</div>

---

## 快速配置示例

### 5 寸自由式

```
param set PID_ROLL_P 45
param set PID_ROLL_I 80
param set PID_ROLL_D 35
param set GYRO_LPF_CUTOFF 100
param save
```

### Tiny Whoop

```
param set PID_ROLL_P 35
param set PID_ROLL_D 25
param set GYRO_LPF_CUTOFF 80
param save
```

---

## 恢复默认设置

```
param reset
param save
```

!!! warning "警告"
    这将清除所有自定义配置！

