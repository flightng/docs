本页面描述了用于设计符合 FlightNG 的AT32飞控的硬件选型规格/规范，包括但不限于

- MCU
- 惯性测量单元 | IMU
    - 角速度计/陀螺仪 | Gyro
    - 加速度计 | Accelerometer
- 气压计 | Barometer
- 磁力计 | Magnetometer
- 闪存芯片 | Flash

## MCU

| LQFP100 | LQFP64 | QFN48 |
| :--- | :--- | :--- |
| AT32F437VMT7 | AT32F435RGT7| AT32F435CGU7|
| AT32F437RGT7 | | |

## 惯性测量单元 | IMU

| 首要推荐 | 次要推荐 | 不推荐 | 考虑中 |
| :--- | :--- | :--- | :--- |
| BMI270 (LGA14) | ICM42688p (LGA14) | 所有ICM2xxxx系列传感器 | QMI8658A (LGA14) |
| BMI323 (LGA14) |  |  | SH3001 (LGA14) |
| BMI088 (LGA16) |  |  |  |
| LSM6DSO (LGA14) |  |  |  |
| LSM6DSV (LGA14) |  |  |  |
| ASM330LHH (LGA14) |  |  |  |

## 气压计 | Barometer

| 首要推荐 | 次要推荐 | 不推荐 | 考虑中 |
| :--- | :--- | :--- | :--- |
| DPS310 | BMP280 | | |

## 磁力计 | Magnetometer

| 首要推荐 | 次要推荐 | 不推荐 | 考虑中 |
| :--- | :--- | :--- | :--- |
| QMC5883L | HMC5883 | | |

## 闪存芯片 | Flash

| 首要推荐 | 次要推荐 | 不推荐 | 考虑中 |
| :--- | :--- | :--- | :--- |
| NOR Flash | NAND Flash | | SD Card |
| W25Q64xx | W25N01G | | |
| W25Q128xx | | | |
| W25Q256xx | | | |

## 未来的硬件选型规格/规范

未来的硬件选型规格/规范应该在 FlightNG 团队的参与下进行，以确保硬件选型规格/规范的可靠性和准确性。
