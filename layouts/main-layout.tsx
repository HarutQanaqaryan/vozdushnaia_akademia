import React, { useEffect, useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { useAppSelector } from "../redux/redux";

const MainLayout: React.FC = ({ children }) => {
  const { isOpenedModal } = useAppSelector(
    (state) => state.feedbackReducer
  );
  return (
    <div className={`main-wrapper ${isOpenedModal && "main-wrapper_opened_modal"}`}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
