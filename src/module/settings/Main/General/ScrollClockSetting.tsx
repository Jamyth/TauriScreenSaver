import React from "react";
import { useObjectKeyAction } from "react-shiba";
import { Row } from "component/Row";
import { Checkbox } from "component/Checkbox";
import { useScreenSaverSettingState } from "module/main/hooks";
import { actions as mainActions } from "module/main";

export const ScrollClockSetting = React.memo(() => {
    const setting = useScreenSaverSettingState((state) => state["scroll-clock"]);
    const updateShowSecond = useObjectKeyAction(mainActions.updateScrollClockSetting, "showSecond");
    const updateIs24Hours = useObjectKeyAction(mainActions.updateScrollClockSetting, "is24HourBased");
    const updateColonBlink = useObjectKeyAction(mainActions.updateScrollClockSetting, "colonBlink");

    if (!setting) {
        return null;
    }

    const { showSecond, is24HourBased, colonBlink } = setting;

    return (
        <React.Fragment>
            <Row label="Show Second">
                <Checkbox value={showSecond} onChange={updateShowSecond} />
            </Row>
            <Row label="Show 24 Hours">
                <Checkbox value={is24HourBased} onChange={updateIs24Hours} />
            </Row>
            <Row label="ColonBlink">
                <Checkbox value={colonBlink} onChange={updateColonBlink} />
            </Row>
        </React.Fragment>
    );
});
