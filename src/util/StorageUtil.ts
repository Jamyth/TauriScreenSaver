import { LocalStorageUtil, ArrayUtil } from "@iamyth/util";
import type { ScreenSaverType } from "module/main/type";
import type { ScreenSaverSetting } from "./SettingUtil";

enum StorageKey {
    SCREENSAVER_TYPE = "screen-saver-type",
    SCREENSAVER_SETTING = "screen-saver-setting",
}

function getScreensaverType() {
    return LocalStorageUtil.getString<ScreenSaverType>(StorageKey.SCREENSAVER_TYPE, "flip-clock");
}

function setScreensaverType(type: ScreenSaverType) {
    LocalStorageUtil.setString(StorageKey.SCREENSAVER_TYPE, type);
}

function getScreensaverSetting(initialValue: ScreenSaverSetting) {
    const validator = (item: object) => {
        return ArrayUtil.areSame(Object.keys(item), Object.keys(initialValue), false);
    };
    return LocalStorageUtil.getObject<ScreenSaverSetting>(StorageKey.SCREENSAVER_SETTING, initialValue, validator);
}

function setScreensaverSetting(setting: ScreenSaverSetting) {
    LocalStorageUtil.setObject(StorageKey.SCREENSAVER_SETTING, setting);
}

export const StorageUtil = Object.freeze({
    getScreensaverType,
    setScreensaverType,
    getScreensaverSetting,
    setScreensaverSetting,
});
