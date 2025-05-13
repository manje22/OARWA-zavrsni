import Banner from "../components/Banner";
import MainLayout from "../Layout/MainLayout";
import panoramaLokacija from "../assets/panoramaLokacijaPogled.jpg";
import { useState, useContext, useEffect } from "react";
import LoginRedirect from "../components/LoginRedirect";
import { UserContext } from "../contexts/UserContext";
import { HandleChange } from "../utils/forms";
import CalendarComp from "../components/CalendarComp";
import { addDays } from "date-fns";
import getRange from "../utils/getRange";
import { useNavigate } from "react-router";
import toUTCMidnight from "../utils/toUTCMidnight";
import ReservationDetails from "../components/ReservationDetails";

function NewReservation() {
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);
  const [maxChildren, setMaxChildren] = useState(7);
  const [excludedDates, setExcludedDates] = useState([]);
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 4),
      key: "selection",
    },
  ]);

  const [resFormData, setResFormData] = useState({
    numAdults: 2,
    numChildren: 0,
  });

  useEffect(() => {
    setMaxChildren(8 - resFormData.numAdults);
  }, [resFormData.numAdults]);

  function HandleChangeNewReservation(event) {
    HandleChange(event, resFormData, setResFormData);
  }

  //premisti u util?
  function parseData() {
    return {
      user: currentUser.userId,
      userName: currentUser.name + " " + currentUser.surname,
      checkIn: toUTCMidnight(range[0].startDate).toISOString(),
      checkOut: toUTCMidnight(range[0].endDate).toISOString(),
      numberOfAdults: resFormData.numAdults,
      numberOfChildren: resFormData.numChildren,
    };
  }

  async function HandleSubmit(e) {
    e.preventDefault();

    try {
      const data = parseData();
      navigate("/payment", {state: {reservationData: data}});
    } catch (error) {
      console.log(error);
    }
  }

  if (!currentUser) {
    return <LoginRedirect></LoginRedirect>;
  }

  return (
    <MainLayout>
      <Banner picSrc={panoramaLokacija} title={"Book your stay now"}></Banner>
      <div>
        <div className="bg-blue-100 rounded-4xl w-fit m-auto p-5 mt-10 mb-10">
          <form className="flex justify-center gap-15 ">
            <CalendarComp range={range} setRange={setRange} excludedDates={excludedDates} setExcludedDates={setExcludedDates}></CalendarComp>
            <div className="bg-white rounded-2xl p-3 text-center max-h-fit hover:bg-gray-50">
              <label htmlFor="numAdults" className="mr-2">
                Adults:
              </label>
              <select
                name="numAdults"
                value={resFormData.numAdults}
                onChange={HandleChangeNewReservation}
              >
                {getRange(8, false).map((num) => (
                  <option value={num} key={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
            <div className="bg-white rounded-2xl p-3 text-center max-h-fit hover:bg-gray-50">
              <label htmlFor="numChildren" className="mr-2">
                Children:
              </label>
              <select
                name="numChildren"
                value={resFormData.numChildren}
                onChange={HandleChangeNewReservation}
              >
                {getRange(maxChildren).map((num) => (
                  <option value={num} key={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
          </form>
        </div>
        <div>
          <h1 className="text-4xl">Your reservation:</h1>
          {Object.values(resFormData).every((el) => el === undefined) ? (
            <div>Your reservation details will apear here</div>
          ) : (
            //stavi ovo u zasebnu komp
            <ReservationDetails range={range} resFormData={resFormData}></ReservationDetails>
          )}
        </div>
        <div>
          <button
            className="bg-yellow-300 rounded-2xl p-3 text-white font-bold text-xl mt-5 mb-5 hover:scale-110 transition ease-in"
            onClick={HandleSubmit}
          >
            Submit and go to payment
          </button>
        </div>
      </div>
    </MainLayout>
  );
}

export default NewReservation;
