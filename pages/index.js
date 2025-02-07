/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import ReactGA from "react-ga";
import TagManager from "react-gtm-module";
import Header from "../components/Header/header";
import Venue from "../components/Venue/venue";
import speakers from "../config/speakers.json";
import ReactSlider from "../components/Slider/slider";
import Sponsors from "../components/Sponsors/sponsors";
import Subcription from "../components/Form/subscription";
import About from "../components/About/about";
import Heading from "../components/Typography/heading";
import Paragraph from "../components/Typography/paragraph";
import cities from "../config/city-lists.json";

export default function Home() {
  if (typeof window !== "undefined") {
    TagManager.initialize({ gtmId: "GTM-MCT2H5G" });
    ReactGA.initialize("UA-109278936-3");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  speakers[0].lists = [];
  speakers.map((speaker) => {
    if (Array.isArray(speaker.lists) && Object.keys(speaker.lists).length > 0) {
      speakers[0].lists.push(...speaker.lists);
    }
  });
  const list = speakers[0].lists.filter((obj, index) => {
    return index === speakers[0].lists.findIndex((o) => obj.name === o.name);
  });
  speakers[0].lists = [...list];

  return (
    <div>
      <Head>
        <title>DE-FERENCE 2025</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div id="about">
        <About />
      </div>
      <div id="venues">
        <div className="gradient-bg w-full container flex flex-col justify-center items-center">
          <div className="w-[1130px] lg:w-full flex lg:py-20 flex-col items-center justify-center">
            <div className="text-center py-[46px] w-[714px] lg:w-full">
              <Heading className="text-white">
                DE-FERENCE Throughout Years
              </Heading>
              <Paragraph className="mt-12">
                2018년부터 2025년 현재까지 진행되어 온 디퍼런스의 여정을 함께
                살펴보세요.
              </Paragraph>
            </div>
            <div className="w-full mt-[64px]">
              <ReactSlider>
                {cities.map((city) => {
                  return <Venue key={city.name} city={city} />;
                })}
              </ReactSlider>
            </div>
          </div>
        </div>

        <div id="sponsors">
          <Sponsors sponsors={[{ img: "/img/sponsors.png", link: "" }]} />
        </div>
        <div className="">
          <Subcription />
        </div>
      </div>
    </div>
  );
}
