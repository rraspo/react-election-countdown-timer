import { unixTime } from "../Constants";

export function countdown(endDate) {
  // get difference between endDate and current date, then divide by 1000 to get seconds
  let unixDiff =
    (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

  // clear countdown when date is reached
  if (unixDiff <= 0) return false;

  let timeLeft = {
    years: 0,
    days: 0,
    hours: 0,
    min: 0,
    sec: 0
  };

  if (unixDiff >= unixTime.EPOCH_YEAR) {
    timeLeft.years = Math.floor(unixDiff / (unixTime.EPOCH_YEAR));
    unixDiff -= timeLeft.years * unixTime.EPOCH_YEAR;
  }
  if (unixDiff >= unixTime.SECONDS_IN_DAY) {
    timeLeft.days = Math.floor(unixDiff / unixTime.SECONDS_IN_DAY);
    unixDiff -= timeLeft.days * unixTime.SECONDS_IN_DAY;
  }
  if (unixDiff >= unixTime.SECONDS_IN_HOUR) {
    timeLeft.hours = Math.floor(unixDiff / unixTime.SECONDS_IN_HOUR);
    unixDiff -= timeLeft.hours * unixTime.SECONDS_IN_HOUR;
  }
  if (unixDiff >= unixTime.SECONDS_IN_MINUTE) {
    timeLeft.minutes = Math.floor(unixDiff / unixTime.SECONDS_IN_MINUTE);
    unixDiff -= timeLeft.minutes * unixTime.SECONDS_IN_MINUTE;
  }
  timeLeft.seconds = unixDiff;

  return timeLeft;
}
