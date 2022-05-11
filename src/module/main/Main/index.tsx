import React from "react";
import { async } from "react-shiba";
import { useModuleMainState } from "../hooks";
import { ScreenSaverUtil } from "../ScreenSaverUtil";
import { SettingButton } from "./SettingButton";
import "css/index.less";
import "./index.less";

const SettingModule = async(() => import("module/settings"), "MainComponent");

export const Main = React.memo(() => {
    const selectedScreenSaver = useModuleMainState((state) => state.selectedScreenSaver);
    const showSettings = useModuleMainState((state) => state.showSetting);
    const ScreenSaver = ScreenSaverUtil.getSelectedScreenSaver(selectedScreenSaver);

    return (
        <React.Fragment>
            <SettingButton />
            <ScreenSaver />
            {showSettings && <SettingModule />}
        </React.Fragment>
    );
});
