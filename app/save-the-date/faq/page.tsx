
export default function DressCodePage() {
  return (
    <section className="pt-[40px] pb-[84px]">
      <header className="mb-[60px] px-[20px]">
        <h2 className="font-imperial text-[48px] leading-[0.7] mb-[12px] md:text-[56px] text-center text-[#232323] mx-auto">
          Frequenty Asked <br />Questions
        </h2>
      </header>

      <div className="px-[20px] max-w-[768px] mx-auto">
        <article >
          <h3  className="font-playfair text-[16px] leading-[1.4] font-bold text-[#232323] mb-[6px]">
            Where will the ceremony and reception be held?
          </h3 >
          <p className="text-[#4C4A4A] text-[16px] leading-[1.4]">
            Both the ceremony and reception will take place at Balay Dako Tagaytay
          </p>
        </article >

        <hr className="h-px my-[24px] bg-gray-100 border-0"/>
        
        <article>
          <h3 className="font-playfair text-[16px] leading-[1.4] font-bold text-[#232323] mb-[6px]">
            Can I bring a guest?
          </h3>
          <p className="text-[#4C4A4A] text-[16px] leading-[1.4]">
            If you have been permitted to bring a guest, your invitation is either your guest's name or a +1 notation. Otherwise, we would love to keep our wedding as an intimate event with close friends and family only.
          </p>
        </article>
        
        <hr className="h-px my-[24px] bg-gray-100 border-0"/>

        <article>
          <h3 className="font-playfair text-[16px] leading-[1.4] font-bold text-[#232323] mb-[6px]">
           Are kids welcome?
          </h3>
          <p className="text-[#4C4A4A] text-[16px] leading-[1.4]">
            Although we love your little ones, we have decided to make this an adults-only event. We encourage you to use this weekend as a mini vacation.
          </p>
        </article>

        <hr className="h-px my-[24px] bg-gray-100 border-0"/>

        <article>
          <h3 className="font-playfair text-[16px] leading-[1.4] font-bold text-[#232323] mb-[6px]">
           What is the dress code?
          </h3>
          <div className="text-[#4C4A4A] text-[16px] leading-[1.4]">
            <ul className="list-disc list-inside space-y-1 mb-3">
              <li>We'd love to see our family and friends get dressed up for our big day!</li>
              <li>The dress code is BLACK TIE. We ask that men wear a black tuxedo and women wear black formal gowns.</li>
              <li>
                To help us create a beautiful atmosphere for the day, we kindly request that all guests wear BLACK only.           
              </li>
            </ul>
            <div>
              Kindly avoid the following:
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li>Wearing of jeans, shorts, or casual attire</li>
                <li>White, ivory, cream (reserved for the bride and groom)</li>
                <li>Wearing of any other colors.</li>
              </ul>
            </div>
          </div>
        </article>

        <hr className="h-px my-[24px] bg-gray-100 border-0"/>

        <article>
          <h3 className="font-playfair text-[16px] leading-[1.4] font-bold text-[#232323] mb-[6px]">
           What time should I arrive?
          </h3>
          <p className="text-[#4C4A4A] text-[16px] leading-[1.4]">
           We kindly ask guests to arrive 30 mins before the ceremony begins to allow time for parking and seating. The ceremony will start promptly at 4 pm.
          </p>
        </article>

        <hr className="h-px my-[24px] bg-gray-100 border-0"/>

        <article>
          <h3 className="font-playfair text-[16px] leading-[1.4] font-bold text-[#232323] mb-[6px]">
           Can I take pictures throughout the ceremony and reception?
          </h3>
          <p className="text-[#4C4A4A] text-[16px] leading-[1.4]">
           In order to ensure we are fully present, we will be having an “unplugged” ceremony. We kindly ask that you turn off/silence all phones during the ceremony. However, once the ceremony ends, feel free to take as many pictures as you like during cocktail hour and the reception.
          </p>
        </article>

        <hr className="h-px my-[24px] bg-gray-100 border-0"/>

        <article>
          <h3 className="font-playfair text-[16px] leading-[1.4] font-bold text-[#232323] mb-[6px]">
           Will there be an open bar?
          </h3>
          <p className="text-[#4C4A4A] text-[16px] leading-[1.4]">
           Yes, the drinks are on us and the hangover is on you. Please party accordingly!
          </p>
        </article>

      </div>

    </section>
  )
}