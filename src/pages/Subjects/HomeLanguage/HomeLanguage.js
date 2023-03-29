import React from "react";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import { TopTitle, ContentLeftTitle } from "../Components/TopTitle";
import s from "./HomeLanguage.module.css";
import { useLocation } from "react-router-dom";
import SubjectsContent from "../Components/SubjectsContent";

TopTitle;

function HomeLanguage() {
  const Location = useLocation();

  const TopTitile = "Training Material - Home Language";

  return (
    <>
      <Navbar />
      <TopTitle title={TopTitile} />
      <SubjectsContent />
      <Footer />
    </>
  );
}

export default HomeLanguage;
