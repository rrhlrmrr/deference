import React from "react";
import Image from "next/image";
import Heading from "../Typography/heading";
import Paragraph from "../Typography/paragraph";

function About() {
  return (
    <div className="relative overflow-hidden h-[900px] lg:h-full">
      <Image
        src="/img/sun.png"
        alt="Deference"
        layout="fill"
        className="bg-03"
      />
      <div className="pt-[80px] lg:py-[100px] container flex items-center justify-center w-full">
        <div className="w-[1120px] lg:w-full flex lg:flex-col-reverse items-center justify-between">
          <div
            className="w-[500px] h-[500px] lg:w-[350px] lg:h-[350px] lg:mt-10"
            style={{}}
          >
            <Image
              src="/img/POAP.png"
              alt="Deference"
              layout="intrinsic"
              width={1000}
              height={1000}
              objectFit="contain"
            />
          </div>
          <div className="w-[600px] ml-10 lg:ml-0 lg:w-full lg:text-center">
            <Heading className="text-white text-[50px]">
              About <br />
              DE-FERENCE 2025
            </Heading>
            <Paragraph typeStyle="md" className="lg:mt-10">
              DE-FERENCE는 서울대학교 블록체인 학회, 디사이퍼(Dechiper)가
              2018년부터 매년 주관하는 컨퍼런스로, 디사이퍼 학회원들과 블록체인
              업계의 빌더들이 한자리에 모여 업계에 대해 함께 논의하고
              네트워킹하는 행사입니다.
              <br />
              <br /> 2025년 2월 15일 드림플러스 강남에서 열리는 제 8회
              디퍼런스는
              <strong>"Towards a Seamless Future of Blockchain"</strong>이라는
              주제로 진행됩니다. 본 컨퍼런스에서는 블록체인의 최신 기술 트렌드,
              AI와의 접목, 그리고 실용적인 연구 성과를 공유하며 블록체인의
              미래를 조망할 예정입니다.
              <br />
              <br /> 디사이퍼는 학문적 연구를 넘어, 블록체인 생태계의 발전을
              위해 학계과 산업을 연결하는 플랫폼 역할을 수행하고 있습니다. 이번
              컨퍼런스에서는 디사이퍼 학회원들이 한 학기 동안 연구하고 개발한
              블록체인 프로젝트를 발표하며, 업계 전문가들과 함께 심도 있는
              논의와 인사이트를 교류하는 장이 될 것입니다.
              <br />
              <br /> 2025년, 블록체인은 AI 기술과의 융합을 통해 혁신적인 도약을
              이루고 있습니다. 기술의 경계를 허물며 더욱 효율적인 미래로
              나아가는 이 여정에 디사이퍼가 함께합니다. DE-FERENCE 2025에서
              변화하는 블록체인 산업의 흐름을 경험하고, 미래를 만들어갈 여러분을
              초대합니다.
            </Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
