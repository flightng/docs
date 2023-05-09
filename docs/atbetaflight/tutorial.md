## 准备工作 | Prerequisites

需安装：| Need to install:

- Artery DFU 驱动 | Artery DFU Driver
- Betaflight 配置程序 (特殊版本) | Betaflight Configurator (Special nightly version)

[Artery DFU Driver](https://we.tl/t-JOhrAN9Des){ .md-button .md-button--primary} [Betaflight Configurator nightly v20230129.363](https://github.com/betaflight/betaflight-configurator-nightlies/releases/tag/v20230129.363){ .md-button .md-button--primary}

## 下载固件 | Download firmware

最新的和历史固件都可以从 [GitHub Releases](https://github.com/flightng/atbetaflight/releases) 中获取。

The latest and historical firmware are available from [GitHub Releases](https://github.com/flightng/atbetaflight/releases).

[atbetaflight releases](https://github.com/flightng/atbetaflight/releases){ .md-button .md-button--primary}

## 固件对应 | Hardware and firmware
 需要根据自己飞控的型号选择对应的固件  | Choose the firmware baseed on your Fc board


|MCU|BOARD|FIRMWARE(bin or hex)|comment|
|--|--|--|--|
|AT32F435VMT7| EMSRPROTO2\ 重山1.2 |betaflight-xxx-EMSRPROTO2-xxxxxx |LQFP 100 DIY|
|AT32F437VGT7| EMSRPROTO3 |betaflight-xxx-EMSRPROTO3-xxxxxx |LQFP100|
|AT32F435RGT7| NEUTRONRCF435SE  | betaflight-xxx-NEUTRONRCF435SE-xxxxxxx |LQFP64|
|AT32F435CGU7| NEUTRONRCF435MINI|betaflight-xxx-NEUTRONRCF435MINI-xxxxxxx|QNF48|


## 烧录固件 | Flash firmware

1. 按住飞控BOOT按钮，并连接电脑 | Press and hold the flight controller BOOT button, and connect the USB cable to the computer
2. 打开 Betaflight 配置程序 | Open Betaflight Configurator
3. 在 Betaflight 配置程序中，点击 `Firmware Flasher` | In Betaflight Configurator, click `Firmware Flasher`
4. 在 `Firmware Flasher` 中，点击 `Load local firmware` | In `Firmware Flasher`, click `Load local firmware`
5. 选择刚刚下载的固件 | Select the firmware you just downloaded
6. 和普通F4 飞控一样的进行刷写 | Flash the firmware 

## 注意事项 | Notes
* 仅DIY的空白mcu飞控板，需要使用雅特力的刷写工具，刷写1次用户系统数据，之后无需再次刷写，成品飞控无需刷写 | if the mcu is empty you should flash the "User System Settings Data"  only once,using the Artery ISP Programmer 
* 如果FC 不在DFU 模式，请勿勾选“无重启序列” 选项 | if the fc is not in dfu mode , please do not choose "no reboot sequence" option 

TBA
