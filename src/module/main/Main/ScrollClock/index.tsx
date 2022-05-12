import { ScreenSaverBase } from "component/ScreenSaverBase";
import React from "react";
import { TimerUtil } from "util/TimerUtil";
import { ScrollingDigit } from "./ScrollingDigit";
import { useScreenSaverSettingState } from "module/main/hooks";
import "./index.less";

const tab = "scroll-clock";

export const ScrollClock = React.memo(() => {
    const [now, setNow] = React.useState(new Date());
    const [remainTime, setRemainTime] = React.useState(1000 - now.getMilliseconds());
    const [isAfternoon, setIsAfternoon] = React.useState(now.getHours() >= 12);
    const showSecond = useScreenSaverSettingState((state) => state[tab].showSecond ?? true);
    const is24Hour = useScreenSaverSettingState((state) => state[tab].is24HourBased ?? true);
    const colonBlink = useScreenSaverSettingState((state) => state[tab].colonBlink ?? true);

    const currentHour = now.getHours();
    const hour = TimerUtil.padZero(is24Hour ? currentHour : currentHour > 12 ? currentHour - 12 : currentHour);
    const minute = TimerUtil.padZero(now.getMinutes());
    const second = TimerUtil.padZero(now.getSeconds());

    const getNextTick = () => {
        const now = new Date();
        const remainTime = 60 - now.getSeconds();
        setNow(now);
        setRemainTime(remainTime);
        setIsAfternoon(now.getHours() >= 12);
    };

    React.useEffect(() => {
        const timer = setTimeout(getNextTick, remainTime);

        return () => {
            clearTimeout(timer);
        };
    }, [now, remainTime]);

    return (
        <ScreenSaverBase className={`scroll-clock ${colonBlink ? "blink" : ""}`}>
            {!is24Hour && <ScrollingDigit size="small" digit={isAfternoon ? "PM" : "AM"} />}
            <ScrollingDigit digit={hour} />
            <span>:</span>
            <ScrollingDigit digit={minute} />
            {showSecond && <span>:</span>}
            {showSecond && <ScrollingDigit digit={second} />}
        </ScreenSaverBase>
    );
});
