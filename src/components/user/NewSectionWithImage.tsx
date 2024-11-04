import React, { useEffect, useRef } from "react";

const SectionWithImage = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Array of section titles and descriptions
  const sections = [
    {
      title: "حدد مجالك في العمل أو اختر مجموعة من مجالات اهتمامك",
    },
    {
      title: "يوفر لك خلاصة ملخّصات مخصصة حول ما تبحث عنه",
    },
    {
      title: "ارفق الملف الذي تريد تلخيصه",
    },
    {
      title: "يوفر لك خلاصة ملخصًا باللغتين، وبإمكانك أيضًا الاستماع له!",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      },
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

  // Update the section based on scroll

  return (
    <div className="">
      {/* Centered heading */}
      <div ref={sectionRef} className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1f1f56] mb-4">
          <span className="underline text-[#0C0AFF]">خلاصة </span>
        </h2>
        <p className="text-base md:text-xl text-gray-600">
          يجلب لك المعرفة التي تريد، وقتما تريد
        </p>
      </div>

      {/* Main Section */}
      <section className="flex flex-col md:flex-row items-center justify-center py-10 px-4 md:py-20 md:px-10 bg-white w-[90%] md:w-[80%] mx-auto rounded-xl shadow-lg">
        {/* Content Wrapper */}
        <div className="flex flex-col md:flex-row justify-between items-start w-full max-w-6xl">
          {/* Right side: Text content */}
          <div className="w-full md:w-1/2 text-right md:pr-10 mb-8 md:mb-0">
            <ul
              className="h-64 md:h-96 overflow-auto pr-4"
              style={{ scrollSnapType: "y mandatory" }}
            >
              {sections.map((section, index) => (
                <li
                  key={index}
                  className={`mb-8 font-bold text-black`}
                  style={{ scrollSnapAlign: "start" }}
                >
                  <h3 className="text-lg md:text-2xl mb-2">{section.title}</h3>
                </li>
              ))}
            </ul>
          </div>

          {/* Left side: Image container */}
          <div className="w-full md:w-1/2 relative md:ml-10">
            <div className="relative w-full grid place-content-center h-64 md:h-96 overflow-auto">
              <img
                src="assets/images/khul.png" // Image changes dynamically
                alt="Section Image"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionWithImage;
