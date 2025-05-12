import Banner from "../components/Banner";
import ImageGallery from "../components/ImageGallery";
import LightBoxComp from "../components/LightBoxComp";
import MainLayout from "../Layout/MainLayout";
import panoramaMaslinica from "../assets/panoramaMaslinica.jpg";

function Gallery() {
  return (
    <>
      <MainLayout>
        <Banner picSrc={panoramaMaslinica} title={"Take a look at the property"}></Banner>
        <LightBoxComp></LightBoxComp>
      </MainLayout>
    </>
  );
}

export default Gallery;
