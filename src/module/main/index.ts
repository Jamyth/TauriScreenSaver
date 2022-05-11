import { Module, register } from "react-shiba";
import { Main } from "./Main";
import { StorageUtil } from "util/StorageUtil";
import type { State, Path, ScreenSaverType } from "./type";

const initialState: State = {
    selectedScreenSaver: "flip-clock",
    showSetting: false,
};

class ModuleMainModule extends Module<Path, State> {
    override onEnter() {
        const screenSaverType = StorageUtil.getScreensaverType();
        this.setState({ selectedScreenSaver: screenSaverType });
    }

    toggleSetting() {
        this.setState((state) => (state.showSetting = !state.showSetting));
    }

    changeScreenSaver(type: ScreenSaverType) {
        this.setState((state) => (state.selectedScreenSaver = type));
        StorageUtil.setScreensaverType(type);
    }
}

const moduleMainModule = register(new ModuleMainModule(null, initialState));
export const useState = moduleMainModule.getState();
export const actions = moduleMainModule.getActions();
export const MainComponent = moduleMainModule.attachLifecycle(Main);
