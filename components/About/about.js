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
      <div className="pt-[160px] lg:py-[100px] container flex items-center justify-center w-full">
        <div className="w-[1120px] lg:w-full flex lg:flex-col-reverse items-center justify-between">
          <div
            className="w-[500px] h-[500px] lg:w-[350px] lg:h-[350px] lg:mt-10" // border, p-10, borderRadius 스타일 제거
            style={{}}
          >
            <Image
              src="/img/POAP.png"
              alt="Deference"
              layout="intrinsic"
              width={1000}
              height={1000}
              objectFit="contain" // 이미지 비율 유지
            />
          </div>
          <div className="w-[600px] ml-10 lg:ml-0 lg:w-full lg:text-center">
            <Heading className="text-white text-[50px]">
              About <br />
              DE-FERENCE 2025
            </Heading>
            <Paragraph typeStyle="md" className="lg:mt-10">
              DE-FERENCE는 서울대학교 블록체인 학회, 디사이퍼(Decipher)가
              2018년부터 매년 주관하는 주목받는 컨퍼런스입니다. 2025년 2월 15일
              드림플러스 강남에서 열리는 이번 제 8회 행사는 &quot;Proof of
              Contribution&quot;이라는 주제 아래, 블록체인 생태계의 최신
              리서치와 인사이트를 공유하는 컨퍼런스입니다. 이 자리는 디사이퍼
              학회원들과 블록체인 산업의 저명한 연사들이 모여, 다양한 콘텐츠를
              통해 깊이 있는 지식을 나누는 장이 될 것입니다. <br />
              <br />
              디사이퍼는 연구 결과를 단순히 학회 내부에만 머물게 하는 것이
              아니라, 블록체인 기술과 산업의 발전에 기여하고자 외부로 적극적으로
              공유합니다. 한 학기 동안 학회원들이 팀 프로젝트를 통해 집중 연구한
              내용을 디퍼런스에서 발표함으로써, 디사이퍼는 국내를 넘어 글로벌
              무대에서도 그 영향력을 확장해 나가고 있습니다. <br />
              <br />
              디퍼런스는 블록체인 기술의 미래를 탐구하고, 생태계에 대한 깊은
              이해를 바탕으로 산업 발전에 기여하려는 모든 이들에게 열려
              있습니다. 이 컨퍼런스는 블록체인 생태계의 건강한 성장을 도모하고,
              기술 개발과 가치 연구를 통해 실질적인 기여를 하는 것을 목표로
              합니다.
            </Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
