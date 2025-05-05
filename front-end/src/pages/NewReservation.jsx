import Banner from "../components/Banner";
import MainLayout from "../Layout/MainLayout";
import panoramaLokacija from "../assets/panoramaLokacijaPogled.jpg";
import { useState, useContext } from "react";
import LoginRedirect from "../components/LoginRedirect";
import { UserContext } from "../contexts/UserContext";
import { HandleChange } from "../utils/forms";
import CalendarComp from "../components/CalendarComp";
import { format } from "date-fns/format";
import { addDays } from "date-fns";

function NewReservation(params) {
  const { currentUser} = useContext(UserContext);
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const [resFormData, setResFormData] = useState({
    numAdults: undefined,
    numChildren: undefined,
  });

  function HandleChangeNewReservation(event) {
    HandleChange(event, resFormData, setResFormData);
  }

  if (!currentUser) {
    return <LoginRedirect></LoginRedirect>;
  }

  return (
    <MainLayout>
      <Banner picSrc={panoramaLokacija} title={"Book your stay now"}></Banner>
      <div>
        <div className="bg-blue-100 rounded-4xl w-fit m-auto p-5 mt-10 mb-10">
          <form className="flex justify-center gap-15">
            <CalendarComp range={range} setRange={setRange}></CalendarComp>
            <div>
              <label htmlFor="numAdults">Adults:</label>
              <select
                name="numAdults"
                value={resFormData.numAdults}
                onChange={HandleChangeNewReservation}
              >
                <option>Select</option>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <option value={num} key={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="numChildren">Children:</label>
              <select
                name="numChildren"
                value={resFormData.numChildren}
                onChange={HandleChangeNewReservation}
              >
                <option>Select</option>
                {[0, 1, 2, 3, 4, 5].map((num) => (
                  <option value={num} key={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
          </form>
          <button onClick={() => console.log(resFormData)}>
            Print res details
          </button>
        </div>
        <div>
          <h1 className="text-4xl">Your reservation:</h1>
          {Object.values(resFormData).every((el) => el === undefined) ? (
            <div>Your reservation details will apear here</div>
          ) : (
            <div>
              <p>Check in: {`${format(range[0].startDate, "dd/MM/yyyy")}`}</p>
              <p>Check in: {`${format(range[0].endDate, "dd/MM/yyyy")}`}</p>
              <p>Adults: {resFormData.numAdults}</p>
              <p>Children: {resFormData.numChildren}</p>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}

export default NewReservation;
