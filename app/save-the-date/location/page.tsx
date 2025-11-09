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
              <Image
                src="/balay-dako-1024x480.webp"
                alt="Balay Dako"
                width={1024}
                height={480}
                className="w-full h-auto"
                priority
              />
              
            </div>

            <h3 className="text-center font-playfair text-[20px] font-medium text-[#232323] mb-[12px]">
              Balay Dako, Tagaytay
            </h3>
            <p className="text-center text-[15px] leading-[1.4] text-[#4C4A4A] mb-[40px]">
              Tagaytay - Nasugbu Hwy, Tagaytay, 4120 Cavite
            </p>

          <div className="flex justify-center">
            <a
              href="https://www.google.com/maps/dir//Balay+Dako+Tagaytay+-+Nasugbu+Hwy+Tagaytay+City+4120+Cavite/@14.1025675,120.9509707,17z/data=!4m5!4m4!1m0!1m2!1m1!1s0x33bd7772447d5445:0x903beff1916baf77"
              target="_blank"
              className="font-playfair font-semibold text-[15px] rounded-[6px] bg-black text-white h-[44px] w-full max-w-[288px] cursor-pointer hover:opacity-80 duration-300 grid place-items-center"
            >
              Get Directions
            </a>
          </div>
         </div>
       </section>
  )
}