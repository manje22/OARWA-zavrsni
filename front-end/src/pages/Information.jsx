import Banner from "../components/Banner"
import MainLayout from "../Layout/MainLayout"
import panoramaMaslinica from "../assets/panoramaMaslinica.jpg";

function Information(params) {
  return (
    <div>
      <MainLayout>
        <Banner
          subTitle={"How to get here and how to find us"}
          title={"Useful information"}
          picSrc={panoramaMaslinica}
        ></Banner>
        <div className="mt-10">
          <h1 className="text-4xl mb-5 font-bold">
            Getting to the island of Šolta
          </h1>
          <p>
            Whether you are arriving by foot or by car you will need to get to
            the island of Šolta by boat.
          </p>
          <p>
            Departing from the harbour in Split you can catch either a ferry or
            a katamaran to Rogač. There is also the option of a water taxi, but
            this is a much pricier option.
          </p>
          <p>
            If you are arriving from Trogir you can arrive directly to maslinica
            via water taxi
          </p>
          <div>
            <h1 className="text-3xl mt-10 font-bold">Getting to Maslinica</h1>
            <div className="flex gap-7 justify-center p-10">
              <div className="flex flex-col w-1/4">
                <h2 className="font-black">By car</h2>
                <p>
                  If coming by car it is a 15 minute ride through the heart of
                  the island to our property where parking will be provided
                </p>
              </div>
              <div className="flex flex-col w-1/4">
                <h2 className="font-black">By bus</h2>
                <p>
                  The bus line Rogač-Grohote-Gornje Selo-Maslinica departs from
                  the port of Rogač shortly after the arrival of each ferry.
                  Maslinica is the last stop and the bus will take you to the
                  center of Maslinica. Our apartments are then just a short walk
                  away
                </p>
              </div>
              <div className="flex flex-col w-1/4">
                <h2 className="font-black">By taxi</h2>
                <p>
                  If you wish to arrive by taxi contact us for further
                  information
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full justify-center items-center gap-10 mb-10">
          <h1 className="font-bold text-3xl">Finding us on a map...</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2898.9110972288895!2d16.205120175643078!3d43.399787568784795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13356d9d18a9e44b%3A0x70d655d3639afe48!2sDomovinskog%20Rata%2074E%2C%2021430%2C%20Maslinica!5e0!3m2!1sen!2shr!4v1721473375752!5m2!1sen!2shr"
            width="100%"
            height="500px"
            allowFullScreen="true"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-9/12"
          ></iframe>
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl underline mb-5">Helpful links</h2>
          <div className="flex flex-col gap-4">
            <a href="https://www.jadrolinija.hr/hr/putovanje/split_-_rogac_solta">
              Ferry information
            </a>
            <a href="https://www.promet-split.hr/en/timetables/solta-island/linijaid/49965">
              Bus information
            </a>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

export default Information