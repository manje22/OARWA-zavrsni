import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function ReservationConfirmationPopUp({handleSubmit}) {
  return (
    <div className="w-fit bg-yellow-300 rounded-2xl p-3 text-white font-bold text-xl mt-5 mb-5 hover:scale-110 transition ease-in">
      <Popup trigger={<button> Submit your reservation </button>} modal nested>
        {(close) => (
          <div className="">
            <div className="flex flex-col justify-center items-center p-5">
              <h1 className="text-4xl">Are you sure?</h1>
              <p className="mt-5 text-xl text-center">
                Once you submit your reservation you will no longer be able to
                make changes
              </p>
            </div>
            <div className="flex gap-10 justify-center">
              <div>
                <button
                  onClick={() => close()}
                  className="w-fit bg-red-300 rounded-2xl p-3 text-white font-bold text-xl mt-5 mb-5 hover:scale-110 transition ease-in hover:bg-red-500"
                >
                  Go back
                </button>
              </div>
              <div>
                <button className="w-fit bg-blue-300 rounded-2xl p-3 text-white font-bold text-xl mt-5 mb-5 hover:scale-110 transition ease-in hover:bg-blue-500" onClick={handleSubmit}>
                  Submit reservation
                </button>
              </div>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
}

export default ReservationConfirmationPopUp;
