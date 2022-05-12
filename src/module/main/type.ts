import type { ScreenSaverSetting } from "util/SettingUtil";

export type Path = never;

export type ScreenSaverType = "flip-clock" | "scroll-clock";

export interface State {
    selectedScreenSaver: ScreenSaverType;
    showSetting: boolean;
    setting: ScreenSaverSetting | null;
}
