import React from "react";
import { Row } from "component/Row";
import { actions as mainActions } from "module/main";
import { useModuleMainState } from "module/main/hooks";
import { Select } from "component/Select";
import { ScrollClockSetting } from "./ScrollClockSetting";
import type { ScreenSaverType } from "module/main/type";

const options: ScreenSaverType[] = ["flip-clock", "scroll-clock"];
const translation: Record<ScreenSaverType, string> = {
    "flip-clock": "Flipping Clock",
    "scroll-clock": "Scrolling Clock",
};

export const General = React.memo(() => {
    const screenSaverType = useModuleMainState((state) => state.selectedScreenSaver);

    return (
        <div className="container">
            <Row label="Theme">
                <Select
                    onChange={mainActions.changeScreenSaver}
                    value={screenSaverType}
                    list={options}
                    translator={(_) => translation[_]}
                />
            </Row>
            {screenSaverType === "scroll-clock" && <ScrollClockSetting />}
        </div>
    );
});
