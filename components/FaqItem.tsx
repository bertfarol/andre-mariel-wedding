"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Props = {
  question: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
};

export function FaqItem({ question, children, defaultOpen = false }: Props) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <article>
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left group"
        aria-expanded={open}
      >        
        <div className="flex justify-between items-start gap-4">
          <h3 className=" text-[16px] lg:text-[17px] leading-normal font-bold text-[#232323]">
            {question}
          </h3>

          <ChevronDown
            className={`mt-1 h-4 w-4 shrink-0 transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>

      {/* Animated Content */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden text-[#4C4A4A] text-[16px] lg:text-[17px] leading-[1.4]">
          {children}
        </div>
      </div>
    </article>
  );
}
