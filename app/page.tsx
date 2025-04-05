"use client";

import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Header } from "./_components/Header";

import handLeft from "@/public/images/hand-left.png";
import handRight from "@/public/images/hand-right.png";
import broom from "@/public/images/broom.png";
import map from "@/public/images/map.png";
import bamboo from "@/public/images/bamboo.png";
import feet from "@/public/images/feet.png";
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
    seventhSectionTitleRef,
    seventhSectionBoxRef,
    seventhSectionLineRef,
    seventhSectionNumberRef,
    seventhSectionTextRef,
    seventhSectionBottomLineRef,
    eighthSectionTitleRef,
    eighthSectionBoxRef,
    eighthSectionLineRef,
    eighthSectionNumberRef,
    eighthSectionTextRef,
    eighthSectionBottomLineRef,
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
    <div ref={parentRef} className="relative overflow-y-auto overflow-x-hidden">
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
          className="fixed bottom-0 -left-[10%] w-1/2 rotate-[-20deg]"
        >
          <Image
            src={handLeft}
            alt="hand-left"
            className="object-cover w-full"
          />
        </div>
        <div
          ref={handRightRef}
          className="fixed bottom-1/4 -right-[10%] w-1/2 rotate-[10deg]"
        >
          <Image
            src={handRight}
            alt="hand-right"
            className="object-cover w-full"
          />
        </div>
        <div
          ref={broomRef}
          className="fixed w-1/5 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[158deg] transform-origin-center"
        >
          <Image src={broom} alt="broom" className="object-cover w-full" />
        </div>
      </div>
      <div ref={secondSectionRef} className="h-[100vh] relative second-section">
        <div className="grid grid-cols-[1fr_auto_1fr] gap-8 absolute top-0 left-[10%] w-1/2">
          <p
            ref={firstParagraphRef}
            className="text-right row-start-2 col-start-1 pr-8 mt-[25vh]"
          >
            Ang E-HABI ay isang digital na kasangkapan na naglalaman ng kultura
            at wika sa paggawa ng walis tambo sa San Lorenzo Ruiz, Camarines
            Norte.
          </p>
          <div
            ref={verticalLineRef}
            className="w-[1px] h-full row-span-3 row-start-1 left-1/3 bg-white mb-8"
          ></div>
          <p
            ref={secondParagraphRef}
            className="text-left row-start-3 col-start-3 pl-8"
          >
            Dito, matutuklasan ang tradisyon at kasanayang nagpapakilala sa mga
            manggagawang gumagawa ng walis, na patuloy na nagpapanatili ng
            kanilang identidad at pamana.
          </p>
        </div>
      </div>
      <div className="h-[100vh] relative third-section">
        <div ref={mapRef} className="fixed w-4/5 -left-[20%] -top-[25%]">
          <Image src={map} alt="map" className="object-cover w-full" />
        </div>
        <div className="fixed grid grid-cols-2 gap-4 bottom-[15%] right-[10%] w-1/2 third-section-text">
          <p ref={thirdSectionFirstParagraphRef} className="col-start-2">
            Sa San Lorenzo Ruiz, ang paggawa ng walis tambo ay hindi lang
            simpleng kabuhayan—ito ay isang sining at pamana
          </p>
          <div
            ref={horizontalLineRef}
            className="h-[1px] w-full bg-white col-span-2"
          ></div>
          <p ref={thirdSectionSecondParagraphRef} className="col-start-2">
            Nagbibigay ito ng oportunidad sa mga manggagawa upang kumita at
            mabuhay, habang ipinapakita ang kanilang sipag, husay, at kultura.
            Ang tradisyong ito ay naipapasa mula henerasyon hanggang henerasyon,
            patuloy na nagpapatibay sa pagkakakilanlan ng bayan.
          </p>
        </div>
      </div>
      <div className="h-[100vh] relative fourth-section">
        <div
          ref={fourthSectionBroomRef}
          className="fixed w-[60%] -right-[10%] -top-[235%]"
        >
          <Image
            src={broom}
            alt="Walis Tambo"
            style={{
              filter: "saturate(2) hue-rotate(40deg)",
            }}
            className="object-cover w-full"
          />
        </div>
        <div className="fixed grid grid-cols-[auto_1fr] bottom-[25%] left-[10%] w-1/2 fourth-section-image">
          <p
            ref={fourthSectionTitleRef}
            className="col-start-1 uppercase w-fit"
          >
            pagtatanim at pagtatahi
          </p>
          <div
            ref={fourthSectionBoxRef}
            className="w-[150px] h-[150px] border md:h-[300px] md:w-[300px] row-start-2"
          ></div>
          <div
            ref={fourthSectionLineRef}
            className="h-[1px] w-full bg-white row-start-2 mt-[10vh]"
          ></div>
        </div>
        <div className="fixed grid grid-cols-[auto_1fr_1fr] gap-x-8 gap-y-4 bottom-[15%] left-[35%] w-1/3 fourth-section-text">
          <p ref={fourthSectionNumberRef} className="col-start-1">
            01
          </p>
          <p ref={fourthSectionTextRef} className="col-start-2">
            Karaniwang ginagawa tuwing Pebrero hanggang Mayo.
          </p>
          <div
            ref={fourthSectionBottomLineRef}
            className="h-[1px] w-full bg-white col-start-2 col-span-2"
          ></div>
        </div>
      </div>
      <div className="h-[100vh] relative fifth-section">
        <div
          ref={fifthSectionBroomRef}
          className="fixed w-[60%] -right-[10%] -top-[235%]"
        >
          <Image
            src={broom}
            alt="Walis Tambo"
            className="object-cover w-full"
          />
        </div>
        <div className="fixed grid grid-cols-[auto_1fr] bottom-[25%] left-[10%] w-1/2 fifth-section-image">
          <p ref={fifthSectionTitleRef} className="col-start-1 uppercase w-fit">
            pagpapatuyo
          </p>
          <div
            ref={fifthSectionBoxRef}
            className="w-[150px] h-[150px] border md:h-[300px] md:w-[300px] row-start-2"
          ></div>
          <div
            ref={fifthSectionLineRef}
            className="h-[1px] w-full bg-white row-start-2 mt-[10vh]"
          ></div>
        </div>
        <div className="fixed grid grid-cols-[auto_1fr_1fr] gap-x-8 gap-y-4 bottom-[15%] left-[35%] w-1/3 fifth-section-text">
          <p ref={fifthSectionNumberRef} className="col-start-1">
            02
          </p>
          <p ref={fifthSectionTextRef} className="col-start-2">
            Binibilad sa araw o tinutuyo gamit ang mahinang apoy kapag maulan.
          </p>
          <div
            ref={fifthSectionBottomLineRef}
            className="h-[1px] w-full bg-white col-start-2 col-span-2"
          ></div>
        </div>
      </div>
      <div className="h-[100vh] relative sixth-section">
        <div className="fixed grid grid-cols-[auto_1fr] bottom-[25%] left-[10%] w-1/2 sixth-section-image">
          <p ref={sixthSectionTitleRef} className="col-start-1 uppercase w-fit">
            pagsusuri
          </p>
          <div
            ref={sixthSectionBoxRef}
            className="w-[150px] h-[150px] border md:h-[300px] md:w-[300px] row-start-2"
          ></div>
          <div
            ref={sixthSectionLineRef}
            className="h-[1px] w-full bg-white row-start-2 mt-[10vh]"
          ></div>
        </div>
        <div className="fixed grid grid-cols-[auto_1fr_1fr] gap-x-8 gap-y-4 bottom-[15%] left-[35%] w-1/3 sixth-section-text">
          <p ref={sixthSectionNumberRef} className="col-start-1">
            03
          </p>
          <p ref={sixthSectionTextRef} className="col-start-2">
            Pinipili ang tamang haba at kapal ng tambo.
          </p>
          <div
            ref={sixthSectionBottomLineRef}
            className="h-[1px] w-full bg-white col-start-2 col-span-2"
          ></div>
        </div>
      </div>
      <div className="h-[100vh] relative seventh-section">
        <div className="fixed grid grid-cols-[auto_1fr] bottom-[25%] left-[10%] w-[42%] seventh-section-image">
          <p
            ref={seventhSectionTitleRef}
            className="col-start-1 uppercase w-fit"
          >
            pagbibigkis
          </p>
          <div
            ref={seventhSectionBoxRef}
            className="w-[150px] h-[150px] border md:h-[300px] md:w-[300px] row-start-2"
          ></div>
          <div
            ref={seventhSectionLineRef}
            className="h-[1px] w-full bg-white row-start-2 mt-[10vh]"
          ></div>
        </div>
        <div className="fixed grid grid-cols-[1fr_1fr_auto] gap-x-8 gap-y-4 bottom-[15%] right-[10%] w-1/3 seventh-section-text text-right">
          <p ref={seventhSectionNumberRef} className="row-start-1 col-start-3">
            04.1
          </p>
          <p ref={seventhSectionTextRef} className="col-start-2 row-start-1">
            Ang mga lalaki ang nagbibigkis ng tambo sa tangkay
          </p>
          <div
            ref={seventhSectionBottomLineRef}
            className="h-[1px] w-full bg-white col-start-1 col-span-2"
          ></div>
        </div>
      </div>
      <div className="h-[100vh] relative eighth-section">
        <div className="w-[35%] fixed grid grid-cols-[1fr_auto] bottom-[27%] right-[10%] eighth-section-image">
          <p
            ref={eighthSectionTitleRef}
            className="col-start-2 uppercase w-fit justify-self-end"
          >
            pananahi
          </p>
          <div
            ref={eighthSectionBoxRef}
            className="w-[150px] h-[150px] border md:h-[300px] md:w-[300px] col-start-2 row-start-2"
          ></div>
          <div
            ref={eighthSectionLineRef}
            className="h-[1px] w-full bg-white mt-[10vh] row-start-2 col-start-1"
          ></div>
        </div>
        <div className="fixed grid grid-cols-[auto_1fr_1fr] gap-x-8 gap-y-4 bottom-[15%] left-[10%] w-1/3 eighth-section-text">
          <p ref={eighthSectionNumberRef} className="row-start-1 col-start-1">
            04.2
          </p>
          <p ref={eighthSectionTextRef} className="col-start-2 row-start-1">
            Habang ang mga babae ang nagtatahi gamit ang karayom at plastic
            rattan.{" "}
          </p>
          <div
            ref={eighthSectionBottomLineRef}
            className="h-[1px] w-full bg-white col-start-2 col-span-2"
          ></div>
        </div>
      </div>
      <div className="h-[100vh] relative ninth-section">
        <div
          ref={ninthSectionBambooRef}
          className="fixed -left-[10%] top-0 w-1/4"
        >
          <Image src={bamboo} alt="bamboo" className="object-cover w-full" />
        </div>
        <div className="w-full flex justify-center h-full">
          <div className="flex flex-col gap-4 w-1/3 h-full text-center items-center justify-center">
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
      <div className="h-[100vh] relative final-section">
        <div className="w-full flex flex-col items-center justify-end pb-10 gap-8 h-full">
          <div className="flex flex-col gap-4 w-1/3 text-center items-center justify-center">
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
          <div ref={finalSectionGridRef} className="grid grid-cols-4 gap-4">
            <div>
              <p className="uppercase grid-title">Pag tatak</p>
              <div className="w-[150px] h-[150px] border md:h-[300px] md:w-[300px] row-start-2 grid-box"></div>
            </div>
            <div>
              <p className="uppercase grid-title">Pag tatak</p>
              <div className="w-[150px] h-[150px] border md:h-[300px] md:w-[300px] row-start-2 grid-box"></div>
            </div>
            <div>
              <p className="uppercase grid-title">Pag papaganda</p>
              <div className="w-[150px] h-[150px] border md:h-[300px] md:w-[300px] row-start-2 grid-box"></div>
            </div>
            <div>
              <p className="uppercase grid-title">Pag dala sa pamilihan</p>
              <div className="w-[150px] h-[150px] border md:h-[300px] md:w-[300px] row-start-2 grid-box"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[100vh] relative beliefs-section">
        <div className="w-full flex flex-col items-center justify-center gap-8 h-full">
          <div className="flex flex-col gap-4 w-1/3 text-center items-center justify-center">
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
            className="fixed w-2/3 left-1/2 -bottom-[170%] -translate-x-1/2 rotate-[90deg] transform-origin-center"
          >
            <Image src={broom} alt="broom" className="object-cover w-full" />
          </div>
        </div>
      </div>
      <div className="h-[100vh] relative beliefs-second-section">
        <div
          ref={beliefsSecondSectionFeetRef}
          className="fixed -top-[10%] rotate-[10deg] left-1/2 -translate-x-1/2 w-1/4"
        >
          <Image src={feet} alt="feet" className="object-cover w-full" />
        </div>
        <div className="w-full flex flex-col items-end justify-center gap-8 h-full pr-20">
          <div className="flex flex-col gap-4 w-1/4 text-right items-end">
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
      <div className="h-[100vh] relative beliefs-third-section">
        <div className="w-full flex flex-col items-start justify-center gap-8 h-full pl-20">
          <div className="flex flex-col gap-4 w-1/4 text-left items-start">
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
            className="fixed w-1/6 left-1/2 bottom-0"
          >
            <Image src={broom} alt="broom" className="object-cover w-full" />
          </div>
          <div
            ref={beliefsThirdSectionBroom2Ref}
            className="fixed w-1/6 left-[59%] top-[2.5%] rotate-180"
          >
            <Image src={broom} alt="broom" className="object-cover w-full" />
          </div>
          <div
            ref={beliefsThirdSectionBroom3Ref}
            className="fixed w-1/6 left-[68%] bottom-0"
          >
            <Image src={broom} alt="broom" className="object-cover w-full" />
          </div>
          <div
            ref={beliefsThirdSectionBroom4Ref}
            className="fixed w-1/6 left-[77%] top-[2.5%] rotate-180"
          >
            <Image src={broom} alt="broom" className="object-cover w-full" />
          </div>
          <div
            ref={beliefsThirdSectionBroom5Ref}
            className="fixed w-1/6 left-[86%] bottom-0"
          >
            <Image src={broom} alt="broom" className="object-cover w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
