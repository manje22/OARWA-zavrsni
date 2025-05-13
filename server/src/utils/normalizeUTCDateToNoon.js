const normalizeUTCDateToNoon = (dateString) => {
    const d = new Date(dateString);
    d.setUTCHours(12, 0, 0, 0);
    return d;
}

//ovo je za oni problem s vremenskim zonama

module.exports = normalizeUTCDateToNoon;