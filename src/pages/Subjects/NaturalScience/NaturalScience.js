import React from "react";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import { TopTitle, ContentLeftTitle } from "../Components/TopTitle";
import s from "./NaturalScience.module.css";
import { useLocation } from "react-router-dom";
import SubjectsContent from "../Components/SubjectsContent";
SubjectsContent;

TopTitle;

function NaturalScience() {
  const Location = useLocation();

  const TopTitile = "Training Material - Natural Science";

  return (
    <>
      <Navbar />
      <TopTitle title={TopTitile} />
      <SubjectsContent />
      <Footer />
    </>
  );
}

export default NaturalScience;
