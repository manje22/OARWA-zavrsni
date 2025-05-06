function getRange(end, includeZero = true) {
    if (end === 0) {
      return [0];
    }
    return includeZero
      ? Array.from({ length: end + 1 }, (v, i) => i)
      : Array.from({ length: end }, (v, i) => i + 1);
}

export default getRange;