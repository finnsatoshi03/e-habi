import { Playfair_Display } from "next/font/google";

import tambo from "@/public/images/tambo.jpg";
import abaka from "@/public/images/abaka.jpg";
import hammer from "@/public/images/hammer.jpg";
import berdengTambo from "@/public/images/berdeng-tambo.jpg";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair-display",
  style: ["normal", "italic"],
});

const T = `
  <div class="inline-block relative w-[150px] h-[150px]">
    <div class="relative absolute text-left spacing-0 text-md">
      <h1 class="${playfairDisplay.className} font-[700] non-italic">Tambo</h1>
      <span class="${playfairDisplay.className} italic text-gray-700">pangngalan</span>
      <p class="max-w-md">Isang halamang ginagamit sa paggawa ng walis tambo.</p>
    </div>
  </div>
  <div class="inline-block relative w-[150px] h-[150px]">
    TAMBO
    <div class="relative absolute">                    
      <img src="${tambo}" alt="Tambo" class="w-full h-full border border-black" />
    </div>
  </div>
`;

const A = `
  <div class="inline-block relative w-[150px] h-[150px]">
    <div class="relative absolute text-left spacing-0 text-md">
      <h1 class="${playfairDisplay.className} font-[700] non-italic">Abaká</h1>
      <span class="${playfairDisplay.className} italic text-gray-700">pangngalan</span>
      <p class="max-w-md">Isang halamang hemp na ginagamit sa paggawa ng walis tambo.</p>
    </div>
  </div>
  <div class="inline-block relative w-[150px] h-[150px]">
    ABAKA
    <div class="relative absolute">                    
      <img src="${abaka}" alt="Abaká" class="w-full h-full border border-black" />
    </div>
  </div>
`;

const M = `
  <div class="inline-block relative w-[150px] h-[150px]">
    <div class="relative absolute text-left spacing-0 text-md">
      <h1 class="${playfairDisplay.className} font-[700] non-italic">Martilyo</h1>
      <span class="${playfairDisplay.className} italic text-gray-700">pangngalan</span>
      <p class="max-w-md">Gamit na ginagamit sa pagpukpok ng pako.</p>
    </div>
  </div>
  <div class="inline-block relative w-[150px] h-[150px]">
    MARTILYO
    <div class="relative absolute">                    
      <img src="${hammer}" alt="Martilyo" class="w-full h-full border border-black" />
    </div>
  </div>
`;

const B = `
  <div class="inline-block relative w-[150px] h-[150px]">
    <div class="relative absolute text-left spacing-0 text-md">
      <h1 class="${playfairDisplay.className} font-[700] non-italic">Berdeng Tambo</h1>
      <span class="${playfairDisplay.className} italic text-gray-700">pang-uri</span>
      <p class="max-w-md">Isang uri ng tambo na may berdeng kulay kapag sariwa.</p>
    </div>
  </div>
  <div class="inline-block relative w-[150px] h-[150px]">
    BERDENG TAMBO
    <div class="relative absolute">                    
      <img src="${berdengTambo}" alt="Berdeng Tambo" class="w-full h-full border border-black" />
    </div>
  </div>
`;

const O = `
  <div class="inline-block relative w-[150px] h-[150px]">
    <div class="relative absolute text-left spacing-0 text-md">
      <h1 class="${playfairDisplay.className} font-[700] non-italic">Ordináryo</h1>
      <span class="${playfairDisplay.className} italic text-gray-700">pang-uri</span>
      <p class="max-w-md">Manipis at karaniwang ginagamit na walis tambo.</p>
    </div>
  </div>
  <div class="inline-block relative w-[150px] h-[150px]">
    ORDINARYO
    <div class="relative absolute">                    
      <img src="" alt="Ordináryo" class="w-full h-full border border-black" />
    </div>
  </div>
`;

// Export for usage
export { T, A, M, B, O };
