import { LocalStorageUtil } from "@iamyth/util";
import type { ScreenSaverType } from "module/main/type";

enum StorageKey {
    SCREENSAVER_TYPE = "screen-saver-type",
}

function getScreensaverType() {
    return LocalStorageUtil.getString<ScreenSaverType>(StorageKey.SCREENSAVER_TYPE, "flip-clock");
}

function setScreensaverType(type: ScreenSaverType) {
    LocalStorageUtil.setString(StorageKey.SCREENSAVER_TYPE, type);
}

export const StorageUtil = Object.freeze({
    getScreensaverType,
    setScreensaverType,
});
