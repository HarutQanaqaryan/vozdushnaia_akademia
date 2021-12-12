import React, { useEffect, useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const MainLayout: React.FC = ({ children }) => {

  return (
    <div className="main-wrapper">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
