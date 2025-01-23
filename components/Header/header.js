import React, { useEffect, useState, useRef } from "react";
import cities from "../../config/cities.json";
import cityList from "../../config/city-lists.json";
let Globe = () => null;
import Heading from "../Typography/heading";
import Paragraph from "../Typography/paragraph";
import Button from "../Buttons/button";
import { useMediaQuery } from "react-responsive";
import Countdowns from "../Countdown/countdown";

function Header() {
  const isTablet = useMediaQuery({ maxWidth: 1118 });
  if (typeof window !== "undefined") Globe = require("react-globe.gl").default;
  const globeEl = useRef();
  const [places, setPlaces] = useState(cities.features);
  const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="white" cx="14" cy="14" r="7"></circle>
  </svg>`;

  useEffect(() => {
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 2;
    globeEl.current.controls().enableZoom = false;
  }, []);

  const gData = [...places].map((place) => {
    let color = null;
    let size = null;
    for (let i = 0; i < cityList.length; i++) {
      if (place.properties.name === cityList[i].name) {
        color = "#5100ff";
        size = 30;
      }
    }
    return {
      lat: place.properties.latitude,
      lng: place.properties.longitude,
      size: size ? size : 20,
      color: color ? color : "white",
    };
  });

  return (
    <div
      className="overflow-hidden lg:h-auto relative"
      style={{ height: "calc(100vh - 75px)" }}
    >
      <img src="/img/illustra.png" className="bg-01" />
      <div className="container w-full flex items-center justify-center">
        <div
          className="absolute sm:hidden flex items-center justify-center"
          style={{
            display: isTablet && "none",
            top: "400px",
          }}
        >
          <div className="globe-overlay"></div>
          <div className="globe-viz">
            <Globe
              ref={globeEl}
              zoom={false}
              htmlTransitionDuration={1000}
              htmlElementsData={gData}
              htmlElement={(d) => {
                const el = document.createElement("div");
                el.innerHTML = markerSvg;
                el.style.color = d.color;
                el.style.width = `${d.size}px`;
                el.style["pointer-events"] = "auto";
                el.style.cursor = "pointer";
                return el;
              }}
              globeImageUrl="https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/clouds/clouds.png"
              backgroundColor="rgba(0,0,0,0)"
              width={700}
              height={700}
            />
          </div>
        </div>
        <div className="w-[1131px] pb-8 z-99">
          <div className="flex justify-center w-full mt-12">
            <div className="flex flex-col justify-center items-center w-full">
              <div className="w-[712px] sm:w-full text-center">
                <Heading
                  className="countdown-text-gradient text-7xl sm:text-4xl leading-normal sm:leading-38px tracking-[-3px] sm:tracking-[-0.02em] font-extrabold"
                  level="h1"
                  typeStyle="heading"
                >
                  DE-FERENCE 2025: Proof of Contribution
                </Heading>
              </div>
              <div className="w-[750px] sm:w-full text-center">
                <Paragraph className="mt-[16px]">
                  De-Ference 2025: Towards a Seamless Future
                  <br />
                  서울대 블록체인 학회에서 주최하는 제 8회 디퍼런스에 여러분을
                  초대합니다. <br />
                  블록체인과 AI의 융합이 열어가는 새로운 시대, 디사이퍼와 함께
                  알아가는 시간을 가져보세요!
                </Paragraph>
              </div>
              <div className="mt-[54px] relative flex items-center justify-center">
                <a
                  href="https://event-us.kr/decipherglobal/event/77967"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button className="w-[130px]">Get Ticket</Button>
                </a>
              </div>
            </div>
          </div>
          <Countdowns />
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Header;
