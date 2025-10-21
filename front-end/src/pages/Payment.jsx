import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { makeNewRes } from "../services/ReservationServices";
import MainLayout from "../Layout/MainLayout";
import StudioAli from "../assets/StudioAli.jpg";

function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [hasReservationData, setHasReservationData] = useState(!!location.state?.reservationData);

  useEffect(() => {
    // Check if we have valid reservation data
    if (!hasReservationData) {
      navigate('/');
      return;
    }

    const { checkIn, checkOut } = location.state.reservationData;
    const reservationKey = `reservation_${checkIn}_${checkOut}`;
    const inProgressKey = `${reservationKey}_inprogress`;

    const isAlreadySubmitted = localStorage.getItem(reservationKey);
    const isInProgress = localStorage.getItem(inProgressKey);

    // If already submitted, do nothing. If another tab or render is in-progress, skip too.
    if (isAlreadySubmitted) return;
    if (isInProgress) return;

    try {
      localStorage.setItem(inProgressKey, 'true');
      makeNewRes(location.state.reservationData)
        .then(() => {
          localStorage.setItem(reservationKey, 'true');
        })
        .catch((err) => {
          setError(err.message);
          // keep the in-progress flag for a short time? we'll clear it below
        })
        .finally(() => {
          localStorage.removeItem(inProgressKey);
        });
    } catch (err) {
      // Fallback cleanup
      localStorage.removeItem(inProgressKey);
      setError(err.message || 'Unknown error');
      navigate('/');
    }
  }, [hasReservationData, navigate]);

  return (
    <div>
      <MainLayout>
        <div
          className="w-full h-screen bg-cover bg-center relative"
          style={{ backgroundImage: `url(${StudioAli})` }}
        >
          <div className="absolute inset-0 bg-opacity-30 flex flex-col justify-center items-center text-white">
            <h1 className="text-8xl font-bold">Your reservation is booked</h1>
            <div className="bg-white bg-opacity-90 rounded-2xl p-50 m-10 text-black">
              <p>Your reservation is successfully booked!</p>
              <p>An email has been sent to you containing the details of your reservation</p>
              <br></br>
              <p>You have 7 days to pay the deposit or your reservation will automatically be canceled</p>
              <p>Payment details are located here</p>
              <br></br>
              <p>If you have any questions or concerns feel free to contact us</p>
              <p>We look forward to seeing you!</p>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

export default Payment;
