function getNextHour(hour: number) {
    return hour % 24;
}

function getNextMinute(minute: number) {
    return minute % 60;
}

function padZero(value: number) {
    return value.toString().padStart(2, "0");
}

export const TimerUtil = Object.freeze({
    getNextHour,
    getNextMinute,
    padZero,
});
