import React, { useEffect, useRef, useState } from "react";
import { FaPencilAlt, FaThumbsUp } from "react-icons/fa";

const CustomSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Function to randomize the animation class
  const getRandomAnimation = () => {
    const animations = [
      "drop-in-left",
      "drop-in-right",
      "drop-in-up",
      "drop-in-down",
    ];

    return animations[Math.floor(Math.random() * animations.length)];
  };

  // Function to randomize the delay
  const getRandomDelay = (baseDelay: number) => {
    return `delay-[${baseDelay + Math.floor(Math.random() * 200)}ms]`; // Random delay between base and +200ms
  };

  return (
    <div
      ref={sectionRef}
      className={`w-[90%] md:w-[80%] mx-auto bg-white py-6 px-4 md:py-12 md:px-8 mt-9 mb-9 flex flex-col items-center justify-center rounded-xl shadow-lg ${
        isVisible ? "animate-slide-in" : ""
      }`}
    >
      {/* Upper Section */}
      <div
        className={`flex items-center justify-center mb-4 md:mb-6 space-x-2 text-gray-400 text-xs md:text-sm`}
      >
        <span className="bg-gray-100 px-2 py-1 md:px-3 md:py-1 rounded-full">
          خلاصة • تحديثات مستمرة
        </span>
      </div>

      {/* Main Heading */}
      <div className={`flex items-center justify-center text-center mb-6 px-2`}>
        <FaThumbsUp className="text-2xl md:text-4xl text-[#FF5E6C] ml-2 md:ml-3" />
        <h1 className="text-2xl md:text-4xl font-bold text-[#6A4BFF] leading-tight md:leading-normal">
          ليش تختار خلاصة؟{" "}
          <span className="text-[#4285F4]">لأننا نلخص لك أهم التحديثات</span>!
        </h1>
        <FaPencilAlt className="text-2xl md:text-4xl text-[#FFBB00] mr-2 md:mr-3" />
      </div>

      {/* Horizontal Divider */}
      <div className={`w-full border-b border-gray-200 my-2 md:my-4`}></div>

      {/* Idea Bubbles with drop-in animation */}
      <div
        className={`flex flex-wrap justify-center mt-4 md:mt-6 space-x-2 space-y-4 max-w-4xl`}
      >
        <span
          className={`bg-purple-200 text-purple-800 px-3 py-2 md:px-4 md:py-2 rounded-full ${isVisible ? `animate-${getRandomAnimation()} ${getRandomDelay(100)}` : ""}`}
        >
          نتابع لك أهم التحديثات في مجالك
        </span>
        <span
          className={`bg-green-200 text-green-800 px-3 py-2 md:px-4 md:py-2 rounded-full ${isVisible ? `animate-${getRandomAnimation()} ${getRandomDelay(200)}` : ""}`}
        >
          نوفر لك ملخصات دقيقة وسريعة
        </span>
        <span
          className={`bg-red-200 text-red-800 px-3 py-2 md:px-4 md:py-2 rounded-full ${isVisible ? `animate-${getRandomAnimation()} ${getRandomDelay(300)}` : ""}`}
        >
          كل المعلومات اللي تحتاجها في مكان واحد
        </span>
        <span
          className={`bg-blue-200 text-blue-800 px-3 py-2 md:px-4 md:py-2 rounded-full ${isVisible ? `animate-${getRandomAnimation()} ${getRandomDelay(400)}` : ""}`}
        >
          تحديثات مستمرة وفورية
        </span>
        <span
          className={`bg-pink-200 text-pink-800 px-3 py-2 md:px-4 md:py-2 rounded-full ${isVisible ? `animate-${getRandomAnimation()} ${getRandomDelay(500)}` : ""}`}
        >
          ركز في عملك واحنا نهتم بالتحديثات
        </span>
      </div>
    </div>
  );
};

export default CustomSection;
