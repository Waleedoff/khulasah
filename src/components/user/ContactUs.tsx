import React from "react";

const ContactUsSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[300px] bg-gradient-to-b from-white via-gray-100 to-gray-200 text-center py-8 rounded-lg">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-800 mb-6">تواصل معنا</h2>

      {/* Button Container */}
      <div className="flex space-x-4">
        {/* Button 1 */}
        <button className="bg-[#1ABC9C] hover:bg-[#16a085] text-white font-bold py-3 px-6 rounded-lg transition duration-300">
          إرسال رسالة
        </button>

        {/* Button 2 */}
        <button className="bg-[#2ECC71] hover:bg-[#27ae60] text-white font-bold py-3 px-6 rounded-lg transition duration-300">
          استفسار عام
        </button>
      </div>
    </div>
  );
};

export default ContactUsSection;
