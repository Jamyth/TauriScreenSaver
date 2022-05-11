import { FlipClock } from "./Main/FlipClock";
import { ScrollClock } from "./Main/ScrollClock";
import type { ScreenSaverType } from "./type";
import type React from "react";

function getSelectedScreenSaver(type: ScreenSaverType): React.ComponentType {
    // eslint-disable-next-line sonarjs/no-small-switch -- will add later
    switch (type) {
        case "flip-clock":
            return FlipClock;
        case "scroll-clock":
            return ScrollClock;
    }
}

export const ScreenSaverUtil = Object.freeze({
    getSelectedScreenSaver,
});
