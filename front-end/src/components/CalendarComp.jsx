import { useEffect, useRef, useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns/format";
import { getDateRanges } from "../utils/getDateRanges";
import detectKey from "../utils/detectKey";
import { isRangeValid } from "../utils/isRangeValid";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

function CalendarComp({ range, setRange, excludedDates, setExcludedDates }) {
  const [open, setOpen] = useState(false);
  const refOne = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (detectKey("Escape", e)) setOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown, true);
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/reservations/getReservations")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const reserved = getDateRanges(data);
        setExcludedDates(reserved);
      })
      .catch((err) => console.error("Failed to fetch reservations:", err));
  }, []);

  const handleSelect = (item) => {
    const {startDate, endDate} = item.selection;

    if(!isRangeValid(startDate, endDate, excludedDates)){
      alert("cannot reserve taken dates");
      return;
    }

    setRange([item.selection]);
  }

  return (
    <div>
      <input
        value={`${format(range[0].startDate, "dd/MM/yyyy")} to ${format(
          range[0].endDate,
          "dd/MM/yyyy"
        )}`}
        readOnly
        onClick={() => setOpen((open) => !open)}
        className="w-3xs bg-white m-auto p-3.5 rounded-2xl text-center hover:bg-gray-50"
      />

      <div ref={refOne}>
        {open && excludedDates && (
          <DateRange
            onChange={handleSelect}
            minDate={new Date()}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={2}
            direction="horizontal"
            disabledDay={(date) => {
              return excludedDates.some(
                (d) =>
                  d.getTime() === new Date(date.setHours(0, 0, 0, 0)).getTime()
              );
            }}
          />
        )}
      </div>
    </div>
  );
}

export default CalendarComp;
