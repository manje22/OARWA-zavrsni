import { addDays, isAfter } from "date-fns";

export function getDateRanges(ranges) {
  const reservedDates = [];

  ranges.forEach(({ startDate, endDate }) => {
    let current = new Date(startDate);
    const end = new Date(endDate);

    while (!isAfter(current, end)) {
        reservedDates.push(new Date(current));
      current = addDays(current, 1);
    }
  });

  return disabledDates;
}
