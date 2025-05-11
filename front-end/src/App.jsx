import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router";
import { UserContext } from "./contexts/UserContext";
import { jwtDecode } from "jwt-decode";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Information from "./pages/Information";
import Login from "./pages/Login";
import NewReservation from "./pages/NewReservation";
import Registration from "./pages/Registration";
import Payment from "./pages/Payment";
import isTokenValid from "./utils/ValidateToken";
import AdminPage from "./pages/AdminPage";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    const result = isTokenValid();

    if (!result.isValid) {
      setCurrentUser(null);
    } else {
      setCurrentUser(result.user);
    }

    setIsInitializing(false);
  }, []);

  if (isInitializing) {
    return <div>Loading...</div>;
  }

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/information" element={<Information />} />
          <Route path="/login" element={<Login />} />
          <Route path="/newreservation" element={<NewReservation />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/admin" element={<AdminPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
