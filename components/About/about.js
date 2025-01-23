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
              DE-Ference 2025: Towards a Seamless Future
              <br />
              서울대 블록체인 학회에서 주최하는 제 8회 디퍼런스에 여러분을
              초대합니다. <br />
              블록체인과 AI의 융합이 열어가는 새로운 시대, 디사이퍼와 함께
              알아가는 시간을 가져보세요! <br /> 이번 DE-FERENCE에서는
              <strong>
                &ldquo;Towards a Seamless Future of Blockchain&rdquo;
              </strong>
              이라는 주제 아래, 학회원들은 블록체인의 최신 기술 트렌드, AI와의
              접목, 그리고 실용적인 연구 성과를 공유하며 미래를 조망합니다.
            </Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
