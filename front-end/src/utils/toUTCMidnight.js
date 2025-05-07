const toUTCMidnight = (date)  => {
  return new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
  );
}

export default toUTCMidnight;
