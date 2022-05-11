import React from "react";
import GearIcon from "./asset/gear.svg";
import { actions } from "module/main";
import { useModuleMainState } from "../hooks";

export const SettingButton = React.memo(() => {
    const isSettingOpened = useModuleMainState((state) => state.showSetting);
    const [isHidden, setIsHidden] = React.useState(false);

    const listener = React.useCallback(() => {
        if (!isSettingOpened) {
            setIsHidden(false);
        }
    }, [isSettingOpened, setIsHidden]);

    React.useEffect(() => {
        document.addEventListener("mousemove", listener);

        return () => {
            document.removeEventListener("mousemove", listener);
        };
    }, [listener]);

    React.useEffect(() => {
        if (!isHidden) {
            const timer = window.setTimeout(() => setIsHidden(true), 3000);

            return () => {
                window.clearTimeout(timer);
            };
        }
    }, [isHidden]);

    return (
        <button type="button" onClick={actions.toggleSetting} className={`setting-button ${isHidden ? "hidden" : ""}`}>
            <img draggable={false} src={GearIcon} />
        </button>
    );
});
