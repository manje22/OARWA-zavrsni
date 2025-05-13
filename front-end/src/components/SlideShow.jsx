import { useEffect, useState } from "react";
import { fetchSlideImages } from "../services/ImageServices";
import Slide from "./Slide";

function SlideShow() {
  const [img, setImgs] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);

  async function getImages() {
    try {
      const res = await fetchSlideImages();
      setImgs(res.images);
    } catch (error) {
      console.log(error);
    }
  }

  function ChangeImage() {
    if (currentImage >= img.length - 1) {
      setCurrentImage(0);
      return;
    }

    setCurrentImage(currentImage + 1);
  }

  setTimeout(ChangeImage, 3000);

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="w-1/2 m-auto">
      <Slide imgSrc={img[currentImage]}></Slide>
    </div>
  );
}

export default SlideShow;
