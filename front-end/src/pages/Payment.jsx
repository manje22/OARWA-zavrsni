import { useState } from "react";
import { HandleChange } from "../utils/forms";
import { Link, useLocation, useNavigate } from "react-router";
import paymentValidation from "../utils/paymentValidation";
import { makeNewRes } from "../services/ReservationServices";
import MainLayout from "../Layout/MainLayout";
import StudioAli from "../assets/StudioAli.jpg";

function Payment() {
  const location = useLocation();
  const { reservationData } = location.state;
  console.log("res data: ", reservationData);

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
