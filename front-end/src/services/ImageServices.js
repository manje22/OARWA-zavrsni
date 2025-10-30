import axios from "axios";

export const fetchSlideImages = async () => {
    const response = await axios.get(`${import.meta.env.SERVER_URL}/images/slide_images`);
    const data = await response.data;
    return data;
}