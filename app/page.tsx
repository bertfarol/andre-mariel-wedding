import CountdownTimer from "@/components/CountDownTime";
import { FaqItem } from "@/components/FaqItem";
import { Calendar } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-hidden max-w-5xl mx-auto bg-[#faf8f1] xl:shadow xl:max-w-3xl">
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
      <section className="py-10 bg-[#0d0d0d] ">
        <div className="text-white text-center font-playfair mb-2 text-lg font-medium ">
          {/* WEDDING DAY COUNTDOWN */}
          Wedding Day Countdown
        </div>
        <CountdownTimer />
      </section>

      <hr className="style-two"/>

      {/* Location */}
      <section className="pt-20 md:pt-28 xl:pt-24 pb-10 relative">
        <Image
          src="/torn_paper-640px.png"
          alt="background"
          width={640}
          height={53}
          className="w-full h-auto scale-y-[-1] absolute -top-0.5 left-0 md:hidden"
          priority
        />
        <Image
          src="/torn_paper-768px.png"
          alt="background"
          width={768}
          height={55}
          className="w-full h-auto scale-y-[-1] absolute -top-0.5 left-0 hidden md:block"
          priority
        />
        <Image
          src="/background/1.png"
          alt="background"
          width={150}
          height={195}
          className="absolute top-[-81px] left-[-72px] "
          priority
        />
        <header className="mb-6 px-5 max-w-[640px] mx-auto">
          <h2 className="font-imperial text-[48px] md:text-[56px] leading-[0.7] text-center text-[#232323]">
            Location
          </h2>
        </header>  
        <div className="px-5 max-w-[600px] mx-auto">
          <h3 className="text-center font-playfair text-[20px] font-medium text-[#232323] mb-3">
            Farm Hills Garden
          </h3>
          <p className="text-center text-[15px] lg:text-[17px] leading-[1.4] text-[#4C4A4A]">
            Combines nature, relaxation, and celebration in a single destination. It&apos;s set amidst lush gardens with tall pine trees and green open spaces, 
            offering a serene countryside atmosphere perfect for guests looking to escape city life.
          </p>
        </div>
      </section>

      <hr className="style-two"/>

      {/* Program */}
      <section className="py-10 px-5 relative">
        <Image
          src="/background/2.png"
          alt="background"
          width={193}
          height={251}
          className="absolute top-[-88px] right-[-110px]"
          priority
        />
        <header className="mb-12 max-w-[640px] mx-auto">
          <h2 className="font-imperial text-[48px] md:text-[56px] leading-[0.7] mb-6 text-center text-[#232323]">
            Program
          </h2>
        </header> 
        <div className="w-[290px] md:w-[400px] mx-auto mb-4 rounded-md overflow-hidden">
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

      {/* Entourage */}
      <section className="py-10 relative bg-[#0d0d0d] text-white">
        <Image
          src="/background/3.png"
          alt="background"
          width={206}
          height={241}
          className="absolute top-[-130px] left-[-118px]"
          priority
        />
        <header className="mb-10 px-5 max-w-[640px] mx-auto">
          <h2 className="font-imperial text-[48px] md:text-[56px] leading-[0.7] mb-6 text-center text-white">
            Entourage
          </h2>
        </header>  

        <div className="grid grid-cols-2 gap-5">
          <div className="text-right">
            <h3 className="font-imperial text-[26px] lg:text-[32px]">Parents of the Bride</h3>
            <p className="text-white/65 lg:text-[18px]">Catherine Santos</p>
            <p className="text-white/65 lg:text-[18px]">Rossano Santos</p>
          </div>
          <div>
            <h3 className="font-imperial text-[26px] lg:text-[32px]">Parents of the Groom</h3>
            <p className="text-white/65 lg:text-[18px]">Emerita Santos</p>
            <p className="text-white/65 lg:text-[18px]">Fredric Santos</p>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="font-imperial text-[26px] lg:text-[32px] text-center tracking-wider">Principal Sponsors</h3>
          <div className="grid grid-cols-2 gap-5">
            <div className="text-right">
              <p className="text-white/65 lg:text-[18px]">Adalyn Panzo</p>
              <p className="text-white/65 lg:text-[18px]">Gina Gutierrez</p>
              <p className="text-white/65 lg:text-[18px]">Rochelle Gutierrez</p>
            </div>
            <div>
              <p className="text-white/65 lg:text-[18px]">Richard Panzo</p>
              <p className="text-white/65 lg:text-[18px]">Aldrin San Pedro</p>
              <p className="text-white/65 lg:text-[18px]">Alexson Diaz</p>
            </div>
          </div>
          <p className="text-white/65 lg:text-[18px] text-center">Emilia Santos</p>
        </div>

        <div className="grid grid-cols-2 gap-5 mt-8">
          <div className="text-right">
            <h3 className="font-imperial text-[26px] lg:text-[32px]">Bridesmaid</h3>
            <p className="text-white/65 lg:text-[18px]">Kate Angeline Santos</p>
            <p className="text-white/65 lg:text-[18px]">Janine Beatrice Trozado</p>
            <p className="text-white/65 lg:text-[18px]">Gille Caroline Gutierrez</p>
            <p className="text-white/65 lg:text-[18px]">Eyana Sophia Cortez</p>
            <p className="text-white/65 lg:text-[18px]">Jessica Mae Roxas</p>
            <p className="text-white/65 lg:text-[18px]">Dynalou Masangkay</p>
            <p className="text-white/65 lg:text-[18px]">Arthrynne Bayot</p>
            <p className="text-white/65 lg:text-[18px]">Alexandra Naomi Vergara</p>
            <p className="text-white/65 lg:text-[18px]">Mica Mae Pabello</p>

            <h3 className="font-imperial text-[26px] lg:text-[32px] mt-10 leading-[1.2]">Bridesmen</h3>
            <p className="text-white/65 lg:text-[18px]">Bjorn Chauncey Dumalag</p>
            <p className="text-white/65 lg:text-[18px]">John Ocampo</p>
          </div>
          <div>
            <h3 className="font-imperial text-[26px] lg:text-[32px] ">Groomsmen</h3>
            <p className="text-white/65 lg:text-[18px]">Alfonso Santos</p> 
            <p className="text-white/65 lg:text-[18px]">Jemil Cruz</p> 
            <p className="text-white/65 lg:text-[18px]">Ron Jake Marin</p> 
            <p className="text-white/65 lg:text-[18px]">Venjo Tesoro</p> 
            <p className="text-white/65 lg:text-[18px]">Richmond Caing</p> 
            <p className="text-white/65 lg:text-[18px]">Robert Lee Sedante</p> 
            <p className="text-white/65 lg:text-[18px]">John Carlo Sedanto</p> 
            <p className="text-white/65 lg:text-[18px]">Aaron Aquino</p> 
            <p className="text-white/65 lg:text-[18px]">Tristan Barbosa</p> 
            <p className="text-white/65 lg:text-[18px]">Mario Pagkalinawan</p> 
            <p className="text-white/65 lg:text-[18px]">Marco Tabobo</p> 
          </div>
        </div>

        <div className="mt-8">
          <h3 className="font-imperial text-[26px] lg:text-[32px] text-center leading-[1.2]">Veil</h3>
          <p className="text-white/65 lg:text-[18px] text-center">Maria Jamaica Arangozo</p>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-8 max-w-[480px] mx-auto">
          <div className="text-center">
            <h3 className="font-imperial text-[26px] lg:text-[32px] leading-[1.2]">Candle</h3>
            <p className="text-white/65 lg:text-[18px]">Raiza Pernia</p>
          </div>
          <div className="text-center">
            <h3 className="font-imperial text-[26px] lg:text-[32px] leading-[1.2]">Ring Bearer</h3>
            <p className="text-white/65 lg:text-[18px]">Raphael Matthew Cortez</p>
          </div>
        </div>

        <div className="grid grid-cols-2 mt-8 max-w-[320px] mx-auto">
          <div className="text-center">
            <h3 className="font-imperial text-[26px] lg:text-[32px] leading-[1.2]">Coin Bearer</h3>
            <p className="text-white/65 lg:text-[18px]">Amirah Liza Santos</p>
          </div>
          <div className="text-center">
            <h3 className="font-imperial text-[26px] lg:text-[32px] leading-[1.2]">Bible Bearer</h3>
            <p className="text-white/65 lg:text-[18px]">Edzel Cortez</p>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="font-imperial text-[26px] lg:text-[32px] text-center leading-[1.2]">Flower Girl</h3>
          <p className="text-white/65 lg:text-[18px] text-center">Kaia Winona Santos</p>
        </div>

      </section>

      {/* Dress Code */}
      <section className="pt-20 md:pt-28 xl:pt-24 pb-10 relative">
        <Image
          src="/torn_paper-640px.png"
          alt="background"
          width={640}
          height={53}
          className="w-full h-auto scale-y-[-1] absolute -top-0.5 left-0 md:hidden"
          priority
        />
        <Image
          src="/torn_paper-768px.png"
          alt="background"
          width={768}
          height={55}
          className="w-full h-auto scale-y-[-1] absolute -top-0.5 left-0 hidden md:block"
          priority
        />

        <Image
          src="/background/2.png"
          alt="background"
          width={193}
          height={251}
          className="absolute top-[-88px] right-[-110px]"
          priority
        />
        <header className="mb-10 px-5 max-w-[640px] mx-auto">
          <h2 className="font-imperial text-[48px] md:text-[56px] leading-[0.7] mb-6 text-center text-[#232323]">
            Dress Code
          </h2>
          <div className="text-[16px] leading-[1.4] text-center text-[#4C4A4A] lg:text-[17px] max-w-[600px] mx-auto">
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
              className="w-auto h-auto z-10 relative"  
            />
          </div>
          <div>
            <Image
              src="/women-dress-code.png"
              alt="Dress Code"
              width={541}
              height={736}
              className="w-auto h-auto z-10 relative"  
            />
          </div>
        </div>
      </section>

      <hr className="style-two"/>

      {/* Our Venue */}
      <section className="py-10 relative px-8">
        <Image
          src="/background/5.png"
          alt="background"
          width={176}
          height={222}
          className="absolute top-[-60px] left-[-76px]"
          priority
        />
        <header className="mb-10 px-5 max-w-[640px] mx-auto">
          <h2 className="font-imperial text-[48px] md:text-[56px] leading-[0.7] mb-6 text-center text-[#232323]">
            Our Venue
          </h2>
        </header>  
        <p className="text-center text-lg lg:text-[20px] leading-normal font-bold text-[#232323]">
          Ceremony
        </p>
        <p className="text-center text-base leading-[1.4] text-[#4C4A4A] mb-6 lg:text-[17px]">
          4:00 PM
        </p>
        <p className="text-center text-lg lg:text-[20px] leading-[1.4] font-bold text-[#232323]">
          Farm Hills Garden
        </p>
        <p className="text-center text-base leading-[1.3] text-[#4C4A4A] lg:text-[17px]">
          Location/Waze: Farm Hills Garden, Brgy. Ulat, <br />Silang, 4118 Cavite
        </p>

        <div className="flex justify-center my-8">
          <a              
            href="https://www.google.com/maps/place/Farm+Hills+Garden/@14.148686,120.984988,17z/data=!4m9!3m8!1s0x33bd79871e87c969:0x73a05d49502391f8!5m2!4m1!1i2!8m2!3d14.1486862!4d120.9849878!16s%2Fg%2F11gb3jrtd9?hl=en&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D"
            target="_blank"
            className="font-playfair font-semibold text-[15px] rounded-md bg-black text-white h-11 w-full max-w-[288px] cursor-pointer hover:opacity-80 duration-300 grid place-items-center"
          >
            Get Directions
          </a>
        </div>

        <div className="grid place-items-center max-w-lg mx-auto mb-4">
          <Image
            src="/location_cover_img.jpg"
            alt="Farm Hills Garden"
            width={1024}
            height={781}
            className="w-full h-auto"
            priority
          />
        </div>

        <p className="text-center text-base leading-[1.3] text-[#4C4A4A]  mb-4 lg:text-[17px]">
          Click <b>{`“Get Directions”`}</b> to see location details or scan the QR code below:
        </p>

        <div className="grid place-items-center max-w-[270px] mx-auto">
          <Image
            src="/location_qr.png"
            alt="Farm Hills Garden"
            width={730}
            height={730}
            className="w-full h-auto"
            priority
          />
        </div>
      </section>

      <hr className="style-two"/>

      {/* FAQ */}
      <section className="py-10 relative">
        <Image
          src="/background/4.png"
          alt="background"
          width={205}
          height={249}
          className="absolute top-[-130px] right-[-70px]"
          priority
        />
        <Image
          src="/background/6.png"
          alt="background"
          width={142}
          height={172}
          className="absolute bottom-[-105px] left-[-70px] scale-x-[-1]"
          priority
        />
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
            {/* If you have been permitted to bring a guest, your invitation is either your guest&apos;s name or a +1 notation. Otherwise, we would love to keep our wedding as an intimate event with close friends and family only. */}
            If you have been permitted to bring a guest, your invitation will include either your guest&apos;s name or a &apos;+1&apos; notation. Otherwise, we would love to keep our wedding as an intimate event with close friends and family only.
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
      <section className="pt-10 pb-20 relative overflow-hidden">
        <Image
          src="/background/7.png"
          alt="background"
          width={140}
          height={171}
          className="absolute bottom-[-58px] -right-16 scale-x-[-1]"
          priority
        />
        <p className="font-imperial text-[38px] leading-none mb-3 md:text-[56px] text-center text-[#232323] mx-auto">
          Kindly Respond
        </p>
        {/* <p className="text-[#4C4A4A] text-center mb-7">by May 5, 2026, using the RSVP HERE</p> */}
        <p className="text-[#4C4A4A] text-center mb-7 lg:text-[17px]">using the RSVP HERE</p>

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
    </div>
  );
}
