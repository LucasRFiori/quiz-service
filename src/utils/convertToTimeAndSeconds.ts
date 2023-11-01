export function convertToMinutesAndSeconds(seconds: number) {
  if (typeof seconds !== "number" || seconds < 0) {
    return "Invalid number";
  }

  const minutes = Math.floor(seconds / 60);
  const secondsToMount = seconds % 60;

  return `${minutes}m${secondsToMount}s`;
}
