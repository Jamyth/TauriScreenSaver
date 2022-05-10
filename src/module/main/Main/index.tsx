import React from "react";
import { useModuleMainState } from "../hooks";
import { ScreenSaverUtil } from "../ScreenSaverUtil";
import "css/index.less";

export const Main = React.memo(() => {
    const selectedScreenSaver = useModuleMainState((state) => state.selectedScreenSaver);
    const ScreenSaver = ScreenSaverUtil.getSelectedScreenSaver(selectedScreenSaver);

    return (
        <React.Fragment>
            <ScreenSaver />
            <div className="place-holder" />
        </React.Fragment>
    );
});
