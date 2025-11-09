'use client';
import { usePathname } from 'next/navigation';
import { MoveLeft } from 'lucide-react';
import Link from "next/link";

export default function SaveTheDateLayout({ children }: {children: React.ReactNode;}) {
  const pathname = usePathname();
  const shouldHideHeader = pathname === '/save-the-date'; // this hides section parent page

  return (
    <main>
      {!shouldHideHeader && (  
        <nav className="px-[20px] h-[72px] flex items-center justify-items-start max-w-[768px] mx-auto">
          <Link href='/save-the-date' className='flex items-center'>
            <div className='flex gap-[7px] group cursor-pointer'>
              <span>
                <MoveLeft className='text-gray-700 group-hover:text-[#232323] duration-300' strokeWidth='1px'/>
              </span>
              <span className="font-playfair text-[15px] text-gray-700 group-hover:text-[#232323] duration-300">
                Back
              </span>
            </div>
          </Link>
        </nav>
      )}

      {children}

      {!shouldHideHeader && (  
        <nav className="px-[20px] h-[60px] flex items-center justify-center mb-[20px]">
          <Link href='/save-the-date' className='flex items-center'>
            <div className='flex gap-[7px] cursor-pointer group'>
              <span>
                <MoveLeft className='text-gray-700 group-hover:text-[#232323] duration-300' strokeWidth='1px'/>
              </span>
              <span className="font-playfair text-[15px] text-gray-700 group-hover:text-[#232323] duration-300">
                Back
              </span>
            </div>
          </Link>
        </nav>
      )}


      {/* Save the Date */}     
      <section className="py-[16px] flex items-center justify-center gap-8 bg-[#0D0D0D] text-white">
        <span className="font-imperial text-[34px]">Save the Date</span>
        <span className="font-playfair text-[20px] uppercase">April 10, 2026</span>
      </section>
    </main>
  );
}
