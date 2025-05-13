import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { GetReservations } from "../services/AdminServices";
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
      <header className="flex justify-between p-4 shadow-md">
        <h1 className="text-3xl font-bold">Reservation management</h1>
        <LogOutButton></LogOutButton>
      </header>
      
     
      <div className="grid grid-cols-3 gap-5 mt-15">
        {reservations.map((r) => [
          <AdminResView reservation={r}  setReservations={setReservations} key={r._id} />,
        ])}
      </div>
    </div>
  );
}

export default AdminPage;
