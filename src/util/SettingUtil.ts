import { StorageUtil } from "./StorageUtil";

export interface FlipClockSetting {}

export interface ScrollClockSetting {
    showSecond: boolean;
    is24HourBased: boolean;
    colonBlink: boolean;
}

export interface ScreenSaverSetting {
    "flip-clock": FlipClockSetting;
    "scroll-clock": ScrollClockSetting;
}

const initialValue: ScreenSaverSetting = {
    "flip-clock": {},
    "scroll-clock": {
        showSecond: true,
        is24HourBased: true,
        colonBlink: true,
    },
};

function load() {
    return StorageUtil.getScreensaverSetting(initialValue);
}

function save(setting: ScreenSaverSetting) {
    return StorageUtil.setScreensaverSetting(setting);
}

export const SettingUtil = Object.freeze({
    load,
    save,
});
