const moment = require('moment-timezone');

export function parseDateStringToDatePDT(dateString) {
  const date = moment.tz(dateString, "MM/DD/YYYY [at] h:mm A", "America/Los_Angeles").toDate();

  return date;
}
export function formatPDTDateToString(date) {
  const formattedDate = moment(date).tz("America/Los_Angeles").format("MM/DD/YYYY [at] h:mm A z");
  return formattedDate;
}

export function formatMoney(number) {
  const roundedNumber = number.toFixed(2);

  const moneyString = "$" + parseFloat(roundedNumber).toLocaleString("en-US");

  return moneyString;
}
