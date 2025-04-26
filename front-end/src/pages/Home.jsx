import Banner from "../components/Banner";
import MainLayout from "../Layout/MainLayout";
import panoramaMaslinica from "../assets/panoramaMaslinica.jpg";
import SlideShow from "../components/SlideShow";

function Home(params) {
  return (
    <MainLayout>
      <div>
        <Banner
          picSrc={panoramaMaslinica}
          title={"Apartmani Mariela"}
          subTitle={"Book now for your perfect vacation"}
        />
      </div>
      <div className="flex flex-col justify-center align-middle">
        <h1>Relaxing stay</h1>
        <div>
          <p>
            Set within 400 metres of Maslinica Beach and 500 metres of Punta
            Beach, Apartmani Mariela provides rooms with air conditioning and a
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
            well as a coffee machine and a kettle. At the apartment complex,
            units come with bed linen and towels.
          </p>
          <p>
            Guests can take advantage of the warm weather with the property's
            barbecue facilities.
          </p>
          <p>
            The area is popular for cycling and hiking, and bike hire is
            available at this 3-star apartment. With an outdoor fireplace and a
            picnic area, this apartment offers ample opportunities to wind down.
          </p>
        </div>
      </div>
      <div>
        <SlideShow></SlideShow>
      </div>
    </MainLayout>
  );
}

export default Home;
