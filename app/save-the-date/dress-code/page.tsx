import Image from "next/image";

export default function DressCodePage() {
  return (
    <section className="pt-[40px] pb-[84px]">
      <header className="mb-[75px] px-[20px] max-w-[640px] mx-auto">
        <h2 className="font-imperial text-[48px] md:text-[56px] leading-[0.7] mb-[12px] md:mb-[24px] text-center text-[#232323]">
          Dress Code
        </h2>
        <div className="text-[16px] leading-[1.4] text-center text-[#4C4A4A]">
          All guests are requested to wear black tie attire, with men in tuxedos and women in formal black long gowns, for an elegant, unified look.
        </div>
      </header>

      <div className="flex flex-col md:flex-row items-center justify-center gap-[27px]">
          <Image
            src="/men-dress-code.svg"
            alt="Men Dress Code"
            width={291}
            height={362}         
          />
          <Image
            src="/woman-dress-code.svg"
            alt="Women Dress Code"
            width={266}
            height={362}
            className="w-full h-auto"            
          />
      </div>
    </section>
  )
} 