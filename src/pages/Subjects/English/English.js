import React from "react";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import { TopTitle, ContentLeftTitle } from "../Components/TopTitle";
import s from "./English.module.css";
import { useLocation } from "react-router-dom";
import SubjectsContent from "../Components/SubjectsContent";

TopTitle;

function English() {
  const Location = useLocation();

  const TopTitile = "Training Material - English";

  return (
    <>
      <Navbar />
      <TopTitle title={TopTitile} />
      <SubjectsContent />
      <Footer />
    </>
  );
}

export default English;
