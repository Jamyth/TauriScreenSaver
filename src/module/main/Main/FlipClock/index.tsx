import React from "react";
import { ScreenSaverBase } from "component/ScreenSaverBase";
import { FlippingText } from "./FlippingText";
import { TimerUtil } from "util/TimerUtil";
import "./index.less";

export const FlipClock = React.memo(() => {
    const [now, setNow] = React.useState(new Date());
    const [remainTime, setRemainTime] = React.useState(1000 - now.getMilliseconds());
    const [isAfternoon, setIsAfternoon] = React.useState(now.getHours() >= 12);

    const hour = TimerUtil.padZero(now.getHours());
    const minute = TimerUtil.padZero(now.getMinutes());
    const second = TimerUtil.padZero(now.getSeconds());

    const getNextTick = () => {
        const now = new Date();
        const remainTime = 1000 - now.getMilliseconds();
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
        <ScreenSaverBase className="flip-clock">
            <FlippingText size="small" digit={isAfternoon ? "PM" : "AM"} />
            <FlippingText digit={hour} />
            <FlippingText digit={minute} />
            <FlippingText digit={second} />
        </ScreenSaverBase>
    );
});
