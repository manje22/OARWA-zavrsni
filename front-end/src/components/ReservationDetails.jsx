import { format } from "date-fns/format";
import calculateNumDays from "../utils/CalculateNumDays";

function ReservationDetails({ range, resFormData }) {
  return (
    <div className="flex flex-col gap-1 text-2xl">
      <p>Check in: {`${format(range[0].startDate, "dd/MM/yyyy")}`}</p>
      <p>Check in: {`${format(range[0].endDate, "dd/MM/yyyy")}`}</p>
      <p>Adults: {resFormData.numAdults}</p>
      <p>Children: {resFormData.numChildren}</p>
      <p>
        Price: {calculateNumDays(range[0].startDate, range[0].endDate) * 115}€
      </p>
    </div>
  );
}

export default ReservationDetails;
