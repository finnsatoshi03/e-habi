import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair-display",
  style: ["normal", "italic"],
});

export const Footer = () => {

  return (
    <div className="flex flex-col">

      <div className="flex items-center justify-between px-12 pb-2">
        <span className="text-5xl ">Handa ka <br /> ba para sa quiz?</span>
        <div className="flex gap-2 items-center cursor-pointer group">
          <div className="flex items-center justify-center rounded-full p-2 border group-hover:bg-[#1E1E1E] group-hover:text-white transition-all delay-20">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="lucide lucide-move-down-right-icon lucide-move-down-right group-hover:rotate-315 transition-transform duration-300"
            >
              <path d="M19 13V19H13"/>
              <path d="M5 5L19 19"/>
            </svg>
          </div>
          <div className="flex items-center justify-center rounded-full py-2 px-4 border group-hover:bg-[#1E1E1E] group-hover:text-white transition-all delay-20">
            <span className="text-2xl">Simulan ang quiz!</span>
          </div>
        </div>


      </div>

      <div className="mt-4 bg-[#1E1E1E] text-white 
      flex justify-between px-24 py-8">
        <div className="flex flex-col gap-44 justify-between">
          <h1 className={`${playfairDisplay.className} text-9xl`}>E-HABI</h1>
          <h6 className="text-sm italic">2025 E-Habi. All rights reserved.</h6>
        </div>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-2">
            <div className="flex flex-col gap-2 ">
              <h6 className="cursor-pointer hover:text-[#D3D3D3]">Home</h6>
              <h6 className="cursor-pointer hover:text-[#D3D3D3]">Paano Ginagawa  <br /> ang Walis Tambo</h6>
              <h6 className="cursor-pointer hover:text-[#D3D3D3]">Mga Paniniwala sa <br /> Paggawa ng Walis Tambo</h6>
              <h6 className="cursor-pointer hover:text-[#D3D3D3]">Take Quiz</h6>
            </div>
            <div className="flex flex-col gap-2">
              <h6 className="cursor-pointer hover:text-[#D3D3D3]">Facebook</h6>
              <h6 className="cursor-pointer hover:text-[#D3D3D3]">Instagram</h6>
              <h6 className="cursor-pointer hover:text-[#D3D3D3]">Messenger</h6>
              <h6 className="cursor-pointer hover:text-[#D3D3D3]">Twitter</h6>
              <h6 className="cursor-pointer hover:text-[#D3D3D3]">Connect with the Developers</h6>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

Footer.displayName = "Footer"