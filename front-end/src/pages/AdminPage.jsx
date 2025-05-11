import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { GetReservations } from "../services/AdminServices";
import axios from "axios";

function AdminPage() {
  const { currentUser } = useContext(UserContext);
  const [reservations, setReservations] = useState([]);

  useEffect(() =>{
    GetReservations(currentUser);
  }, []);

  return (
    <div>
      <h1>Reservation management</h1>
    </div>
  );
}

export default AdminPage;
