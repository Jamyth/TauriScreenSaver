import React from "react";
import { ScreenSaverBase } from "component/ScreenSaverBase";
import { FlippingText } from "./FlippingText";
import { TimerUtil } from "util/TimerUtil";
import "./index.less";

export const FlipClock = React.memo(() => {
    const [now, setNow] = React.useState(new Date());
    const [remainTime, setRemainTime] = React.useState(60 - now.getSeconds());
    const [isAfternoon, setIsAfternoon] = React.useState(now.getHours() >= 12);

    const hour = TimerUtil.padZero(now.getHours());
    const minute = TimerUtil.padZero(now.getMinutes());
    const nextHour = TimerUtil.padZero(TimerUtil.getNextHour(now.getHours()));
    const nextMinute = TimerUtil.padZero(TimerUtil.getNextMinute(now.getMinutes()));

    const getNextTick = () => {
        const now = new Date();
        const remainTime = 60 - now.getSeconds();
        setNow(now);
        setRemainTime(remainTime);
        setIsAfternoon(now.getHours() >= 12);
    };

    React.useEffect(() => {
        const timer = setTimeout(getNextTick, remainTime * 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [now, remainTime]);

    return (
        <ScreenSaverBase className="flip-clock">
            <div className="meridiem">{isAfternoon ? "PM" : "AM"}</div>
            <FlippingText digit={hour} nextDigit={nextHour} />
            <FlippingText digit={minute} nextDigit={nextMinute} />
        </ScreenSaverBase>
    );
});
