import styles from "./Grades.module.css";
import arrow from "../Images/arrow.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Grades = ({
  gradeImg,
  gradeTitle,
  backgroundColor,
  linkGradeId,
  redirect,
  GradeOrTerms,

  currentTypeId,

  currentTermId,
  termNumber,

  currentGradeId,
  currentSubjectId,
  PropDocumentTitle,
  currentGradeNumber,

  handleTermScroll4,
  resetTermScrollState,
}) => {
  //term scroll
  let element = document.getElementById(handleTermScroll4);
  useEffect(() => {
    function scrollToId() {
      element == null ? null : element.scrollIntoView();
      // element == null ? null : resetTermScrollState("3331111111111111111111");
    }
    scrollToId();
  }, [handleTermScroll4]);

  return (
    <>
      {/* {console.log("handleTermScroll4", handleTermScroll4)} */}
      {/* <div className={styles.container}> */}
      <Link
        to={redirect}
        state={{
          gradeId: linkGradeId,
          gradeNumber: gradeTitle,
          currentTypeId: currentTypeId,

          currentTermId: currentTermId,

          currentGradeId: currentGradeId,
          currentSubjectId: currentSubjectId,
          PropDocumentTitle: PropDocumentTitle,
          currentGradeNumber: currentGradeNumber,
          termNumber: termNumber,
        }}
        className={styles.bottombox}
        style={{
          backgroundColor,
        }}
        id="TermScroll"
      >
        <img className={styles.bottomimgIcon} alt="" src={gradeImg} />
        <div className={styles.subbox}>
          <p className={styles.subtitle}>{gradeTitle}</p>
          <img className={styles.arrowIcon} alt="" src={arrow} />
        </div>
      </Link>
      {/* </div> */}
    </>
  );
};

export default Grades;
