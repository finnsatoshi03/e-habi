import { Playfair_Display, Didact_Gothic } from "next/font/google";
import Image from "next/image";
import Footer from "../_components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const didact = Didact_Gothic({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

type ResearcherProps = {
  name: string;
  position: string;
  school: string;
  image: string;
  email: string;
};

const Researcher = ({
  name,
  position,
  school,
  image,
  email,
}: ResearcherProps) => (
  <div className="space-y-2">
    <div className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-xl">
      <div className="relative h-64 w-full overflow-hidden sm:h-80">
        <Image
          src={image}
          alt={`Photo of ${name}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover brightness-100 contrast-100 transition-all duration-500 group-hover:brightness-100 group-hover:contrast-100 group-hover:grayscale-0 md:brightness-95 md:contrast-[0.9] md:grayscale-[50%] md:filter"
        />
        <div className="absolute bottom-0 left-0 w-full -translate-y-full transform bg-gradient-to-t from-black/70 to-transparent p-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <p className={`${didact.className} text-xs text-white sm:text-sm`}>
            {email}
          </p>
        </div>
      </div>
    </div>
    <div className={`${didact.className}`}>
      <h3 className={`${playfair.className} text-lg font-semibold md:text-xl`}>
        {name}
      </h3>
      <p className="text-muted-foreground text-sm">{position}</p>
      <p className="text-muted-foreground text-sm italic">{school}</p>
    </div>
  </div>
);

export default function Mananaliksik() {
  const researchers = [
    {
      name: "Cristine Joir B. Guerrero",
      position: "Batsilyer sa Pansekondaryong Edukasyon - Medyor sa Filipino",
      school: "Camarines Norte State College",
      image: "/images/researchers/2.jpg",
      email: "cristinejoirg@gmail.com",
    },
    {
      name: "Rose Ann Dela Paz-Aler, PhD",
      position: "Tagapayo | Assistant Professor IV",
      school: "Camarines Norte State College",
      image: "/images/researchers/1.jpg",
      email: "roseannaler@cnsc.edu.ph",
    },
    {
      name: "Elaiessah D. Solver",
      position: "Batsilyer sa Pansekondaryong Edukasyon - Medyor sa Filipino",
      school: "Camarines Norte State College",
      image: "/images/researchers/3.jpg",
      email: "elaiessahsolver@gmail.com",
    },
  ];

  return (
    <>
      <div className="flex min-h-screen w-full flex-col items-center justify-center px-4 py-12 md:px-6 lg:px-8">
        {/* headers */}
        <div className="mb-12 flex flex-col gap-4 text-center">
          <h1
            className={`${playfair.className} text-5xl font-bold md:text-6xl lg:text-7xl`}
          >
            Mananaliksik
          </h1>
          <p
            className={`${didact.className} text-muted-foreground mx-auto w-full md:w-2/3`}
          >
            Sa E-HABI, patunay kaming hindi kailangang malaki ang grupo para
            makalikha ng makabuluhang proyekto. Pinagbuklod kami ng malasakit,
            pagkamalikhain, at layuning mapreserba ang kultura.
          </p>
        </div>

        {/* content */}
        <div className="grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {researchers.map((researcher) => (
            <Researcher
              key={researcher.name}
              name={researcher.name}
              position={researcher.position}
              school={researcher.school}
              image={researcher.image}
              email={researcher.email}
            />
          ))}
        </div>
      </div>
      <Footer darkMode />
    </>
  );
}
