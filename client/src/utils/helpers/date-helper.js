export const convertDateToUnixTimestamp = (date) => {
  return Math.floor(date.getTime() / 1000);
};

export const convertUnixTimestampToDate = (unix) => {
  const milli = unix * 1000;
  return new Date(milli).toLocaleDateString();
};

export const createDate = (date, days, week, months, years) => {
  let newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days + 7 * week);
  newDate.setMonth(newDate.getMonth() + months);
  newDate.setFullYear(newDate.getFullYear() + years);
  return newDate;
};
