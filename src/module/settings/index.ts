import { Module, register } from "react-shiba";
import { Main } from "./Main";
import type { State, Path, Tab } from "./type";

const initialState: State = {
    tab: "default",
};

class ModuleSettingsModule extends Module<Path, State> {
    override onEnter() {
        // TODO
    }

    changeTab(tab: Tab) {
        this.setState({ tab });
    }
}

const moduleSettingsModule = register(new ModuleSettingsModule(null, initialState));
export const useState = moduleSettingsModule.getState();
export const actions = moduleSettingsModule.getActions();
export const MainComponent = moduleSettingsModule.attachLifecycle(Main);
