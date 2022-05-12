import { useState } from "./index";
import type { ScreenSaverSetting } from "util/SettingUtil";
import type { State } from "./type";

export const useModuleMainState = <T>(fn: (state: State) => T): T => {
    const state = useState();
    return fn(state);
};

export const useScreenSaverSettingState = <T>(fn: (setting: ScreenSaverSetting) => T): T | null => {
    const state = useModuleMainState((state) => state.setting);

    if (!state) {
        return null;
    }

    return fn(state);
};
