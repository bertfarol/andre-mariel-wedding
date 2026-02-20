import NextPageImagePreloader from "@/components/NextPageImagePreloader";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="h-screen grid place-items-center overflow-hidden">
        <div className="relative">
          {/* Envelope */}
          <Link href='/save-the-date' className='flex items-center'>
            <div className="mx-auto w-[320px] md:w-[488px] relative z-2 animate-slide-up-flower-1">
              <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <span className="font-imperial text-white text-[30px]">
                  Open Me
                </span>
              </div>
              <Image
                src="/black-envelope-stamped_488px-330px.svg"
                alt="envelope"
                width={488}
                height={330}
                className="w-full h-auto"
                priority
              />
            </div>
          </Link>
          {/* Flower-1 */}
          <div className="animate-slide-up-flower-2 w-[88px] md:w-[141px] absolute top-[-50px] right-[-28px] md:top-[-72px] md:right-[-54px] z-0">
            <Image
              src="/flower-1.png"
              alt="flower-1"
              width={141}
              height={212}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Flower-2 */}
          <div className="animate-slide-up-flower-4 w-[104px] md:w-[168px] absolute bottom-[-2px] right-[-23px] rotate-[3deg] z-4">
            <Image
              src="/flower-2.png"
              alt="flower-2"
              width={168}
              height={234}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Flower-3 */}
          <div className="animate-slide-up-flower-3 w-[110px] md:w-[166px] absolute bottom-[23px] left-[-30px] md:left-[-48px] z-0">
            <Image
              src="/flower-3.png"
              alt="flower-3"
              width={166}
              height={231}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div> 
      <NextPageImagePreloader
        images={[
          { src: "/envelope-bottom.png", width: 438, height: 479 },
          { src: "/open-envelope.png", width: 438, height: 479 },
          { src: "/Paper_Medium.png", width: 372, height: 475 },
          { src: "/location_cover_img.jpg", width: 1080, height: 781 },
          { src: "/men-dress-code.png", width: 592, height: 736 },
          { src: "/women-dress-code.png", width: 541, height: 736 },
        ]}
      />
    </>
  );
}
