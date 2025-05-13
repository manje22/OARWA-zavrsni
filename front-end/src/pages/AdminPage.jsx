import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { GetReservations } from "../services/AdminServices";
import axios from "axios";
import AdminResView from "../components/AdminResView";
import LogOutButton from "../components/LogOutButton";
import { useNavigate } from "react-router";

function AdminPage() {
  const { currentUser } = useContext(UserContext);
  const [reservations, setReservations] = useState([]);
  const navigate = useNavigate();

  const setUp = async () => {
    try {
      const res = await GetReservations();
      console.log("Res from adminpage", res);
      setReservations(res);
    } catch (error) {console.error("Problem loading reservations, ", error);}
  };
  
  useEffect(() => {
    setUp();
  }, []);

  if (!reservations) {
    return <div>Loading reservations</div>;
  }

  if (!currentUser) {
    navigate("/login");
  }


  return (
    <div>
      <LogOutButton></LogOutButton>
      <h1>Reservation management</h1>
      <div className="m-auto">
        {reservations.map((r) => [
          <AdminResView reservation={r}  setReservations={setReservations} key={r._id} />,
        ])}
      </div>
    </div>
  );
}

export default AdminPage;
