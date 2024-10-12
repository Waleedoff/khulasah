import React from "react";
import Header from "src/components/user/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F6F5FC]">
      {/* Header is static at the top */}
      <Header />
      {/* Main content */}
      <main className="flex-grow">{children}</main>
      {/* You can add a footer here if necessary */}
    </div>
  );
};

export default Layout;
