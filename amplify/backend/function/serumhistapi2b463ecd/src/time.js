"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sleep = exports.resolutions = void 0;
const SECONDS = 1000;
const MINUTES = 60 * SECONDS;
const HOURS = 60 * MINUTES;
exports.resolutions = {
    "1": 1 * MINUTES,
    "3": 3 * MINUTES,
    "5": 5 * MINUTES,
    "15": 15 * MINUTES,
    "30": 30 * MINUTES,
    "60": 1 * HOURS,
    "120": 2 * HOURS,
    "180": 3 * HOURS,
    "240": 4 * HOURS,
    "1D": 24 * HOURS,
};
function sleep(time) {
    const millis = time.Millis || 0;
    const seconds = time.Seconds || 0;
    const minutes = time.Minutes || 0;
    const hours = time.Hours || 0;
    const total = millis + SECONDS * seconds + MINUTES * minutes + HOURS * hours;
    return new Promise((resolve) => setTimeout(resolve, total));
}
exports.sleep = sleep;
