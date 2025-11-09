import GetDirectionsButton from "@/components/GetDirectionsButton";
import Image from "next/image";

export default function DressCodePage() {
  return (
       <section className="pt-[40px] pb-[80px]">
         <header className="mb-[36px] px-[20px] max-w-[640px] mx-auto">
           <h2 className="font-imperial text-[48px] md:text-[56px] leading-[0.7] mb-[12px] md:mb-[24px] text-center text-[#232323]">
             Location
          </h2>
          <div className="text-[16px] leading-[1.4] text-center text-[#4C4A4A]">
            We can&apos;t wait to celebrate this special day with you at our chosen venue
          </div>
         </header>
   
         <div className="px-[20px] max-w-[768px] mx-auto">
            <div className="w-full mb-[36px]">
              <img
                src="/balay-dako-640x300.png"
                alt="Balay Dako"
                className="w-full h-auto"
                />
            </div>

            <h3 className="text-center font-playfair text-[20px] font-medium text-[#232323] mb-[12px]">
              Balay Dako, Tagaytay
            </h3>
            <p className="text-center text-[15px] leading-[1.4] text-[#4C4A4A] mb-[40px]">
              Tagaytay - Nasugbu Hwy, Tagaytay, 4120 Cavite
            </p>

          <GetDirectionsButton />
         </div>
       </section>
  )
}