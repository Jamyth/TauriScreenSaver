import { Module, register } from "react-shiba";
import { Main } from "./Main";
import type { State, Path } from "./type";

const initialState: State = {};

class ModuleSettingsModule extends Module<Path, State> {
    override onEnter() {
        // TODO
    }
}

const moduleSettingsModule = register(new ModuleSettingsModule(null, initialState));
export const useState = moduleSettingsModule.getState();
export const actions = moduleSettingsModule.getActions();
export const MainComponent = moduleSettingsModule.attachLifecycle(Main);
