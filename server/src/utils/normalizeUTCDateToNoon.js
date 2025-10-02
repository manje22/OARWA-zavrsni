const normalizeUTCDateToNoon = (dateString) => {
    const d = new Date(dateString);
    d.setUTCHours(12, 0, 0, 0);
    return d;
}



module.exports = normalizeUTCDateToNoon;