import React from "react";
import Heading from "../Typography/heading";
import Paragraph from "../Typography/paragraph";
import Image from "next/image";

function Agenda({ city }) {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center">
        <Heading className="text-[30px] text-white">Time Table</Heading>
        {!city.agenda && (
          <div className="w-[720px] lg:w-full mt-[140px] text-center">
            <Heading typeStyle="lg" className="text-white text-[30px]">
              Coming Soon - Stay Tuned!
            </Heading>
          </div>
        )}
      </div>
      {city.agenda && (
        <div className="mt-[40px]">
          <Heading
            typeStyle="heading-md"
            className="countdown-text-gradient text-2xl"
            level="h3"
          >
            {city.date}
          </Heading>
          <div className="mt-[40px]">
            {city.agenda.map((talk) => {
              return (
                <div
                  key={talk.session}
                  className={`flex sm:flex-col justify-between mt-[50px] ${
                    !talk.speaker && "countdown-text-gradient"
                  }`}
                >
                  <div className="flex flex-col">
                    <Paragraph typeStyle="body-md">{talk.time}</Paragraph>
                    <div className="flex mt-2">
                      {talk.links &&
                        talk.links.map((link, index) => (
                          <div key={index} className="mt-2">
                            <a
                              href={link.ref}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Image
                                src={link.img}
                                alt={`Link related to ${talk.session}`}
                                width={30}
                                height={30}
                              />
                            </a>
                          </div>
                        ))}
                    </div>
                  </div>
                  <div className="flex justify-between lg:flex-col w-[75%] lg:w-full ">
                    <div className="w-[50%] lg:w-full ">
                      <Paragraph typeStyle="body-st" className="">
                        {talk.type}
                      </Paragraph>
                      <Heading
                        level="h3"
                        typeStyle="heading-md-semibold"
                        className="mt-[23px] text-white text-[25px] sm:text-[25px]"
                      >
                        {talk.session}
                      </Heading>
                    </div>
                    {talk.speaker && typeof talk.speaker === "number" ? (
                      <div className="flex items-center lg:mt-4">
                        <div className="w-[94px] h-[94px]">
                          <img
                            src={city.speakers[talk.speaker - 1].img}
                            alt={city.speakers[talk.speaker - 1].name}
                            className="object-cover rounded-full  w-full h-full"
                          />
                        </div>
                        <div className="ml-4 w-[300px] sm:w-[250px]">
                          <Heading
                            typeStyle="heading-sm-semibold"
                            className="text-white"
                          >
                            {city.speakers[talk.speaker - 1].name}
                          </Heading>
                          <Paragraph typeStyle="body-sm" className="mt-2">
                            {city.speakers[talk.speaker - 1].title}
                          </Paragraph>
                        </div>
                      </div>
                    ) : (
                      <div></div>
                    )}
                    {talk.speaker && typeof talk.speaker === "object" && (
                      <div className="flex flex-col">
                        {talk.speaker.map((speak, i) => (
                          <div key={i} className="mt-6">
                            <div className="flex items-center lg:mt-4">
                              <div className="w-[94px] h-[94px]">
                                <img
                                  src={city.speakers[speak - 1].img}
                                  alt={city.speakers[speak - 1].name}
                                  className="object-cover rounded-full  w-full h-full"
                                />
                              </div>
                              <div className="ml-4 w-[300px] sm:w-[250px]">
                                <Heading
                                  typeStyle="heading-sm-semibold"
                                  className="text-white"
                                >
                                  {city.speakers[speak - 1].name}
                                </Heading>
                                <Paragraph typeStyle="body-sm" className="mt-2">
                                  {city.speakers[speak - 1].title}
                                </Paragraph>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Agenda;
