const normalizeUTCDateToNoon = (dateString) => {
    const d = new Date(dateString);
    d.setUTCHours(12, 0, 0, 0); // Set to UTC noon to avoid timezone issues
    return d;
}


module.exports = normalizeUTCDateToNoon;