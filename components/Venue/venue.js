/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Heading from "../Typography/heading";
import Paragraph from "../Typography/paragraph";
import Link from "next/link";

function Venue({ className, city }) {
  const handleImageClick = (e, imageUrl) => {
    e.stopPropagation();
    window.open(imageUrl, "_blank");
  };

  return (
    <Link href={`/schedule/${city.id}`}>
      <div className={`w-[500px] cursor-pointer sm:w-auto ${className}`}>
        <div className="w-[450px] sm:w-auto card-bg flex flex-col justify-center items-center p-10">
          <img
            src={city.img}
            className="w-[450px] sm:w-[400px] rounded-lg hoverEffect"
            onClick={(e) => handleImageClick(e, city.img)}
          />
        </div>

        <div className="mt-[24px] w-[450px] sm:w-full">
          <p className="text-[#47BCEE] text-[24px] py-[8px]">{city.date}</p>
          <Heading typeStyle="lg" className="text-white text-[30px]">
            {city.name},<br />
            {city.country}
          </Heading>
          <Paragraph className="pt-[16px] pb-[8px]" isYoutubeLink={true}>
            {city.description}
          </Paragraph>
        </div>
      </div>
    </Link>
  );
}

export default Venue;
