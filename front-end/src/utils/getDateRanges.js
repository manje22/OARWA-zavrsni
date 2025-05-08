import { addDays, isAfter } from "date-fns";

export function getDateRanges(ranges) {
  const reservedDates = [];

  ranges.forEach(({ checkIn, checkOut }) => {
    let current = new Date(checkIn);
    const end = new Date(checkOut);

    current.setHours(0, 0, 0, 0);
    end.setHours(0, 0, 0, 0);

    while (!isAfter(current, end)) {
      const dateCopy = new Date(current);
      dateCopy.setHours(0, 0, 0, 0);
      reservedDates.push(dateCopy);
      current = addDays(current, 1);
    }
  });

  return reservedDates;
}
