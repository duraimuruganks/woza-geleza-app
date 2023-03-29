import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Grades from "../Grade/components/Grades";
import gradeBottom from "../Grade/Data/grades.json";
import styles from "./Modules.module.css";
import { useLocation } from "react-router-dom";

function Modules() {
  const location = useLocation();
  const { prop1 } = location.state;

  function bottomNumbers(number) {
    if (number == 13) {
      return (number = 1);
    }
    if (number == 14) {
      return (number = 2);
    }
    if (number == 15) {
      return (number = 3);
    } else return number;
  }
  return (
    <>
      <Navbar />
      <div className={styles.container2}>
        {gradeBottom.map((item) => (
          <Grades
            gradeImg={item.gradeImg}
            gradeTitle={bottomNumbers(item.gradeTitle + prop1)}
            backgroundColor={item.backgroundColor}
            GradeOrTerms="Term"
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Modules;
