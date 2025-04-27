import balcony from "../assets/icons/balcony.png";
import grill_icon from "../assets/icons/grill_icon.png";
import parking_area from "../assets/icons/parking_area.png";
import pool from "../assets/icons/pool.png";
import snowflake from "../assets/icons/snowflake.png";
import wifi from "../assets/icons/wifi.png";
import AmenityItem from "./AmenityItem";

function Amenities() {
  const icons = [
    { img: balcony, caption: "Balcony" },
    { img: grill_icon, caption: "BBQ area" },
    { img: parking_area, caption: "On-site parking" },
    { img: pool, caption: "Outdoor pool" },
    { img: snowflake, caption: "Air-conditioning" },
    { img: wifi, caption: "Free unlimited wifi" },
  ];
  return (
    <div>
      <h1 className="text-6xl mb-5">Amenities we offer at our apartments</h1>
      <h2 className="text-4xl mb-10">
        All are included at no additional cost with booking
      </h2>
      <div className="grid grid-cols-3 gap-8 m-auto w-fit mb-50">
        {icons.map((i) => [
          <AmenityItem
            key={i.caption}
            imgSrc={i.img}
            caption={i.caption}
          ></AmenityItem>,
        ])}
      </div>
    </div>
  );
}

export default Amenities;
