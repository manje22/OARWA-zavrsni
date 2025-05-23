import { useContext } from "react";
import { DeleteAndGetNew } from "../services/AdminServices";
import { UserContext } from "../contexts/UserContext";

function AdminResView({ reservation, setReservations }) {
  const { currentUser } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    const res = await DeleteAndGetNew(reservation._id, currentUser);
    setReservations(res.updatedReservations);
    console.log("Res from adminresview:", res);
  }

  return (
    <div className="flex items-center justify-center p-5 gap-16 border-2 w-fit rounded-2xl hover:scale-120 bg-white">
      <div className="flex flex-col gap-3">
        <div>
          Name: {reservation.user.name + " " + reservation.user.surname}
        </div>
        <div>Adults: {reservation.numberOfAdults}</div>
        <div>Children:{reservation.numberOfChildren}</div>
        <div>Check in: {reservation.checkIn}</div>
        <div>Check out: {reservation.checkOut}</div>
      </div>
      <div>
        <button
          className="bg-red-400 p-4 rounded-2xl hover:text-white hover:bg-red-500 font-bold"
          onClick={handleSubmit}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default AdminResView;
