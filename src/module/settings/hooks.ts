import { useState } from "./index";
import type { State } from "./type";

export const useModuleSettingsState = <T>(fn: (state: State) => T): T => {
    const state = useState();
    return fn(state);
};
