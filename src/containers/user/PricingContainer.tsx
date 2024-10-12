import React from "react";
import PricingCard from "src/components/user/PricingCard";
const PricingPlans: React.FC = () => {
  return (
    <div className="w-[80%] mx-auto py-12">
      <h1 className="text-center text-4xl font-bold mb-8">
        باقات للأفراد والشركات
      </h1>
      <div className="flex justify-center space-x-8">
        {/* Plan 1 */}
        <PricingCard
          title="الباقة الاساسية"
          description="الباقة الأساسية توفر جميع ما تحتاجه الباحث بإمكانيات اعلى وحدود تصفح اعلى."
          price={149}
          currency="ريال"
          period="شهرياً"
          features={[
            "تصفح X غير محدود",
            'استخدام X غير محدود "اسأل خلاصة"',
            "عدد مساحات العمل 3",
          ]}
          buttonLabel="اشترك"
        />

        {/* Highlighted Plan */}
        <PricingCard
          title="الباقة المميزة"
          description="الباقة المميزة توفر لك العمل بحلول أرشيفية واستخدام غير محدود لمميزات خلاصة."
          price={199}
          currency="ريال"
          period="شهرياً"
          features={[
            "تصفح X غير محدود",
            'استخدام X غير محدود "اسأل خلاصة"',
            "عدد مساحات العمل 15",
          ]}
          buttonLabel="اشترك"
          isHighlighted={true}
        />

        {/* Plan 3 */}
        <PricingCard
          title="الطلاب"
          description="خطة تناسب الطلاب للجامعات. توفر استخدام محدود."
          price={79}
          currency="ريال"
          period="شهرياً"
          features={[
            "تصفح محدود",
            'استخدام محدود "اسأل خلاصة"',
            "عدد مساحات العمل 0",
          ]}
          buttonLabel="اشترك"
        />
      </div>
    </div>
  );
};

export default PricingPlans;
