import { useEffect, useState } from "react";
import LightBox from "yet-another-react-lightbox";
import { Fullscreen, Thumbnails } from "yet-another-react-lightbox/plugins";
import { fetchSlideImages } from "../services/ImageServices";
import makeLightBoxCompatible from "../utils/makeLightBoxCompatible";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import ImageGallery from "./ImageGallery";

function LightBoxComp() {
  const [index, setIndex] = useState(-1);
  const [slides, setSlides] = useState([]);
  const [isInitializing, setIsInitializing] = useState(true);

  async function getImages() {
    try {
      const res = await fetchSlideImages();
      const compatibleRes = makeLightBoxCompatible(res.images);
      setSlides(compatibleRes);
    } catch (error) {
      //console.log(error);
    }
  }

  useEffect(() => {
    getImages();
    setIsInitializing(false);
  }, []);

  if (isInitializing) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ImageGallery imageData={slides} onClickFn={(currentIndex)=> setIndex(currentIndex)}></ImageGallery>

      <LightBox
        index={index}
        open={index>=0}
        close={() => setIndex(-1)}
        slides={slides}
        plugins={[Fullscreen, Thumbnails]}
      ></LightBox>
    </div>
  );
}

export default LightBoxComp;
