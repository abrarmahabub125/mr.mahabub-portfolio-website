"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { cn } from "../../lib/utils";

interface WordLoaderProps {
  words?: string[];
  className?: string;
}

const WordLoader: React.FC<WordLoaderProps> = ({
  words = [
    "branding",
    "design",
    "development",
    "ecommerce",
    "mobile apps",
    "packaging",
  ],
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        repeat: -1,
      });

      const wordDuration = 2.4;

      words.forEach((_, index) => {
        const startTime = index * wordDuration;

        // enter
        tl.fromTo(
          `.word-${index} .char`,
          {
            opacity: 0,
            y: 10,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.05,
            ease: "power3.out",
          },
          startTime,
        );

        // exit
        tl.to(
          `.word-${index} .char`,
          {
            opacity: 0,
            y: -8,
            duration: 0.45,
            stagger: 0.04,
            ease: "power3.inOut",
          },
          startTime + 1.5,
        );
      });

      return () => {
        tl.kill();
      };
    },
    {
      scope: containerRef,
      dependencies: [words],
    },
  );

  return (
    <div
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-offset="0"
      ref={containerRef}
      className={cn("flex w-full flex-col gap-y-6", className)}
    >
      <div className="relative flex h-12 items-center justify-center overflow-hidden">
        {words.map((word, index) => (
          <span
            key={index}
            className={`word-${index} absolute flex gap-x-1 text-base font-medium tracking-wide uppercase md:text-lg lg:text-xl`}
          >
            {word.split("").map((char, charIndex) => (
              <span key={charIndex} className="char opacity-0">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
};

export default WordLoader;
