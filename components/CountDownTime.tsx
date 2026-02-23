"use client";

import { LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";

const CountdownTimer = () => {
  const targetDate = new Date("April 1, 2026 16:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState<{
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  } | null>(null); // null initially to show loader

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days.toString().padStart(2, "0"),
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Loader while waiting
  if (!timeLeft) {
    return (
      <div className="flex justify-center items-center h-[75px]">
        <LoaderCircle className="animate-spin"/>
      </div>
    );
  }

  return (
    <div className="text-center text-white/75">
      <div className="font-playfair text-[38px] font-medium flex justify-center gap-2">
        <span className="inline-block w-[50px] text-center">{timeLeft.days}</span>:
        <span className="inline-block w-[50px] text-center">{timeLeft.hours}</span>:
        <span className="inline-block w-[50px] text-center">{timeLeft.minutes}</span>:
        <span className="inline-block w-[50px] text-center">{timeLeft.seconds}</span>
      </div>
      <div className="flex justify-center gap-12 uppercase text-[12px]">
        <span>days</span>
        <span>hours</span>
        <span>mins</span>
        <span>secs</span>
      </div>
    </div>
  );
};

export default CountdownTimer;

