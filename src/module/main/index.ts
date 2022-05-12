import { Module, register } from "react-shiba";
import { Main } from "./Main";
import { StorageUtil } from "util/StorageUtil";
import { SettingUtil } from "util/SettingUtil";
import { block, NoSleepType, unblock } from "tauri-plugin-nosleep-api";
import type { ScreenSaverSetting } from "util/SettingUtil";
import type { State, Path, ScreenSaverType } from "./type";
import { ObjectUtil } from "@iamyth/util";

const initialState: State = {
    selectedScreenSaver: "flip-clock",
    showSetting: false,
    setting: null,
};

class ModuleMainModule extends Module<Path, State> {
    override onEnter() {
        block(NoSleepType.PreventUserIdleSystemSleep);
        const screenSaverType = StorageUtil.getScreensaverType();
        const setting = SettingUtil.load();
        this.setState({ selectedScreenSaver: screenSaverType, setting });
    }

    override onDestroy(): void {
        unblock();
    }

    toggleSetting() {
        this.setState((state) => (state.showSetting = !state.showSetting));
    }

    changeScreenSaver(type: ScreenSaverType) {
        this.setState((state) => (state.selectedScreenSaver = type));
        StorageUtil.setScreensaverType(type);
    }

    updateScrollClockSetting(setting: Partial<ScreenSaverSetting["scroll-clock"]>) {
        this.setState((state) => {
            if (state.setting) {
                ObjectUtil.safeAssign(state.setting["scroll-clock"], setting);
                SettingUtil.save(state.setting);
            }
        });
    }

    updateFlipClockSetting(setting: Partial<ScreenSaverSetting["flip-clock"]>) {
        this.setState((state) => {
            if (state.setting) {
                ObjectUtil.safeAssign(state.setting["flip-clock"], setting);
                SettingUtil.save(state.setting);
            }
        });
    }
}

const moduleMainModule = register(new ModuleMainModule(null, initialState));
export const useState = moduleMainModule.getState();
export const actions = moduleMainModule.getActions();
export const MainComponent = moduleMainModule.attachLifecycle(Main);
