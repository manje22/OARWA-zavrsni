import { format } from "date-fns/format";
import calculateNumDays from "../utils/CalculateNumDays";

function ReservationDetails({ range, resFormData }) {
  return (
    <div className="flex flex-col gap-2 text-2xl">
      <div>
        <p>
          <strong>Check in:</strong>{" "}
          {`${format(range[0].startDate, "dd/MM/yyyy")}`}
        </p>
        <p>
          <strong>Check out:</strong>{" "}
          {`${format(range[0].endDate, "dd/MM/yyyy")}`}
        </p>
        <p>
          <strong>Adults:</strong> {resFormData.numAdults}
        </p>
        <p>
          <strong>Children:</strong> {resFormData.numChildren}
        </p>
      </div>

      <br />
      <p className="font-bold text-3xl">
        Price: {calculateNumDays(range[0].startDate, range[0].endDate) * 115}€
      </p>
    </div>
  );
}

export default ReservationDetails;
