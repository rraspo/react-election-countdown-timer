const DAYS_IN_YEAR= 365;
const HOURS_IN_DAY= 24;
const MINUTES_IN_HOUR= 60;
const SECONDS_IN_MINUTE= 60;
const SECONDS_IN_HOUR = SECONDS_IN_MINUTE * MINUTES_IN_HOUR;
const SECONDS_IN_DAY= HOURS_IN_DAY * MINUTES_IN_HOUR * SECONDS_IN_MINUTE;
const SECONDS_IN_YEAR = DAYS_IN_YEAR * HOURS_IN_DAY * MINUTES_IN_HOUR * SECONDS_IN_MINUTE;

module.exports = {
  SECONDS_IN_YEAR: SECONDS_IN_YEAR,
  SECONDS_IN_DAY: SECONDS_IN_DAY,
  SECONDS_IN_HOUR: SECONDS_IN_HOUR,
  SECONDS_IN_MINUTE: SECONDS_IN_MINUTE
}