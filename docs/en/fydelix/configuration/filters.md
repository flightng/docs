# Filter Configuration

This guide covers how to configure the Fydelix filter system.

---

## Why Filtering?

Filters remove noise from gyro signals while preserving useful flight data.

**Noise sources**:

- Motor vibration
- Propeller resonance
- Frame vibration
- Sensor noise

---

## Filter Parameters

### Gyro Filters

| Parameter | Description | Default | Range |
|-----------|-------------|---------|-------|
| `GYRO_LPF_CUTOFF` | Low-pass cutoff frequency (Hz) | 100 | 50-500 |

### D-Term Filters

| Parameter | Description | Default | Range |
|-----------|-------------|---------|-------|
| `D_TERM_LPF_CUTOFF` | Low-pass cutoff frequency (Hz) | 80 | 40-300 |

---

## Filter Tuning

### Finding Balance

Filter tuning is about balancing **noise rejection** vs **response latency**:

| Direction | Cutoff Frequency | Effect |
|-----------|------------------|--------|
| Strong filtering | Low | Less noise, more latency |
| Weak filtering | High | More noise, less latency |

### Tuning Steps

1. **Start from defaults**
2. **Evaluate noise**: Motors heating? Lower cutoff frequency
3. **Evaluate latency**: Sluggish response? Raise cutoff frequency
4. **Save settings**

---

## Common Configurations

### Standard Configuration (Recommended)

```
param set GYRO_LPF_CUTOFF 100
param set D_TERM_LPF_CUTOFF 80
param save
```

### Low Latency Configuration (Racing)

```
param set GYRO_LPF_CUTOFF 150
param set D_TERM_LPF_CUTOFF 100
param save
```

!!! warning "Note"
    Higher cutoff frequencies allow more noise through, which may cause motor heating.

### High Noise Environment

```
param set GYRO_LPF_CUTOFF 80
param set D_TERM_LPF_CUTOFF 60
param save
```

---

## Recommended Settings Reference

| Aircraft Type | GYRO_LPF | D_TERM_LPF |
|---------------|----------|------------|
| 5" Freestyle | 100 | 80 |
| 5" Racing | 120-150 | 90-100 |
| 3" Quad | 90 | 70 |
| Tiny Whoop | 80 | 60 |

---

## Troubleshooting

??? question "Motor overheating"
    Lower D-term filter cutoff frequency:
    ```
    param set D_TERM_LPF_CUTOFF 60
    ```

??? question "Response delay"
    Raise filter cutoff frequency:
    ```
    param set GYRO_LPF_CUTOFF 120
    ```

??? question "Hover jitter"
    Lower gyro filter cutoff frequency:
    ```
    param set GYRO_LPF_CUTOFF 80
    ```

