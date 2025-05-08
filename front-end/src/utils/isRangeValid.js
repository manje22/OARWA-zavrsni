export function isRangeValid(start, end, excludedDates) {
  const normalizedStart = new Date(start);
  const normalizedEnd = new Date(end);

  normalizedStart.setHours(0, 0, 0, 0);
  normalizedEnd.setHours(0, 0, 0, 0);

  return !excludedDates.some((excluded) => {
    const excludedDate = new Date(excluded);
    excludedDate.setHours(0, 0, 0, 0);
    return excludedDate >= normalizedStart && excludedDate <= normalizedEnd;
  });
}
