import React from "react";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import { TopTitle, ContentLeftTitle } from "../Components/TopTitle";
import s from "./PhysicalScience.module.css";
import { useLocation } from "react-router-dom";
import SubjectsContent from "../Components/SubjectsContent";

TopTitle;

function PhysicalScience() {
  const Location = useLocation();

  const TopTitile = "Training Material - Physical Science";

  return (
    <>
      <Navbar />
      <TopTitle title={TopTitile} />
      <SubjectsContent />
      <Footer />
    </>
  );
}

export default PhysicalScience;
