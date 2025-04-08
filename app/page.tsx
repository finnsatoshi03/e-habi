"use client";

import Image from "next/image";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import handLeft from "@/public/images/hand-left.png";
import handRight from "@/public/images/hand-right.png";
import broom from "@/public/images/broom.png";
import map from "@/public/images/map.png";
import bamboo from "@/public/images/bamboo.png";
import feet from "@/public/images/feet.png";
import progress1 from "@/public/images/progress/1.jpg";
import progress2 from "@/public/images/progress/2.jpg";
import progress3 from "@/public/images/progress/3.jpg";
import progress4_1 from "@/public/images/progress/4.1.jpg";
import progress4_2 from "@/public/images/progress/4.2.jpg";
import progress5_1 from "@/public/images/progress/5.1.jpg";
import progress5_2 from "@/public/images/progress/5.2.jpg";
import progress6 from "@/public/images/progress/6.jpg";
import progress7 from "@/public/images/progress/7.jpg";

import Footer from "./_components/Footer";
import { Header } from "./_components/Header";
import { useScrollAnimations } from "./_animations/useScrollAnimations";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const {
    parentRef,
    handLeftRef,
    handRightRef,
    broomRef,
    secondSectionRef,
    firstParagraphRef,
    verticalLineRef,
    secondParagraphRef,
    mapRef,
    thirdSectionFirstParagraphRef,
    horizontalLineRef,
    thirdSectionSecondParagraphRef,
    fourthSectionBroomRef,
    fourthSectionTitleRef,
    fourthSectionBoxRef,
    fourthSectionLineRef,
    fourthSectionNumberRef,
    fourthSectionTextRef,
    fourthSectionBottomLineRef,
    fifthSectionBroomRef,
    fifthSectionTitleRef,
    fifthSectionBoxRef,
    fifthSectionNumberRef,
    fifthSectionTextRef,
    fifthSectionLineRef,
    fifthSectionBottomLineRef,
    sixthSectionTitleRef,
    sixthSectionBoxRef,
    sixthSectionLineRef,
    sixthSectionNumberRef,
    sixthSectionTextRef,
    sixthSectionBottomLineRef,
    seventhSectionBroomRef,
    seventhSectionTitleRef,
    seventhSectionBoxRef,
    seventhSectionLineRef,
    seventhSectionNumberRef,
    seventhSectionTextRef,
    seventhSectionBottomLineRef,
    eighthSectionBroomRef,
    eighthSectionTitleRef,
    eighthSectionBoxRef,
    eighthSectionLineRef,
    eighthSectionNumberRef,
    eighthSectionTextRef,
    eighthSectionBottomLineRef,
    ninthSectionBroomRef,
    ninthSectionBambooRef,
    ninthSectionNumberRef,
    ninthSectionFirstTextRef,
    ninthSectionLineRef,
    ninthSectionSecondTextRef,
    finalSectionNumberRef,
    finalSectionTitleRef,
    finalSectionLineRef,
    finalSectionTextRef,
    finalSectionGridRef,
    beliefsSectionNumberRef,
    beliefsSectionLineRef,
    beliefsSectionTextRef,
    beliefsSectionBroomRef,
    beliefsSecondSectionFeetRef,
    beliefsSecondSectionNumberRef,
    beliefsSecondSectionLineRef,
    beliefsSecondSectionTextRef,
    beliefsThirdSectionNumberRef,
    beliefsThirdSectionLineRef,
    beliefsThirdSectionTextRef,
    beliefsThirdSectionBroom1Ref,
    beliefsThirdSectionBroom2Ref,
    beliefsThirdSectionBroom3Ref,
    beliefsThirdSectionBroom4Ref,
    beliefsThirdSectionBroom5Ref,
  } = useScrollAnimations();

  return (
    <div ref={parentRef} className="relative overflow-x-hidden overflow-y-auto bg-[#1e1e1e] text-white">
      <div className="relative h-screen">
        <Header
          title="E-HABI"
          subtitle="Walis Tambo"
          secondTitle="Paggawa"
          secondSubtitle="Ng Walis Tambo"
          thirdTitle="PANINIWALA SA PAGGAWA"
          thirdSubtitle="Ng Walis Tambo"
          isNinthSection={true}
          isBeliefsSection={true}
        />
        <div
          ref={handLeftRef}
          className="fixed bottom-1/5 -left-1/4 w-2/3 -rotate-[45deg] md:bottom-0 md:-left-[10%] md:w-1/2 md:rotate-[-20deg]"
        >
          <Image
            src={handLeft}
            alt="hand-left"
            className="w-full object-cover"
          />
        </div>
        <div
          ref={handRightRef}
          className="fixed -right-1/4 bottom-1/2 w-2/3 -rotate-[15deg] md:-right-[10%] md:bottom-1/4 md:w-1/2 md:rotate-[10deg]"
        >
          <Image
            src={handRight}
            alt="hand-right"
            className="w-full object-cover"
          />
        </div>
        <div
          ref={broomRef}
          className="transform-origin-center fixed top-1/2 left-[45%] w-[15rem] -translate-x-1/2 -translate-y-1/2 rotate-[158deg] md:left-1/2 md:w-[40vh]"
        >
          <Image src={broom} alt="broom" className="w-full object-cover" />
        </div>
      </div>
      <div ref={secondSectionRef} className="second-section relative h-[100vh]">
        <div className="absolute top-0 left-[10%] grid w-1/2 grid-cols-[1fr_auto_1fr] gap-8">
          <p
            ref={firstParagraphRef}
            className="col-start-1 row-start-2 mt-[25vh] pr-8 text-right"
          >
            Ang E-HABI ay isang digital na kasangkapan na naglalaman ng kultura
            at wika sa paggawa ng walis tambo sa San Lorenzo Ruiz, Camarines
            Norte.
          </p>
          <div
            ref={verticalLineRef}
            className="left-1/3 row-span-3 row-start-1 mb-8 h-full w-[1px] bg-white"
          ></div>
          <p
            ref={secondParagraphRef}
            className="col-start-3 row-start-3 pl-8 text-left"
          >
            Dito, matutuklasan ang tradisyon at kasanayang nagpapakilala sa mga
            manggagawang gumagawa ng walis, na patuloy na nagpapanatili ng
            kanilang identidad at pamana.
          </p>
        </div>
      </div>
      <div className="third-section relative h-[100vh]">
        <div
          ref={mapRef}
          className="fixed right-0 bottom-0 w-[50rem] lg:right-1/2 lg:bottom-0 lg:block lg:w-[75rem]"
        >
          <Image src={map} alt="map" className="relative w-full object-cover" />
          <div className="third-section-text mb-20 grid w-2/3 grid-cols-2 gap-4 lg:fixed lg:-right-[25rem] lg:bottom-[15%] lg:mb-0">
            <p ref={thirdSectionFirstParagraphRef} className="col-start-2">
              Sa San Lorenzo Ruiz, ang paggawa ng walis tambo ay hindi lang
              simpleng kabuhayan—ito ay isang sining at pamana
            </p>
            <div
              ref={horizontalLineRef}
              className="col-span-2 h-[1px] w-full bg-white"
            ></div>
            <p ref={thirdSectionSecondParagraphRef} className="col-start-2">
              Nagbibigay ito ng oportunidad sa mga manggagawa upang kumita at
              mabuhay, habang ipinapakita ang kanilang sipag, husay, at kultura.
              Ang tradisyong ito ay naipapasa mula henerasyon hanggang
              henerasyon, patuloy na nagpapatibay sa pagkakakilanlan ng bayan.
            </p>
          </div>
        </div>
      </div>
      <div className="fourth-section relative h-[100vh]">
        <div
          ref={fourthSectionBroomRef}
          className="fixed bottom-0 left-[50%] w-[50rem]"
        >
          <Image
            src={broom}
            alt="Walis Tambo"
            style={{
              filter: "saturate(2) hue-rotate(40deg)",
            }}
            className="relative w-full object-cover"
          />
          <div className="fourth-section-image fixed right-[70%] bottom-[9%] grid w-[70vw] grid-cols-[auto_1fr] lg:w-[60rem]">
            <p
              ref={fourthSectionTitleRef}
              className="col-start-1 w-fit uppercase"
            >
              pagtatanim at pagaani
            </p>
            <div
              ref={fourthSectionBoxRef}
              className="row-start-2 h-[300px] w-[300px] border"
            >
              <Image
                src={progress1}
                alt="Pagtatanim at Pagaani ng Walis Tambo"
                className="h-full w-full object-cover"
              />
            </div>
            <div
              ref={fourthSectionLineRef}
              className="row-start-2 mt-[10vh] h-[1px] w-full bg-white"
            ></div>
          </div>
          <div className="fourth-section-text fixed bottom-[5%] -left-[35%] grid w-2/3 grid-cols-[auto_1fr_1fr] gap-x-8 gap-y-4">
            <p ref={fourthSectionNumberRef} className="col-start-1">
              01
            </p>
            <p ref={fourthSectionTextRef} className="col-start-2">
              Karaniwang ginagawa tuwing Pebrero hanggang Mayo.
            </p>
            <div
              ref={fourthSectionBottomLineRef}
              className="col-span-2 col-start-2 h-[1px] w-full bg-white"
            ></div>
          </div>
        </div>
      </div>
      <div className="fifth-section relative h-[100vh]">
        <div
          ref={fifthSectionBroomRef}
          className="fixed bottom-0 left-[50%] w-[50rem]"
        >
          <Image
            src={broom}
            alt="Walis Tambo"
            className="relative w-full object-cover"
          />

          {/* fifth section */}
          <div className="fifth-section-image fixed right-[60%] bottom-[9%] grid w-[70vw] grid-cols-[auto_1fr] lg:w-[60rem]">
            <p
              ref={fifthSectionTitleRef}
              className="col-start-1 w-fit uppercase"
            >
              pagpapatuyo
            </p>
            <div
              ref={fifthSectionBoxRef}
              className="row-start-2 h-[300px] w-[300px] border"
            >
              <Image
                src={progress2}
                alt="Pagpapatuyo ng Walis Tambo"
                className="h-full w-full object-cover"
              />
            </div>
            <div
              ref={fifthSectionLineRef}
              className="row-start-2 mt-[10vh] h-[1px] w-full bg-white"
            ></div>
          </div>
          <div className="fifth-section-text fixed bottom-[5%] -left-[45%] grid w-full grid-cols-[auto_1fr_1fr] gap-x-8 gap-y-4">
            <p ref={fifthSectionNumberRef} className="col-start-1">
              02
            </p>
            <p ref={fifthSectionTextRef} className="col-start-2">
              Binibilad sa araw o tinutuyo gamit ang mahinang apoy kapag maulan.
            </p>
            <div
              ref={fifthSectionBottomLineRef}
              className="col-span-2 col-start-2 h-[1px] w-full bg-white"
            ></div>
          </div>
        </div>
      </div>
      <div className="sixth-section relative h-[100vh]">
        <div className="sixth-section-image fixed bottom-[27%] left-[6%] grid w-[60%] grid-cols-[auto_1fr]">
          <p ref={sixthSectionTitleRef} className="col-start-1 w-fit uppercase">
            pagsusuri
          </p>
          <div
            ref={sixthSectionBoxRef}
            className="row-start-2 h-[300px] w-[300px] border"
          >
            <Image
              src={progress3}
              alt="Pagsusuri ng Walis Tambo"
              className="h-full w-full object-cover"
            />
          </div>
          <div
            ref={sixthSectionLineRef}
            className="row-start-2 mt-[10vh] h-[1px] w-full bg-white"
          ></div>
        </div>
        <div className="sixth-section-text fixed bottom-[15%] left-[20%] grid w-1/2 grid-cols-[auto_1fr_1fr] gap-x-8 gap-y-4">
          <p ref={sixthSectionNumberRef} className="col-start-1">
            03
          </p>
          <p ref={sixthSectionTextRef} className="col-start-2">
            Pinipili ang tamang haba at kapal ng tambo.
          </p>
          <div
            ref={sixthSectionBottomLineRef}
            className="col-span-2 col-start-2 h-[1px] w-full bg-white"
          ></div>
        </div>
      </div>
      <div className="seventh-section relative h-[100vh]">
        <div
          ref={seventhSectionBroomRef}
          className="fixed bottom-0 left-1/2 w-[20rem] -translate-x-1/2"
        >
          <Image
            src={broom}
            alt="broom"
            className="relative w-full object-cover"
          />
          <div className="seventh-section-image fixed right-[60%] bottom-[7rem] grid w-[30vw] grid-cols-[auto_1fr] md:w-[40vw]">
            <p
              ref={seventhSectionTitleRef}
              className="col-start-1 w-fit uppercase"
            >
              pagbibigkis
            </p>
            <div
              ref={seventhSectionBoxRef}
              className="row-start-2 h-[300px] w-[300px] border"
            >
              <Image
                src={progress4_1}
                alt="Pagbibigkis ng Walis Tambo"
                className="h-full w-full object-cover"
              />
            </div>
            <div
              ref={seventhSectionLineRef}
              className="row-start-2 mt-[10vh] h-[1px] w-full bg-white"
            ></div>
          </div>
          <div className="seventh-section-text fixed -right-[20vw] bottom-[15%] grid w-[30vw] grid-cols-[1fr_1fr_auto] gap-x-8 gap-y-4 text-right lg:w-[30vw]">
            <p
              ref={seventhSectionNumberRef}
              className="col-start-3 row-start-1"
            >
              04.1
            </p>
            <p ref={seventhSectionTextRef} className="col-start-2 row-start-1">
              Ang mga lalaki ang nagbibigkis ng tambo sa tangkay
            </p>
            <div
              ref={seventhSectionBottomLineRef}
              className="col-span-2 col-start-1 h-[1px] w-full bg-white"
            ></div>
          </div>
        </div>
      </div>
      <div className="eighth-section relative h-[100vh]">
        <div
          ref={eighthSectionBroomRef}
          className="fixed bottom-0 left-1/2 w-[25rem] -translate-x-1/2"
        >
          <Image src={broom} alt="broom" className="w-full object-cover" />
          <div className="eighth-section-image fixed -right-[26vw] bottom-[14%] grid w-[30vw] grid-cols-[1fr_1fr_auto] text-right lg:w-[40vw]">
            <p
              ref={eighthSectionTitleRef}
              className="col-start-2 w-fit justify-self-end uppercase"
            >
              pananahi
            </p>
            <div
              ref={eighthSectionBoxRef}
              className="col-start-2 row-start-2 h-[300px] w-[300px] border"
            >
              <Image
                src={progress4_2}
                alt="Pananahi ng Walis Tambo"
                className="h-full w-full object-cover"
              />
            </div>
            <div
              ref={eighthSectionLineRef}
              className="col-start-1 row-start-2 mt-[10vh] h-[1px] w-full bg-white"
            ></div>
          </div>
          <div className="eighth-section-text fixed right-[60%] bottom-[18%] grid w-[30vw] grid-cols-[auto_1fr_1fr] gap-x-8 gap-y-4 md:w-[40vw]">
            <p ref={eighthSectionNumberRef} className="col-start-1 row-start-1">
              04.2
            </p>
            <p ref={eighthSectionTextRef} className="col-start-2 row-start-1">
              Habang ang mga babae ang nagtatahi gamit ang karayom at plastic
              rattan.{" "}
            </p>
            <div
              ref={eighthSectionBottomLineRef}
              className="col-span-2 col-start-2 h-[1px] w-full bg-white"
            ></div>
          </div>
        </div>
      </div>
      <div className="ninth-section relative h-[100vh]">
        <div
          ref={ninthSectionBambooRef}
          className="fixed top-0 -left-[15rem] w-[50vh] lg:-left-[10rem]"
        >
          <Image src={bamboo} alt="bamboo" className="w-full object-cover" />
        </div>
        <div
          ref={ninthSectionBroomRef}
          className="fixed top-0 -right-[10rem] w-[50vh]"
        >
          <Image src={broom} alt="broom" className="w-full object-cover" />
        </div>
        <div className="flex h-full w-full justify-center">
          <div className="flex h-full w-1/3 flex-col items-center justify-center gap-4 text-center">
            <p ref={ninthSectionNumberRef}>05</p>
            <p ref={ninthSectionFirstTextRef} className="w-2/3">
              Ang tangkay ng walis tambo ay maaaring yari sa kawayan o kahoy
            </p>
            <div
              ref={ninthSectionLineRef}
              className="h-[1px] w-full bg-white"
            ></div>
            <p ref={ninthSectionSecondTextRef} className="w-2/3">
              Ngunit madalas gamitin ay ang tangkay mula sa punong bongliw.
              Tinatawag din itong malapapaya. Ang mga tangkay ay maingat na
              hinuhugis at nililinis upang maging magaan at matibay.
            </p>
          </div>
        </div>
      </div>
      <div className="final-section relative h-[100vh]">
        <div className="flex h-full w-full flex-col items-center justify-end gap-8 pb-10">
          <div className="flex w-1/3 flex-col items-center justify-center gap-4 text-center">
            <p ref={finalSectionNumberRef}>06</p>
            <p ref={finalSectionTitleRef} className="w-2/3">
              Pagtatapos
            </p>
            <div
              ref={finalSectionLineRef}
              className="h-[1px] w-full bg-white"
            ></div>
            <p ref={finalSectionTextRef} className="w-2/3">
              Nilalagyan ng tatak, inaayos, at pinapaganda ang walis bago ito
              dalhin sa pamilihan.
            </p>
          </div>
          <div
            ref={finalSectionGridRef}
            className="grid grid-cols-2 gap-4 md:grid-cols-4"
          >
            <div>
              <p className="grid-title uppercase">Pag tatak</p>
              <div className="grid-box row-start-2 h-[200px] w-[200px] border md:h-[300px] md:w-[300px]">
                <Image
                  src={progress5_1}
                  alt="Pagtatak ng Walis Tambo"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="grid-title uppercase">Pag tatak</p>
              <div className="grid-box row-start-2 h-[200px] w-[200px] border md:h-[300px] md:w-[300px]">
                <Image
                  src={progress5_2}
                  alt="Pagtatak ng Walis Tambo"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="grid-title uppercase">Pag papaganda</p>
              <div className="grid-box row-start-2 h-[200px] w-[200px] border md:h-[300px] md:w-[300px]">
                <Image
                  src={progress6}
                  alt="Pagpapaganda ng Walis Tambo"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="grid-title uppercase">Pag dala sa pamilihan</p>
              <div className="grid-box row-start-2 h-[200px] w-[200px] border md:h-[300px] md:w-[300px]">
                <Image
                  src={progress7}
                  alt="Pagdala sa pamilihan ng Walis Tambo"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="beliefs-section relative h-[100vh]">
        <div className="flex h-full w-full flex-col items-center justify-center gap-8">
          <div className="flex w-1/3 flex-col items-center justify-center gap-4 text-center">
            <p ref={beliefsSectionNumberRef}>01</p>
            <div
              ref={beliefsSectionLineRef}
              className="h-[1px] w-full bg-white"
            ></div>
            <p ref={beliefsSectionTextRef} className="w-2/3">
              Hindi dapat maambunan ang tambo upang hindi ito maging marupok.
            </p>
          </div>
          <div
            ref={beliefsSectionBroomRef}
            className="transform-origin-center fixed -bottom-[110%] left-1/2 w-[50rem] -translate-x-1/2 rotate-[90deg] md:-bottom-[76.5rem] md:w-[63rem]"
          >
            <Image src={broom} alt="broom" className="w-full object-cover" />
          </div>
        </div>
      </div>
      <div className="beliefs-second-section relative h-[100vh]">
        <div
          ref={beliefsSecondSectionFeetRef}
          className="fixed -top-[8rem] left-1/2 w-[40vh] -translate-x-1/2 rotate-[10deg] md:w-[25rem]"
        >
          <Image src={feet} alt="feet" className="w-full object-cover" />
        </div>
        <div className="flex h-full w-full flex-col items-end justify-center gap-8 pr-20">
          <div className="flex w-1/4 flex-col items-end gap-4 text-right">
            <p ref={beliefsSecondSectionNumberRef}>02</p>
            <div
              ref={beliefsSecondSectionLineRef}
              className="h-[1px] w-full bg-white"
            ></div>
            <p ref={beliefsSecondSectionTextRef} className="w-2/3">
              Hindi ito dapat tapakan o upuan dahil maaaring makaapekto sa benta
            </p>
          </div>
        </div>
      </div>
      <div className="beliefs-third-section relative h-[100vh]">
        <div className="flex h-full w-full flex-col items-start justify-center gap-8 pl-20">
          <div className="flex w-1/4 flex-col items-start gap-4 text-left">
            <p ref={beliefsThirdSectionNumberRef}>03</p>
            <div
              ref={beliefsThirdSectionLineRef}
              className="h-[1px] w-full bg-white"
            ></div>
            <p ref={beliefsThirdSectionTextRef} className="w-2/3">
              Dapat may sapat na espasyo sa pag-iimbak upang maiwasan ang
              moisture na nakakasira sa kalidad.
            </p>
          </div>
          <div
            ref={beliefsThirdSectionBroom1Ref}
            className="fixed bottom-0 left-1/2 w-[12.7rem] md:w-[15.7rem]"
          >
            <Image src={broom} alt="broom" className="w-full object-cover" />
          </div>
          <div
            ref={beliefsThirdSectionBroom2Ref}
            className="fixed top-[2.5%] left-[59%] w-[12.7rem] rotate-180 md:w-[15.7rem]"
          >
            <Image src={broom} alt="broom" className="w-full object-cover" />
          </div>
          <div
            ref={beliefsThirdSectionBroom3Ref}
            className="fixed bottom-0 left-[68%] w-[12.7rem] md:w-[15.7rem]"
          >
            <Image src={broom} alt="broom" className="w-full object-cover" />
          </div>
          <div
            ref={beliefsThirdSectionBroom4Ref}
            className="fixed top-[2.5%] left-[77%] w-[12.7rem] rotate-180 md:w-[15.7rem]"
          >
            <Image src={broom} alt="broom" className="w-full object-cover" />
          </div>
          <div
            ref={beliefsThirdSectionBroom5Ref}
            className="fixed bottom-0 left-[86%] w-[12.7rem] md:w-[15.7rem]"
          >
            <Image src={broom} alt="broom" className="w-full object-cover" />
          </div>
        </div>
      </div>

      
      {/* footer */}
      <Footer darkMode={false} />
    </div>
  );
}
