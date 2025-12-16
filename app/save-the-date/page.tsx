
import CountdownTimer from "@/components/CountDownTime";
import Image from "next/image";
import Link from "next/link";



export default async function Invitation() {

  return (
    <>
      {/* Hero */}
      <section className="relative pt-[70px] mb-[82px] overflow-hidden">   
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
          <div className="animate-slide-up-flower-4 w-[124px] md:w-[154px] absolute bottom-[6px] left-[-24px] rotate-[-20deg] z-10">
            <Image
              src="/flower-3.png"
              alt="flower-3"
              width={189}
              height={247}
              className="w-full h-auto"     
            />
          </div>

          {/* Flower-1 */}
          <div className="animate-slide-up-flower-3 w-[115px] md:w-[140px] absolute z-3 bottom-[184px] left-[-18px] md:bottom-[252px] md:left-[-36px]">
            <Image
              src="/flower-1.png"
              alt="flower-1"
              width={533}
              height={800}
              className="w-full h-auto"  
            />
          </div>

          {/* Flower-2 */}
          <div className="animate-slide-up-flower-2 w-[134px] md:w-[150px] absolute bottom-[120px] right-0 rotate-[14deg] md:bottom-[162px] md:right-[5px] md:rotate-[7deg] z-3">
            <Image 
              src="/flower-5.png"
              alt="flower-5"
              width={575}
              height={800}
              className="w-full h-auto"
            />
          </div>

          {/* Flower-1 - under paper*/}
          <div className="animate-slide-up-flower-1 w-[134px] md:w-[150px] absolute top-[-26px] right-[-32px] z-2">
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

      {/* Navigation */}
      <section className="bg-torn-paper pt-[38px] md:pt-[54px] lg:pt-[77px]">
        <div className="bg-[#0D0D0D]">

          <div className="relative h-[544px] md:h-[709px] max-w-[375px] md:max-w-[500px] mx-auto pt-[20px] md:pt-[23px]">
            <div className="font-playfair text-white text-[18px] text-center font-medium uppercase mb-[12px]">
              Click To View...
            </div>

            {/* Dress Code Button */}
            <div className="w-[165px] md:w-[195px] absolute top-[66px] left-[24px] md:top-[88px] md:left-[50px] z-2 hover:brightness-110 hover:scale-105 transition duration-300">
              <Link href='/save-the-date/dress-code'>
                <Image
                  src="/dress-code-button.svg"
                  alt="Dress Code"
                  width={199}
                  height={258}
                  className="w-full h-auto"  
                />
              </Link>
            </div>

            {/* FAQ Button */}
            <div className="w-[144px] md:w-[184px] absolute top-[102px] right-[22px] md:top-[139px] z-4 hover:brightness-110 hover:scale-105 transition duration-300">
              <Link href='/save-the-date/faq'>
                <Image
                  src="/faq-button.svg"
                  alt="Frequently Asked Questions"
                  width={192}
                  height={337}
                  className="w-full h-auto"       
                />
              </Link>
            </div>

            {/* Location Button */}
            <div className="w-[228px] md:w-[265px] absolute bottom-[104px] left-[32px] md:bottom-[125px] md:left-[60px] z-4 rotate-[-20deg] hover:brightness-110 hover:scale-105 transition duration-300">
              <Link href='/save-the-date/location'>
                <Image
                  src="/location-button.svg"
                  alt="Location"
                  width={266}
                  height={152}
                  className="w-full h-auto"         
                />
              </Link>
            </div>

            <div className="w-[145px] md:w-[200px] absolute top-[56px] right-[82px] md:top-[78px] md:right-[105px] z-1">
              <Image
                src="/flower-1.png"
                alt="flower-1"
                width={533}
                height={800}
                className="w-full h-auto"   
              />
            </div>

            <div className="w-[162px] md:w-[200px] absolute bottom-[68px] left-[79px] md:bottom-[78px] md:left-[124px] rotate-[20deg] z-3">
              <Image
                src="/flower-6.png"
                alt="flower-6"
                width={200}
                height={299}
                className="w-full h-auto"        
              />
            </div>

            <div className="w-[107px] md:w-[147px] absolute bottom-[165px] left-[40px] md:bottom-[200px] left-[50px] scale-x-[-1] rotate-[20deg] z-2">
              <Image
                src="/flower-2.png"
                alt="flower-2"
                width={575}
                height={800}
                className="w-full h-auto"     
              />
            </div>

            <div className="w-[145px] md:w-[175px] absolute bottom-[32px] right-[64px] md:bottom-[46px] md:right-[122px] scale-x-[-1] rotate-[-45deg] z-3">
              <Image
                src="/flower-2.png"
                alt="flower-2"
                width={575}
                height={800}
                className="w-full h-auto"          
              />
            </div>
          </div>

        </div>
      </section>

      {/* Countdown */}
      <section className="py-[32px]">
        <div className="text-[#232323] uppercase text-center font-playfair">
          WEDDING DAY COUNTDOWN
        </div>
        <CountdownTimer />
      </section>
    </>
  )
}
