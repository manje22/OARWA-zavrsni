import { useEffect, useRef, useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns/format";
import { addDays } from "date-fns";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

function CalendarComp({ range, setRange }) {
  const [open, setOpen] = useState(false);

  const refOne = useRef(null);

  useEffect(() => {
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  const hideOnEscape = (event) => {
    console.log(event.key);
    if (event.key === "Escape") {
      setOpen(false);
    }
  };

  const hideOnClickOutside = (event) => {
    if (refOne.current && !refOne.current.contains(event.target)) {
      setOpen(false);
    }
  };

  return (
    <div>
      <input
        value={`${format(range[0].startDate, "dd/MM/yyyy")} to ${format(
          range[0].endDate,
          "dd/MM/yyyy"
        )}`}
        readOnly
        onClick={() => setOpen((open) => !open)}
      ></input>

      <div ref={refOne}>
        {open && (
          <DateRange
            onChange={(item) => setRange([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={2}
            direction="horizontal"
          ></DateRange>
        )}
      </div>
    </div>
  );
}

export default CalendarComp;
