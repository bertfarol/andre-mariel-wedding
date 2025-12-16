import Image from "next/image";

export default function DressCodePage() {
  return (
       <section className="pt-10 pb-20">
         <header className="mb-9 px-5 max-w-[640px] mx-auto">
           <h2 className="font-imperial text-[48px] md:text-[56px] leading-[0.7] mb-3 md:mb-6 text-center text-[#232323]">
             Location
          </h2>
          <div className="text-[16px] leading-[1.4] text-center text-[#4C4A4A]">
            We can&apos;t wait to celebrate this special day with you at our chosen venue
          </div>
         </header>
   
         <div className="px-5 max-w-3xl mx-auto">
            <div className="w-full mb-9 rounded-md overflow-hidden">
              <Image
                src="/location_cover_img.jpg"
                alt="Balay Dako"
                width={1024}
                height={480}
                className="w-full h-auto"
                priority
              />              
            </div>

            <h3 className="text-center font-playfair text-[20px] font-medium text-[#232323] mb-3">
              Farm Hills Garden
            </h3>
            <p className="text-center text-[15px] leading-[1.4] text-[#4C4A4A] mb-10">
              Farm Hills Garden, Brgy. Ulat, Silang, 4118 Cavite
            </p>

          <div className="flex justify-center">
            <a              
              href="https://www.google.com/maps/place/Farm+Hills+Garden/@14.148686,120.984988,17z/data=!4m9!3m8!1s0x33bd79871e87c969:0x73a05d49502391f8!5m2!4m1!1i2!8m2!3d14.1486862!4d120.9849878!16s%2Fg%2F11gb3jrtd9?hl=en&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D"
              target="_blank"
              className="font-playfair font-semibold text-[15px] rounded-md bg-black text-white h-11 w-full max-w-[288px] cursor-pointer hover:opacity-80 duration-300 grid place-items-center"
            >
              Get Directions
            </a>
          </div>
         </div>
       </section>
  )
}