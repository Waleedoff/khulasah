import React, { useEffect, useState } from "react";

const teamNames = ["مصعب", "رزان", "امين", "مها"];

const TeamShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll logic to cycle through names
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === teamNames.length - 1 ? 0 : prevIndex + 1,
      );
    }, 2000); // Change name every 2 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div className="w-[80%] mx-auto flex items-center justify-between py-12">
      {/* Left Side: Introduction Box */}
      <div className="bg-gradient-to-b from-[#1C1C4D] to-[#24305E] text-white p-8 rounded-3xl w-[40%]">
        <h2 className="text-4xl font-bold mb-4">طيب مين فريقنا الرهيب ؟</h2>
        <p className="text-lg">
          الى الآن عدد فريقنا صغير ونطمح انه يبقى صغير لأننا نؤمن بأن الفريق
          الصغير يحقق طموح كبير
        </p>
      </div>

      {/* Right Side: Scrollable Team Names */}
      <div className="relative w-[57%] bg-[#E5E7F9] p-3 rounded-3xl flex items-center justify-center">
        <ul className="space-y-4 text-3xl font-bold text-gray-300">
          {teamNames.map((name, index) => (
            <li
              key={index}
              className={`${
                index === currentIndex ? "text-[#4285F4]" : ""
              } transition-all duration-500`}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeamShowcase;
