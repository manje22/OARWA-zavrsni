import { useState } from "react";
import { HandleChange } from "../utils/forms";
import { Link, useLocation, useNavigate } from "react-router";
import paymentValidation from "../utils/paymentValidation";
import { makeNewRes } from "../services/ReservationServices";

function Payment() {
  const location = useLocation();
  const {reservationData} = location.state

  const [formData, setformData] = useState({
    cardNumber: "",
    cardHolder: "",
    expMonth: "",
    expYear: "",
    CVV: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleChangePayment(event) {
    HandleChange(event, formData, setformData);
  }

  async function HandlePaymentSubmition(event) {
    event.preventDefault();

    const paymentError = paymentValidation(formData);
    setError(paymentError);

    if (!paymentError) {
      const response = await makeNewRes(reservationData);
      if (response.status === 201 || 200) {
        console.log(response);
        alert("payment ok");
      }
      navigate("/");
    }
    return;
  }


  return (
    <div>
      <div className="p-10">
        <h1 className="text-5xl">Payment Details</h1>
      </div>
      <div>
        <form className="flex flex-col items-center gap-5 text-2xl border border-black rounded-2xl w-fit m-auto p-10">
          <input
            type="text"
            name="cardNumber"
            placeholder="CARD NUMBER"
            value={formData.cardNumber}
            onChange={handleChangePayment}
            className="border-2"
            required
          ></input>
          <input
            type="text"
            name="cardHolder"
            placeholder="CARD HOLDER"
            value={formData.cardHolder}
            onChange={handleChangePayment}
            className="border-2"
            required
          ></input>
          <div className="flex gap-10">
            <input
              type="number"
              name="expMonth"
              placeholder="MM"
              value={formData.expMonth}
              onChange={handleChangePayment}
              className="border-2"
              required
            ></input>
            <input
              type="number"
              name="expYear"
              placeholder="YY"
              value={formData.expYear}
              onChange={handleChangePayment}
              className="border-2"
              required
            ></input>
          </div>
          <input
            type="number"
            name="CVV"
            placeholder="CVV"
            value={formData.CVV}
            onChange={handleChangePayment}
            className="border-2"
            required
          ></input>
          <div>
            <button
              onClick={HandlePaymentSubmition}
              className="bg-blue-300 rounded-3xl p-3 text-white hover:bg-blue-400"
            >
              Submit payment
            </button>
          </div>
        </form>
        {error && (
          <div>
            <p className="text-red-500 border-2 w-fit m-auto mt-8 mb-8 rounded-2xl p-2 shadow-red-800 shadow-sm">{error}</p>
          </div>
        )}
      </div>

      <div>
        <Link to={"/"} className="hover:text-blue-700 underline">
          Cancel and back to home?
        </Link>
      </div>
    </div>
  );
}

export default Payment;
