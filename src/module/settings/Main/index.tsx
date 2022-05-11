import React from "react";
import { Overlay } from "component/Overlay";
import { actions as mainActions } from "module/main";
import { General } from "./General";
import { Tab } from "component/Tab";
import { useModuleSettingsState } from "../hooks";
import { actions } from "../index";
import type { TypedTabMap } from "component/Tab";
import type { Tab as TabType } from "../type";
import "./index.less";

export const Main = React.memo(() => {
    const activeKey = useModuleSettingsState((state) => state.tab);

    const content: TypedTabMap<TabType> = {
        default: {
            label: "General",
            content: <General />,
        },
    };

    return (
        <Overlay onClose={mainActions.toggleSetting} title="Settings" className="module-setting">
            <Tab content={content} activeKey={activeKey} onChange={actions.changeTab} />
        </Overlay>
    );
});
