"use client";

import Image from "next/image";
import gsap from "gsap";
import { motion } from "framer-motion";

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
import { useMobile } from "./hooks/useMobile";
import { ScrollIndicator } from "./_components/ScrollIndicator";
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
    fifthSectionLineRef2,
    fifthSectionTitleRef2,
    fifthSectionBoxRef2,
    fifthSectionNumberRef2,
    fifthSectionTextRef2,
    fifthSectionBottomLineRef2,
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

  const { isMobile } = useMobile();

  return (
    <div
      ref={parentRef}
      className="relative overflow-x-hidden overflow-y-auto bg-[#ae7437] text-white"
    >
      <ScrollIndicator />
      <div className="relative h-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
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
        </motion.div>
        <motion.div
          ref={handLeftRef}
          className="fixed bottom-1/5 -left-1/4 w-2/3 -rotate-[45deg] md:bottom-0 md:-left-[10%] md:w-1/2 md:rotate-[-20deg]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
        >
          <Image
            src={handLeft}
            alt="hand-left"
            className="w-full object-cover"
          />
        </motion.div>
        <motion.div
          ref={handRightRef}
          className="fixed -right-1/4 bottom-1/2 w-2/3 -rotate-[15deg] md:-right-[10%] md:bottom-1/4 md:w-1/2 md:rotate-[10deg]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
        >
          <Image
            src={handRight}
            alt="hand-right"
            className="w-full object-cover"
          />
        </motion.div>
        <motion.div
          ref={broomRef}
          className="transform-origin-center fixed top-1/2 left-[45%] w-[15rem] -translate-x-1/2 -translate-y-1/2 rotate-[158deg] md:left-1/2 md:w-[40vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        >
          <Image src={broom} alt="broom" className="w-full object-cover" />
        </motion.div>
      </div>
      <div ref={secondSectionRef} className="second-section relative h-[100vh]">
        <div className="absolute top-[15%] left-[10%] w-1/2 grid-cols-[1fr_auto_1fr] space-y-4 md:top-0 md:grid md:gap-8 md:space-y-0">
          <p
            ref={firstParagraphRef}
            className="col-start-1 row-start-2 mt-[25vh] pr-8 text-left md:text-right"
          >
            Ang E-HABI ay isang digital na kasangkapan na naglalaman ng kultura
            at wika sa paggawa ng walis tambo sa San Lorenzo Ruiz, Camarines
            Norte.
          </p>
          <div
            ref={verticalLineRef}
            className="left-1/3 row-span-3 row-start-1 mb-8 hidden h-full w-[1px] bg-white md:block"
          ></div>
          <p
            ref={secondParagraphRef}
            className="col-start-3 row-start-3 text-left md:pl-8"
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
          className="fixed right-0 -bottom-10 w-[50rem] lg:right-1/2 lg:bottom-0 lg:block lg:w-[75rem]"
        >
          <Image src={map} alt="map" className="relative w-full object-cover" />
          <div
            className={`third-section-text relative mb-20 grid w-2/3 grid-cols-2 gap-4 lg:fixed lg:-right-[30rem] lg:bottom-[12%] lg:mb-0 ${isMobile && "left-[25%]"}`}
          >
            <p ref={thirdSectionFirstParagraphRef} className="col-start-2">
              Sa bayan ng San Lorenzo Ruiz, Camarines Norte, ang paggawa ng
              walis tambo ay hindi lamang simpleng kabuhayan bagkus isang
              simbolo ng sining at pamanang kultura.
            </p>
            <div
              ref={horizontalLineRef}
              className="col-span-2 h-[1px] w-full bg-white"
            ></div>
            <p ref={thirdSectionSecondParagraphRef} className="col-start-2">
              Nagbibigay oportunidad ang kabuhayang ito sa mga manggagawa na
              kumita at matustusan ang kanilang pang-araw-araw na
              pangangailangan sa buhay, habang naipapakita ang kanilang sipag,
              husay, at kasanayan. Ang paggawa ng walis tambo ay isang
              kasanayang patuloy na naipapasa mula sa isang henerasyon patungo
              sa susunod, na kung saan nagsisilbing daluyan ng kanilang
              pagkakakilanlan at identidad bilang isang bayan.
            </p>
          </div>
        </div>
      </div>
      <div className="fourth-section relative h-[100vh]" id="paano">
        <div
          ref={fourthSectionBroomRef}
          className="fixed -bottom-[35%] left-[75%] w-[20rem] rotate-90 md:bottom-0 md:left-[50%] md:w-[50rem] md:rotate-0"
        >
          <Image
            src={broom}
            alt="Walis Tambo"
            style={{
              filter: "saturate(2) hue-rotate(40deg)",
            }}
            className="relative w-full object-cover"
          />
          <div className="fourth-section-image fixed right-[70%] bottom-[9%] hidden w-[70vw] grid-cols-[auto_1fr] md:grid lg:w-[60rem]">
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
          <div className="fourth-section-text fixed bottom-[5%] -left-[35%] hidden w-2/3 grid-cols-[auto_1fr_1fr] gap-x-8 gap-y-4 md:grid">
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
        <div className="fourth-section-image fixed top-[15%] left-[5%] grid h-[60vh] w-[70vw] grid-rows-[auto_auto_1fr] md:hidden lg:w-[60rem]">
          <p
            ref={fourthSectionTitleRef}
            className="col-start-1 w-fit uppercase"
          >
            pagtatanim at pagaani
          </p>
          <div
            ref={fourthSectionBoxRef}
            className="row-start-2 h-[200px] w-[200px] border md:h-[300px] md:w-[300px]"
          >
            <Image
              src={progress1}
              alt="Pagtatanim at Pagaani ng Walis Tambo"
              className="h-full w-full object-cover"
            />
          </div>
          <div
            ref={fourthSectionLineRef}
            className="row-start-3 ml-[5vw] h-full w-[1px] bg-white"
          ></div>
        </div>
        <div className="fourth-section-text full fixed top-[50%] left-[17%] grid h-[30vh] w-[80%] grid-rows-[auto_1fr] gap-x-8 gap-y-4 md:hidden">
          <p ref={fourthSectionNumberRef} className="col-start-1">
            01
          </p>
          <p ref={fourthSectionTextRef} className="col-start-2">
            Karaniwang ginagawa tuwing Pebrero hanggang Mayo.
          </p>
          <div
            ref={fourthSectionBottomLineRef}
            className="col-start-2 row-start-2 h-full w-[1px] bg-white"
          ></div>
        </div>
      </div>
      <div className="fifth-section relative h-[100vh]">
        <div
          ref={fifthSectionBroomRef}
          className="fixed -bottom-[35%] left-[75%] w-[20rem] rotate-90 md:bottom-0 md:left-[50%] md:w-[50rem] md:rotate-0"
        >
          <Image
            src={broom}
            alt="Walis Tambo"
            className="relative w-full object-cover"
          />

          {/* fifth section */}
          <div className="fifth-section-image fixed right-[60%] bottom-[9%] hidden w-[70vw] grid-cols-[auto_1fr] md:grid lg:w-[60rem]">
            <p
              ref={fifthSectionTitleRef}
              className="col-start-1 w-fit uppercase"
            >
              pagpapatuyo
            </p>
            <div
              ref={fifthSectionBoxRef}
              className="row-start-2 h-[200px] w-[200px] border md:h-[300px] md:w-[300px]"
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
          <div className="fifth-section-text fixed bottom-[5%] -left-[45%] hidden w-full grid-cols-[auto_1fr_1fr] gap-x-8 gap-y-4 md:grid">
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
        <div className="fifth-section-image fixed top-[15%] left-[5%] grid h-[60vh] w-[70vw] grid-rows-[auto_auto_1fr] md:hidden lg:w-[60rem]">
          <p
            ref={fifthSectionTitleRef2}
            className="col-start-1 w-fit uppercase"
          >
            pagpapatuyo
          </p>
          <div
            ref={fifthSectionBoxRef2}
            className="row-start-2 h-[200px] w-[200px] border md:h-[300px] md:w-[300px]"
          >
            <Image
              src={progress2}
              alt="Pagpapatuyo ng Walis Tambo"
              className="h-full w-full object-cover"
            />
          </div>
          <div
            ref={fifthSectionLineRef2}
            className="row-start-3 ml-[5vw] h-full w-[1px] bg-white"
          ></div>
        </div>
        <div className="fifth-section-text full fixed top-[50%] left-[17%] grid h-[30vh] w-[80%] grid-rows-[auto_1fr] gap-x-8 gap-y-4 md:hidden">
          <p ref={fifthSectionNumberRef2} className="col-start-1">
            02
          </p>
          <p ref={fifthSectionTextRef2} className="col-start-2">
            Binibilad sa araw o tinutuyo gamit ang mahinang apoy kapag maulan.
          </p>
          <div
            ref={fifthSectionBottomLineRef2}
            className="col-start-2 row-start-2 h-full w-[1px] bg-white"
          ></div>
        </div>
      </div>
      <div className="sixth-section relative h-[100vh]">
        <div
          className={`sixth-section-image fixed left-[5%] grid h-fit w-[60%] grid-cols-[auto_1fr] md:bottom-[27%] md:left-[6%] ${isMobile && "top-[20%]"}`}
        >
          <p ref={sixthSectionTitleRef} className="col-start-1 w-fit uppercase">
            PAGHIHIMAY
          </p>
          <div
            ref={sixthSectionBoxRef}
            className="col-start-1 row-start-2 h-[200px] w-[200px] border md:h-[300px] md:w-[300px]"
          >
            <Image
              src={progress3}
              alt="PAGHIHIMAY  ng Walis Tambo"
              className="h-full w-full object-cover"
            />
          </div>
          <div
            ref={sixthSectionLineRef}
            className="row-start-2 mt-[10vh] hidden h-[1px] w-full bg-white md:block"
          ></div>
        </div>
        <div
          className={`sixth-section-text md:grid-rows-auto fixed left-[15%] grid h-[30vh] w-2/3 grid-rows-[auto_1fr] gap-x-8 gap-y-4 md:bottom-[15%] md:left-[20%] md:h-fit md:w-1/2 md:grid-cols-[auto_1fr_1fr] ${isMobile && "top-[50%]"}`}
        >
          <p ref={sixthSectionNumberRef} className="col-start-1 row-start-1">
            03
          </p>
          <p ref={sixthSectionTextRef} className="col-start-2 row-start-1">
            Pinipili ang tamang haba at kapal ng tambo.
          </p>
          <div
            ref={sixthSectionBottomLineRef}
            className="col-span-3 col-start-2 row-start-2 h-full w-[1px] bg-white md:h-[1px] md:w-full"
          ></div>
        </div>
      </div>
      <div className="seventh-section relative h-[100vh]">
        <div
          ref={seventhSectionBroomRef}
          className={`fixed w-[25rem] md:bottom-0 md:left-1/2 md:w-[20rem] md:-translate-x-1/2 ${isMobile && "-top-[20%] -right-[50%]"}`}
        >
          <Image
            src={broom}
            alt="broom"
            className="relative w-full object-cover"
          />
          <div className="seventh-section-image fixed right-[15rem] bottom-[20rem] grid w-[80vw] grid-cols-[auto_1fr] md:right-[60%] md:bottom-[7rem] md:w-[40vw]">
            <p
              ref={seventhSectionTitleRef}
              className="col-start-1 w-fit uppercase"
            >
              pagbibigkis
            </p>
            <div
              ref={seventhSectionBoxRef}
              className="row-start-2 h-[200px] w-[200px] border md:h-[300px] md:w-[300px]"
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
          <div
            className={`seventh-section-text fixed -right-[2rem] grid w-[35rem] grid-cols-[auto_1fr_1fr] gap-x-8 gap-y-4 md:-right-[20vw] md:bottom-[15%] md:w-[30vw] md:grid-cols-[1fr_1fr_auto] md:text-right lg:w-[30vw] ${isMobile && "top-[30%]"}`}
          >
            <p
              ref={seventhSectionNumberRef}
              className="col-start-1 row-start-1 md:col-start-3"
            >
              04.1
            </p>
            <p ref={seventhSectionTextRef} className="col-start-2 row-start-1">
              Ang mga lalaki ang nagbibigkis ng tambo sa tangkay
            </p>
            <div
              ref={seventhSectionBottomLineRef}
              className="col-span-2 col-start-2 row-start-3 h-[1px] w-full bg-white md:col-start-1 md:row-start-auto"
            ></div>
          </div>
        </div>
      </div>
      <div className="eighth-section relative h-[100vh]">
        <div
          ref={eighthSectionBroomRef}
          className={`fixed w-[25rem] md:bottom-0 md:left-1/2 md:w-[25rem] md:-translate-x-1/2 ${isMobile && "-top-[20%] -right-[50%]"}`}
        >
          <Image src={broom} alt="broom" className="w-full object-cover" />
          <div className="eighth-section-image fixed right-[15rem] bottom-[16rem] grid w-[80vw] grid-cols-[auto_1fr] md:-right-[30vw] md:bottom-[14%] md:w-[30vw] md:grid-cols-[1fr_auto] md:text-right lg:w-[40vw]">
            <p
              ref={eighthSectionTitleRef}
              className="col-start-1 w-fit uppercase md:col-start-2 md:justify-self-end"
            >
              pananahi
            </p>
            <div
              ref={eighthSectionBoxRef}
              className="col-start-1 row-start-2 h-[200px] w-[200px] border md:col-start-2 md:h-[300px] md:w-[300px]"
            >
              <Image
                src={progress4_2}
                alt="Pananahi ng Walis Tambo"
                className="h-full w-full object-cover"
              />
            </div>
            <div
              ref={eighthSectionLineRef}
              className="col-start-2 row-start-2 mt-[10vh] h-[1px] w-full bg-white md:col-start-1"
            ></div>
          </div>
          <div
            className={`eighth-section-text fixed -right-[2rem] bottom-[15%] grid h-fit w-[35rem] grid-cols-[auto_1fr_1fr] gap-x-8 gap-y-4 md:right-[60%] md:bottom-[18%] md:w-[40vw] ${isMobile && "top-[30%]"}`}
          >
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
          className="fixed top-0 -left-[17rem] w-[50vh] md:-left-[15rem] lg:-left-[10rem]"
        >
          <Image src={bamboo} alt="bamboo" className="w-full object-cover" />
        </div>
        <div
          ref={ninthSectionBroomRef}
          className="fixed top-0 -right-[12rem] w-[50vh] md:-right-[10rem]"
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
            className="grid gap-4 md:grid-cols-2 xl:grid-cols-4"
          >
            <div>
              <p className="grid-title uppercase">Pagtatak</p>
              <div className="grid-box md row-start-2 h-[200px] w-[200px] border md:h-[300px] md:md:w-[300px]">
                <Image
                  src={progress5_1}
                  alt="Pagtatak ng Walis Tambo"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="grid-title uppercase">Pagtatak</p>
              <div className="grid-box row-start-2 h-[200px] w-[200px] border md:h-[300px] md:md:w-[300px]">
                <Image
                  src={progress5_2}
                  alt="Pagtatak ng Walis Tambo"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="grid-title uppercase">Pagpapaganda</p>
              <div className="grid-box row-start-2 h-[200px] w-[200px] border md:h-[300px] md:md:w-[300px]">
                <Image
                  src={progress6}
                  alt="Pagpapaganda ng Walis Tambo"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="grid-title uppercase">Pagdala sa pamilihan</p>
              <div className="grid-box row-start-2 h-[200px] w-[200px] border md:h-[300px] md:md:w-[300px]">
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
      <div className="beliefs-section relative h-[100vh]" id="paniniwala">
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
            className="transform-origin-center fixed -bottom-[110%] left-2/3 w-[50rem] -translate-x-1/2 rotate-[90deg] md:-bottom-[76.5rem] md:left-1/2 md:w-[63rem]"
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
          <div className="flex w-2/3 flex-col items-end gap-4 text-right md:w-1/4">
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
          <div className="flex w-2/3 flex-col items-start gap-4 text-left md:w-1/4">
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
      <Footer
        darkMode={false}
        callToAction
        callToActionText="GO TO E-REHISTRO"
        to="/e-rehistro"
      />
    </div>
  );
}
