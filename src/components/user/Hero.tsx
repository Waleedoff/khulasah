import React, { useEffect, useState } from "react"; // React should come first
import { FaStar } from "react-icons/fa"; // External library imports come after React
const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Start animation when the component mounts (window opens)
    setTimeout(() => {
      setIsVisible(true);
    }, 100); // Delay to trigger animation after a short pause
  }, []);

  return (
    <div className="h-screen flex flex-col justify-start pt-14 items-center bg-[#F6F5FC]">
      <section
        className={`text-center py-20 transition-all duration-1000 ease-out transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Star Rating */}
        <div className="flex justify-center gap-2 items-center mb-1">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className="text-yellow-400  mx-1" />
          ))}
        </div>
        <p className="text-gray-700 font-semibold text-xl mb-6">
          50,000+ مسار في خلاصة
        </p>

        {/* Main Heading */}
        <h1
          className="text-6xl font-bold mb-12 leading-tight flex justify-start "
          style={{ fontFamily: "Lama Sans", color: "#333333" }}
        >
          خلاصة
          <br /> أقرأ أقل، تعلم أكثر!
        </h1>

        {/* Button */}
        <button
          className="bg-[#0C0AFF] text-white px-10 py-5 text-2xl font-bold rounded-full transition duration-300"
          style={{ boxShadow: "0 4px 6px rgba(4, 3, 76, 0.5)" }}
        >
          جرّب خلاصة الآن
        </button>
      </section>
    </div>
  );
};

export default Hero;
