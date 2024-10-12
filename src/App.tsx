import React from "react";

// eslint-disable-next-line no-console
import CustomSection from "./components/user/CustomeSection";
// import ContactUs from './components/user/ContactUs';
import Footer from "./components/user/footer";
import Hero from "./components/user/Hero";
import SectionWithImage from "./components/user/SectionWithImage";
// import TeamShowcase from './components/user/TeamShowcase';
// import PricingPlans from './containers/user/PricingContainer';
import Layout from "./pages/user/Layout";

const App: React.FC = () => {
  const images = [
    "assets/images/khul.jpg", // Image for "محرك بحث قانوني"
    "assets/images/logo.png", // Image for "التحديد والملاحظات"
    "assets/images/khul.jpg", // Image for "مساحات العمل الجماعية"
  ];

  return (
    <Layout>
      {/* Hero section passed as a child */}
      <Hero />
      {/* You can add more sections here */}
      <SectionWithImage images={images} />
      <CustomSection />
      {/* <TeamShowcase/> */}
      {/* <PricingPlans/> */}
      {/* <ContactUs/> */}

      <Footer />
    </Layout>
  );
};

export default App;
