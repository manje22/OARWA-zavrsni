import { useState } from "react";
import { HandleChange } from "../utils/forms";

function Payment({ total }) {
  const [formData, setformData] = useState({
    cardNumber: "",
    cardHolder: "",
    expMonth: "",
    expYear: "",
    CVV: "",
  });
  const [error, setError] = useState(null);
  const currentDate = new Date();
  const currentDateYear = currentDate.getFullYear();

  function handleChangePayment(event) {
    HandleChange(event, formData, setformData);
  }

  function HandlePaymentSubmition(event) {
    event.preventDefault();

    if (!formData.cardNumber) {
      setError("Card number must be provided");
      return;
    }
    if (!formData.cardHolder) {
      setError("Card holder name must be provided");
      return;
    }
    if (!formData.expMonth) {
      setError("Month of expiration must be provided");
      return;
    }
    if (!formData.expYear) {
      setError("Year of expiration must be provided");
      return;
    }

    if (!formData.CVV) {
        setError("CVV must be provided");
        return;
      }

    if (formData.expMonth < 1 || formData.expMonth > 12) {
      setError("Invalid expiration month");
      return;
    }
    if (formData.expYear < currentDateYear) {
        console.log(formData.expYear);
        console.log(currentDateYear);
      setError("Card expired");
      return;
    }
    alert("Payment successfull");
  }
  return (
    <div>
      <div className="p-10">
        <h1 className="text-5xl">Payment Details</h1>
        <p className="text-3xl mt-10 mb-16">Total: {total}</p>
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
          <div>
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
            <p>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Payment;
