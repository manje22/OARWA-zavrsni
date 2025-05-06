import { useEffect, useRef, useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns/format";
import detectKey from "../utils/detectKey";
import hideOnClickOutside from "../utils/hideOnClickOutside";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

function CalendarComp({ range, setRange }) {
  const [open, setOpen] = useState(false);

  const refOne = useRef(null);

  useEffect(() => {
    document.addEventListener(
      "keydown",
      () => {
        if (detectKey("Escape")) setOpen(false);
      },
      true
    );
    document.addEventListener(
      "click",
      () => {
        if (hideOnClickOutside(refOne)) setOpen(false);
      },
      true
    );
  }, []);

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
