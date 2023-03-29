import React from "react";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import { TopTitle } from "../Components/TopTitle";
import s from "./Mathematics.module.css";
import { useLocation } from "react-router-dom";
import SubjectsContent from "../Components/SubjectsContent";

TopTitle;

function Mathematics() {
  const Location = useLocation();

  const TopTitile = "Mathematics";

  return (
    <>
      <Navbar />
      <TopTitle title={TopTitile} />
      <SubjectsContent />
      <Footer />
    </>
  );
}

export default Mathematics;
