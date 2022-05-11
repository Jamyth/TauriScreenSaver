import React from "react";
import { Row } from "component/Row";
import { actions as mainActions } from "module/main";
import type { ScreenSaverType } from "module/main/type";
import { useModuleMainState } from "module/main/hooks";

const options: ScreenSaverType[] = ["flip-clock", "scroll-clock"];
const translation: Record<ScreenSaverType, string> = {
    "flip-clock": "Flipping Clock",
    "scroll-clock": "Scrolling Clock",
};

export const General = React.memo(() => {
    const screenSaverType = useModuleMainState((state) => state.selectedScreenSaver);
    const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value as ScreenSaverType;
        mainActions.changeScreenSaver(value);
    };

    return (
        <div className="container">
            <Row label="Theme">
                <select onChange={onSelectChange} value={screenSaverType}>
                    {options.map((type) => (
                        <option value={type} key={type}>
                            {translation[type]}
                        </option>
                    ))}
                </select>
            </Row>
        </div>
    );
});
