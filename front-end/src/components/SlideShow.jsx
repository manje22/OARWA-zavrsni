import axios from "axios";
import { useEffect, useState } from "react";
import { fetchSlideImages } from "../services/ImageServices";

function SlideShow() {
  const [img, setImgs] = useState([]);

  async function getImages() {
    try {
      const res = await fetchSlideImages();
      console.log(res.images);
      setImgs(res.images);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div>
      <img src={img[0]} className="w-48 h-96"></img>
    </div>
  );
}

export default SlideShow;
