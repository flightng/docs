# 速率曲线

速率曲线定义了摇杆位置与飞机旋转速度之间的关系。

---

## 速率曲线类型

Fydelix 支持多种速率曲线：

| 类型 | 特点 |
|------|------|
| Betaflight Rate | 与 Betaflight 兼容，便于迁移 |
| Actual Rate | 更直观，直接设置最大角速度 |

---

## Betaflight Rate

### 参数

| 参数 | 说明 | 范围 |
|------|------|------|
| RC Rate | 基础速率 | 0.1 - 3.0 |
| Super Rate | 摇杆末端增益 | 0.0 - 1.0 |
| Expo | 中心区域曲线 | 0.0 - 1.0 |

### 参数作用

- **RC Rate**：影响整体响应，尤其是中心区域
- **Super Rate**：影响摇杆末端的最大速度
- **Expo**：降低中心区域灵敏度

---

## Actual Rate

### 参数

| 参数 | 说明 | 范围 |
|------|------|------|
| Center Sensitivity | 中心灵敏度 (°/s) | 50 - 500 |
| Max Rate | 最大角速度 (°/s) | 200 - 2000 |
| Expo | 曲线指数 | 0.0 - 1.0 |

### 优点

- 更直观易懂
- 直接设置最大角速度
- 独立调整中心灵敏度

---

## 推荐设置

### Betaflight Rate

#### 入门

| 参数 | Roll | Pitch | Yaw |
|------|------|-------|-----|
| RC Rate | 0.7 | 0.7 | 0.7 |
| Super Rate | 0.5 | 0.5 | 0.5 |
| Expo | 0.3 | 0.3 | 0.0 |

#### 中级

| 参数 | Roll | Pitch | Yaw |
|------|------|-------|-----|
| RC Rate | 1.0 | 1.0 | 1.0 |
| Super Rate | 0.7 | 0.7 | 0.7 |
| Expo | 0.2 | 0.2 | 0.0 |

#### 高级

| 参数 | Roll | Pitch | Yaw |
|------|------|-------|-----|
| RC Rate | 1.2 | 1.2 | 1.0 |
| Super Rate | 0.8 | 0.8 | 0.7 |
| Expo | 0.1 | 0.1 | 0.0 |

---

## 调优建议

### 中心太敏感

增加 Expo：
```
param set ROLL_RC_EXPO 0.3
param set PITCH_RC_EXPO 0.3
param save
```

### 翻滚速度不够

增加 Super Rate：
```
param set ROLL_SUPER_RATE 0.8
param save
```

### Yaw 抖动

降低 Yaw 速率：
```
param set YAW_RC_RATE 0.8
param save
```

---

## 从 Betaflight 迁移

如果你从 Betaflight 迁移，可以直接使用相同的速率设置：

1. 选择 Betaflight Rate 类型
2. 输入你在 Betaflight 中的 RC Rate、Super Rate、Expo 值
3. 保存设置

