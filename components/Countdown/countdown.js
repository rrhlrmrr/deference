import React, { useEffect, useRef, useState } from "react";
import Countdown from "react-countdown";

const dates = [
  {
    name: "DE-FERENCE 2025",
    date: "Feburary 15, 2025",
  },
];

function Countdowns() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const locationRef = useRef(null);
  const dateRef = useRef(null);
  useEffect(() => {
    const intervalId = setInterval(() => {
      locationRef.current.classList.remove("hidden");
      locationRef.current.classList.add("home-title");
      dateRef.current.classList.remove("hidden");
      dateRef.current.classList.add("home-title");
      setSelectedIndex((prevIndex) => (prevIndex + 1) % dates.length);
      setTimeout(() => {
        if (locationRef?.current) {
          locationRef.current.classList.remove("home-title");
          locationRef.current.classList.add("hidden");
        }
        if (dateRef?.current) {
          dateRef.current.classList.remove("home-title");
          dateRef.current.classList.add("hidden");
        }
      }, 9900); // Element stays visible for 800 milliseconds
    }, 10000); // Toggle visibility every 1500 milliseconds

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return (
        <div
          className="home-title flex items-center  w-[200px] sm:w-[100px] justify-between"
          ref={dateRef}
        >
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div>
            <span className="glitch text-white text-[30px] sm:text-[18px]">
              Ended
            </span>
          </div>
        </div>
      );
    } else {
      // Render a countdown
      return (
        <div
          className="home-title flex items-center  w-[200px] sm:w-[100px] justify-between"
          ref={dateRef}
        >
          <div>
            <span className="glitch text-white text-[30px] sm:text-[18px]">
              {days}:
            </span>
          </div>
          <div>
            <span className="glitch text-white text-[30px] sm:text-[18px]">
              {hours}:
            </span>
          </div>
          <div>
            <span className="glitch text-white text-[30px] sm:text-[18px]">
              {minutes}:
            </span>
          </div>
          <div>
            <span className="glitch text-white text-[30px] sm:text-[18px]">
              {seconds}
            </span>
          </div>
        </div>
      );
    }
  };
  return (
    <div className="mt-[360px] sm:mt-[150px] flex items-center justify-between">
      <div className="h-[40px]">
        <div className="home-title" ref={locationRef}>
          <span className="text-[25px] sm:text-[18px] text-white font-bold">
            {dates[selectedIndex].name}
          </span>
        </div>
      </div>
      <div className="h-[40px]">
        <Countdown
          date={new Date(dates[selectedIndex].date)}
          daysInHours={false}
          renderer={renderer}
        />
      </div>
    </div>
  );
}

export default Countdowns;
