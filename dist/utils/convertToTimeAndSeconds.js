"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToMinutesAndSeconds = void 0;
function convertToMinutesAndSeconds(seconds) {
    if (typeof seconds !== "number" || seconds < 0) {
        return "Invalid number";
    }
    const minutes = Math.floor(seconds / 60);
    const secondsToMount = seconds % 60;
    return `${minutes}m${secondsToMount}s`;
}
exports.convertToMinutesAndSeconds = convertToMinutesAndSeconds;
