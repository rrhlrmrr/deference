import React from "react";
import Button from "../Buttons/button";

function Subcription() {
  return (
    <div className="mt-[106px] subscription container flex justify-center">
      <div className="w-[1024px] min-h-[253px] lg:py-10 lg:w-full flex flex-col items-center mt-[106px]">
        <h3 className="text-[32px] text-white lg:text-center">
          Subscribe for DE-FERENCE 2025 updates!
        </h3>
        <a
          href="http://www.youtube.com/@decipher-media"
          target="_blank"
          rel="noreferrer"
          className="sm:w-full"
        >
          <Button type="submit" className="w-full md:w-[200px] mt-8 px-10">
            Subscribe
          </Button>
        </a>
      </div>
    </div>
  );
}

export default Subcription;
