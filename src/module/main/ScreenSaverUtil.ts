import { FlipClock } from "./Main/FlipClock";
import type { ScreenSaverType } from "./type";
import type React from "react";

function getSelectedScreenSaver(type: ScreenSaverType): React.ComponentType {
    // eslint-disable-next-line sonarjs/no-small-switch -- will add later
    switch (type) {
        case "flip-clock":
            return FlipClock;
    }
}

export const ScreenSaverUtil = Object.freeze({
    getSelectedScreenSaver,
});
