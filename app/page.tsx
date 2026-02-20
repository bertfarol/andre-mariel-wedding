import CountdownTimer from "@/components/CountDownTime";
import { FaqItem } from "@/components/FaqItem";
import { Calendar } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-[70px] overflow-hidden">   
        <div className="relative w-[343px] md:w-[438px] mx-auto">
          {/* Open Envelope */}
          <div className="relative w-[343px] md:w-[438px] mx-auto z-3 pt-[120px]">
            {/* Paper */}  
            <div className="animate-slide-up w-full max-w-[310px] md:max-w-[362px] mx-auto pt-[30px] absolute left-1/2 -translate-x-1/2 top-0 z-3">
             <div className="relative z-10">
                <div className="font-playfair text-[15px] md:text-[20px]  text-center mb-[34px] md:mb-10 text-[#232323]"> 
                  YOU&apos;RE INVITED TO THE<br/>WEDDING OF 
                </div>
                <div className="font-imperial text-[58px] md:text-[78px] text-center mb-[34px] md:mb-10 text-[#232323] leading-[0.7]"> 
                  Andre<br/>&<br/>Mariel
                </div>
                <div className="font-playfair text-[15px] md:text-[20px] text-center mb-20 text-[#232323] uppercase"> 
                  Wednesday, APRIL 1, 2026<br/>AT 4:00 PM 
                </div>
              </div>
              <div className="w-full absolute top-0 left-0 z-0">
                <Image
                  src="/Paper_Medium.png"
                  alt="paper"
                  width={372}
                  height={475}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>   
            <Image
              src="/open-envelope.png"
              alt="Open Envelope"
              width={438}
              height={479}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Envelope Bottom */}
          <div className="w-[343px] md:w-[438px] absolute bottom-0 left-1/2 -translate-x-1/2 z-4">
            <Image
              src="/envelope-bottom.png"
              alt="Envelope Bottom"
              width={438}
              height={479}
              className="w-full h-auto" 
              priority
            />
          </div>

          {/* Flower-3 */}
          <div className="animate-slide-up-flower-4 w-[124px] md:w-[154px] absolute bottom-1.5 -left-6 rotate-[-20deg] z-10">
            <Image
              src="/flower-3.png"
              alt="flower-3"
              width={189}
              height={247}
              className="w-full h-auto"     
            />
          </div>

          {/* Flower-1 */}
          <div className="animate-slide-up-flower-3 w-[115px] md:w-[140px] absolute z-3 bottom-[184px] left-[-18px] md:bottom-[252px] md:-left-9">
            <Image
              src="/flower-1.png"
              alt="flower-1"
              width={533}
              height={800}
              className="w-full h-auto"  
            />
          </div>

          {/* Flower-2 */}
          <div className="animate-slide-up-flower-2 w-[134px] md:w-[150px] absolute bottom-[120px] right-0 rotate-14 md:bottom-[162px] md:right-[5px] md:rotate-[7deg] z-3">
            <Image 
              src="/flower-5.png"
              alt="flower-5"
              width={575}
              height={800}
              className="w-full h-auto"
            />
          </div>

          {/* Flower-1 - under paper*/}
          <div className="animate-slide-up-flower-1 w-[134px] md:w-[150px] absolute top-[-26px] -right-8 z-2">
            <Image 
              src="/flower-1.png"
              alt="flower-1"
              width={533}
              height={800}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Message */}
      <section className="py-14 px-5 max-w-[640px] mx-auto">
        <div className="text-lg md:text-xl leading-[1.4] text-center text-[#4C4A4A] space-y-4">
          <p>
            We joyfully invite you to celebrate our wedding as we begin this beautiful new chapter together. 
          </p>
          <p>Surrounded by love, laughter, and the people who mean the most to us, our day would be truly complete with your presence. </p>
          <p> We would be honored to have you join us as we share our vows and celebrate the start of our life together.</p>  
        </div>      
      </section>

      <hr className="style-two"/>

      {/* Countdown */}
      <section className="py-10">
        <div className="text-[#232323] text-center font-playfair mb-2 text-lg font-medium">
          {/* WEDDING DAY COUNTDOWN */}
          Wedding Day Countdown
        </div>
        <CountdownTimer />
      </section>

      <hr className="style-two"/>

      {/* Location */}
      <section className="py-10">
        <header className="mb-6 px-5 max-w-[640px] mx-auto">
          <h2 className="font-imperial text-[48px] md:text-[56px] leading-[0.7] text-center text-[#232323]">
            Location
          </h2>
        </header>  
        <div className="px-5 max-w-3xl mx-auto">
          <h3 className="text-center font-playfair text-[20px] font-medium text-[#232323] mb-3">
            Farm Hills Garden
          </h3>
          <p className="text-center text-[15px] leading-[1.4] text-[#4C4A4A]">
            Combines nature, relaxation, and celebration in a single destination. It&apos;s set amidst lush gardens with tall pine trees and green open spaces, 
            offering a serene countryside atmosphere perfect for guests looking to escape city life.
          </p>
        </div>
      </section>

      <hr className="style-two"/>

      {/* Program */}
      <section className="py-10 px-5">
        <header className="mb-12 max-w-[640px] mx-auto">
          <h2 className="font-imperial text-[48px] md:text-[56px] leading-[0.7] mb-6 text-center text-[#232323]">
            Program
          </h2>
        </header> 
        <div className="w-[290px] md:w-[500px] mx-auto mb-4 rounded-md overflow-hidden">
          <Image
            src="/program_image.svg"
            alt="Farm Hills Garden"
            width={197}
            height={390}
            className="w-full h-auto"
            priority
          />              
        </div>
      </section>

      <hr className="style-two"/>

      {/* Dress Code */}
      <section className="py-10">
        <header className="mb-10 px-5 max-w-[640px] mx-auto">
          <h2 className="font-imperial text-[48px] md:text-[56px] leading-[0.7] mb-6 text-center text-[#232323]">
            Dress Code
          </h2>
          <div className="text-[16px] leading-[1.4] text-center text-[#4C4A4A]">
            All guests are requested to wear black tie attire, with men in tuxedos and women in formal black long gowns, for an elegant, unified look.
          </div>
        </header>
  
        <div className="flex flex-row items-center justify-center gap-2 px-5 max-w-2xl mx-auto">
          <div>
            <Image
              src="/men-dress-code.png"
              alt="Dress Code"
              width={592}
              height={736}
              className="w-auto h-auto"  
            />
          </div>
          <div>
            <Image
              src="/women-dress-code.png"
              alt="Dress Code"
              width={541}
              height={736}
              className="w-auto h-auto"  
            />
          </div>
        </div>
      </section>

      <hr className="style-two"/>

      {/* Google map */}
      <section className="py-10">
        <div className="map-wrapper px-5 mb-10 max-w-[700px] mx-auto">
          <div style={{ width: "100%", height: "350px", position: "relative" }}>
            <iframe
              src="https://www.google.com/maps?q=14.1486862,120.9849878&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <p className="text-center text-[15px] leading-[1.4] text-[#4C4A4A] mb-6">
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
      </section>

      <hr className="style-two"/>

      {/* FAQ */}
      <section className="py-10">
        <header className="mb-10 px-5">
          <h2 className="font-imperial text-[48px] leading-none mb-3 md:text-[56px] text-center text-[#232323] mx-auto">
            Frequently Asked <br /> Questions
          </h2>
        </header>

        <div className="px-5 max-w-3xl mx-auto space-y-6">

          <FaqItem question="Where will the ceremony and reception be held?" defaultOpen>
            Both the ceremony and reception will take place at Farm Hills Garden
          </FaqItem>

          <hr className="h-px bg-gray-100 border-0"/>

          <FaqItem question="Can I bring a guest?">
            If you have been permitted to bring a guest, your invitation is either your guest&apos;s name or a +1 notation. Otherwise, we would love to keep our wedding as an intimate event with close friends and family only.
          </FaqItem>

          <hr className="h-px bg-gray-100 border-0"/>

          <FaqItem question="Are kids welcome?">
            Although we love your little ones, we have decided to make this an adults-only event. We encourage you to use this weekend as a mini vacation.
          </FaqItem>

          <hr className="h-px bg-gray-100 border-0"/>

          <FaqItem question="What is the dress code?">
            <ul className="list-disc list-inside space-y-1 mb-3">
              <li>We&apos;d love to see our family and friends get dressed up for our big day!</li>
              <li>The dress code is BLACK TIE. We ask that men wear a black tuxedo and women wear black formal gowns.</li>
              <li>To help us create a beautiful atmosphere for the day, we kindly request that all guests wear BLACK only.</li>
            </ul>

            <div>
              Kindly avoid the following:
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li>Wearing of jeans, shorts, or casual attire</li>
                <li>White, ivory, cream (reserved for the bride and groom)</li>
                <li>Wearing of any other colors.</li>
              </ul>
            </div>
          </FaqItem>

          <hr className="h-px bg-gray-100 border-0"/>

          <FaqItem question="What time should I arrive?">
            We kindly ask guests to arrive 30 mins before the ceremony begins to allow time for parking and seating. The ceremony will start promptly at 4 pm.
          </FaqItem>

          <hr className="h-px bg-gray-100 border-0"/>

          <FaqItem question="Can I take pictures throughout the ceremony and reception?">
            In order to ensure we are fully present, we will be having an “unplugged” ceremony. We kindly ask that you turn off/silence all phones during the ceremony. However, once the ceremony ends, feel free to take as many pictures as you like during cocktail hour and the reception.
          </FaqItem>

          <hr className="h-px bg-gray-100 border-0"/>

          <FaqItem question="Will there be an open bar?">
            Yes, the drinks are on us and the hangover is on you. Please party accordingly!
          </FaqItem>

        </div>
      </section>

      <hr className="style-two"/>

      {/* RSVP */}
      <section className="pt-10 pb-20">
        <p className="font-imperial text-[38px] leading-none mb-3 md:text-[56px] text-center text-[#232323] mx-auto">
          Kindly Respond
        </p>
        <p className="text-[#4C4A4A] text-center mb-7">by May 5, 2026, using the RSVP HERE</p>

        <div className="flex justify-center">
          <a              
            href="/rsvp"
            className="tracking-widest font-playfair font-semibold text-[15px] rounded-md bg-black text-white h-11 w-full max-w-[288px] cursor-pointer hover:opacity-80 duration-300 flex items-center justify-center"
          >
           <Calendar className="w-4 h-4 mr-2"/>
           <span>RSVP Now</span>
          </a>
        </div>
      </section>
    </>
  );
}
