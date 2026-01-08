# Rate Profiles

!!! warning "Page Incomplete"
    This page is not yet complete and is for reference only.

Rate profiles define the relationship between stick position and aircraft rotation speed.

---

## Rate Profile Types

Fidelity X supports multiple rate profiles:

| Type | Characteristics |
|------|-----------------|
| Betaflight Rate | Compatible with Betaflight, easy migration |
| Actual Rate | More intuitive, directly set max angular velocity |

---

## Betaflight Rate

### Parameters

| Parameter | Description | Range |
|-----------|-------------|-------|
| RC Rate | Base rate | 0.1 - 3.0 |
| Super Rate | Stick-end gain | 0.0 - 1.0 |
| Expo | Center area curve | 0.0 - 1.0 |

### Parameter Effects

- **RC Rate**: Affects overall response, especially center area
- **Super Rate**: Affects max speed at stick ends
- **Expo**: Reduces center area sensitivity

---

## Actual Rate

### Parameters

| Parameter | Description | Range |
|-----------|-------------|-------|
| Center Sensitivity | Center sensitivity (°/s) | 50 - 500 |
| Max Rate | Max angular velocity (°/s) | 200 - 2000 |
| Expo | Curve exponent | 0.0 - 1.0 |

### Advantages

- More intuitive
- Directly set max angular velocity
- Independently adjust center sensitivity

---

## Recommended Settings

### Betaflight Rate

#### Beginner

| Parameter | Roll | Pitch | Yaw |
|-----------|------|-------|-----|
| RC Rate | 0.7 | 0.7 | 0.7 |
| Super Rate | 0.5 | 0.5 | 0.5 |
| Expo | 0.3 | 0.3 | 0.0 |

#### Intermediate

| Parameter | Roll | Pitch | Yaw |
|-----------|------|-------|-----|
| RC Rate | 1.0 | 1.0 | 1.0 |
| Super Rate | 0.7 | 0.7 | 0.7 |
| Expo | 0.2 | 0.2 | 0.0 |

#### Advanced

| Parameter | Roll | Pitch | Yaw |
|-----------|------|-------|-----|
| RC Rate | 1.2 | 1.2 | 1.0 |
| Super Rate | 0.8 | 0.8 | 0.7 |
| Expo | 0.1 | 0.1 | 0.0 |

---

## Tuning Tips

### Center too sensitive

Increase Expo:
```
param set ROLL_RC_EXPO 0.3
param set PITCH_RC_EXPO 0.3
param save
```

### Roll speed too slow

Increase Super Rate:
```
param set ROLL_SUPER_RATE 0.8
param save
```

### Yaw twitchy

Reduce Yaw rate:
```
param set YAW_RC_RATE 0.8
param save
```

---

## Migrating from Betaflight

If migrating from Betaflight, you can use the same rate settings:

1. Select Betaflight Rate type
2. Enter your Betaflight RC Rate, Super Rate, Expo values
3. Save settings

