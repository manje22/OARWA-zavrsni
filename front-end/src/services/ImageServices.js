import axios from "axios";

export const fetchSlideImages = async () => {
    const response = await axios.get('http://localhost:3000/images/slide_images');
    const data = await response.data;
    return data;
}