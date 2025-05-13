import Banner from "../components/Banner";
import MainLayout from "../Layout/MainLayout";
import panoramaMaslinica from "../assets/panoramaMaslinica.jpg";
import SlideShow from "../components/SlideShow";
import Amenities from "../components/Amenities";

function Home(params) {
  return (
    <MainLayout>
      <div>
        <Banner
          picSrc={panoramaMaslinica}
          title={"Villa Daniela"}
          subTitle={"Book now for your perfect vacation"}
        />
      </div>
      <div className="flex flex-col justify-center align-middle mt-52 gap-7">
        <h1 className="text-5xl">Relaxing stay</h1>
        <div className="flex flex-col gap-5 text-2xl m-auto w-2/3">
          <p>
            Set within 400 metres of Maslinica Beach and 500 metres of Punta
            Beach, villa Daniela provides rooms with air conditioning and a
            private bathroom in Maslinica. With sea views, this accommodation
            offers a balcony and a swimming pool. There is a sun terrace and
            guests can make use of free WiFi, free private parking and an
            electric vehicle charging station.
          </p>
          <p>
            The units come with tiled floors and feature a fully equipped
            kitchen with a microwave, a dining area, a flat-screen TV with
            satellite channels, and a private bathroom with walk-in shower and a
            hair dryer. A toaster, a fridge and stovetop are also offered, as
            well as a coffee machine and a kettle. At the villa,
            units come with bed linen and towels.
          </p>
          <p>
            Guests can take advantage of the warm weather with the property's
            barbecue facilities.
          </p>
          <p>
            The area is popular for cycling and hiking, and bike hire is
            available at this 4-star villa. With an outdoor fireplace and a
            picnic area, this villa offers ample opportunities to wind down.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col mt-40 mb-40">
        <SlideShow></SlideShow>
      </div>
      <Amenities></Amenities>
    </MainLayout>
  );
}

export default Home;
