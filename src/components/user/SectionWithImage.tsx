import React, { useEffect, useRef, useState } from "react";

interface SectionWithImageProps {
  images: string[];
}

const SectionWithImage: React.FC<SectionWithImageProps> = ({ images }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Array of section titles and descriptions
  const sections = [
    {
      title: "محرك خلاصة للمواضيع",
      description:
        "احصل على خلاصة دقيقة وشاملة لأحدث المواضيع في مختلف المجالات باستخدام تقنيات الذكاء الاصطناعي. وفر الوقت والجهد في متابعة أحدث التطورات.",
    },
    {
      title: "التحديد والإشارات",
      description:
        "حدد النقاط المهمة وأضف إشارات إلى المواضيع التي تحتاج لمراجعة دقيقة. يمكنك تنظيم المعلومات التي تم تلخيصها لسهولة الوصول والاستخدام.",
    },
    {
      title: "التعاون الجماعي",
      description:
        "اعمل مع فريقك على تلخيص المواضيع بشكل مشترك في مساحات عمل مخصصة. شارك الأفكار والملاحظات وتواصل في الوقت الحقيقي لزيادة الإنتاجية.",
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
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = e.currentTarget.scrollTop;
    const maxScroll =
      e.currentTarget.scrollHeight - e.currentTarget.clientHeight;
    const scrollRatio = scrollTop / maxScroll;
    const newSection = Math.min(
      sections.length - 1,
      Math.floor(scrollRatio * sections.length),
    );
    setCurrentSection(newSection);
  };

  return (
    <div className="">
      {/* Centered heading */}
      <div ref={sectionRef} className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1f1f56] mb-4">
          مايميز <span className="underline text-[#0C0AFF]">خلاصة ؟</span>
        </h2>
        <p className="text-base md:text-xl text-gray-600">
          مساعدك التعليمي باستخدام تقنيات الذكاء الاصطناعي
        </p>
      </div>

      {/* Main Section */}
      <section className="flex flex-col md:flex-row items-center justify-center py-10 px-4 md:py-20 md:px-10 bg-white w-[90%] md:w-[80%] mx-auto rounded-xl shadow-lg">
        {/* Content Wrapper */}
        <div className="flex flex-col md:flex-row justify-between items-start w-full max-w-6xl">
          {/* Right side: Text content */}
          <div className="w-full md:w-1/2 text-right md:pr-10 mb-8 md:mb-0">
            <div
              className="h-64 md:h-96 overflow-auto pr-4"
              onScroll={handleScroll}
              style={{ scrollSnapType: "y mandatory" }}
            >
              {sections.map((section, index) => (
                <div
                  key={index}
                  className={`mb-8 ${
                    index === currentSection
                      ? "font-bold text-black"
                      : "text-gray-400"
                  }`}
                  style={{ scrollSnapAlign: "start" }}
                >
                  <h3 className="text-lg md:text-2xl mb-2">{section.title}</h3>
                  <p className="text-sm md:text-base">{section.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Left side: Image container */}
          <div className="w-full md:w-1/2 relative md:ml-10">
            <div className="relative w-full h-64 md:h-96 rounded-xl shadow-lg overflow-auto">
              <img
                src={images[currentSection]} // Image changes dynamically
                alt="Section Image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionWithImage;
