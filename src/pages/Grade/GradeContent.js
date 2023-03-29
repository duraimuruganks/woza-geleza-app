import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import GradeSubjects from "./components/GradeSubjects";
import Grades from "./components/Grades";
import styles from "./GradeContent.module.css";
import axios from "axios";

import grades1To3 from "./Data/gradesSub.json";
import gradeSubject from "./Data/gradesSub4To12.json";
import gradeBottom from "./Data/grades.json";
import { baseUrl } from "../UrlList";

const GradeContent = () => {
  // const [currentGradeId, setcurrentGradeId] = useState(null);
  const [grade, setgrade] = useState(null);
  const [subject, setsubject] = useState();
  const location = useLocation();
  let { gradeId, gradeNumber, currentTypeId } = location.state;

  // setcurrentGradeId(gradeId);

  let currentGradeId = gradeId;
  let currentGradeNumber = gradeNumber;
  //fetch api
  const gradeUrl = baseUrl + "grade/list/";
  const SubjectUrl = baseUrl + "grade/subject/list/";

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    const fetchData = async () => {
      await axios.get(gradeUrl + currentGradeId).then((res) => {
        setgrade(res);
      });
      await axios.get(SubjectUrl + currentGradeId).then((res) => {
        setsubject(res);
      });
    };
    fetchData();
    document.title = gradeNumber ? gradeNumber + " " + "| Woza Geleza" : "qqqq";
  }, [currentGradeId]);

  return (
    <>
      <Navbar />

      {/* {grade == null
        ? null
        : subject == null
        ? null
        : console.log(
            "gradeId",
            gradeId,
            "gradeNumber",
            gradeNumber,
            "grade",
            grade.data.data,
            "subject",
            subject.data.data,
            "currentTypeId",
            currentTypeId
          )} */}

      <div className={styles.gradecontent}>
        <div className={styles.gradebox}>
          <h3 className={styles.title}>{gradeNumber} - Subject</h3>
          <div className={styles.container1}>
            {subject == undefined
              ? null
              : subject.data.data.map((val, index) => (
                  <GradeSubjects
                    // key={val.subjectID}
                    subTitle={val.subjectName}
                    subjectImage={gradeSubject[index].subImage}
                    background={gradeSubject[index].background}
                    backgroundImage={gradeSubject[index].backgroundImage}
                    // link={gradeSubject[index].link}
                    reDirect="/Subject"
                    // "/Grade"
                    currentTypeId={currentTypeId}
                    currentGradeId={currentGradeId}
                    currentGradeNumber={currentGradeNumber}
                    currentSubjectId={val.subjectID}
                  />
                ))}
          </div>
          <div className={styles.divider} />
          <div className={styles.container2}>
            {grade == null
              ? null
              : grade.data.data == undefined
              ? null
              : grade.data.data.map((val, index) => (
                  // <button
                  //   key={val.gradeID}
                  //   onClick={() => (currentGradeId = val.gradeID)}
                  // >
                  <Grades
                    gradeTitle={val.gradeName}
                    linkGradeId={val.gradeID}
                    gradeImg={gradeBottom[index].gradeImg}
                    backgroundColor={gradeBottom[index].backgroundColor}
                    redirect="/Grade"
                    currentTypeId={currentTypeId}
                  />
                  // </button>
                ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GradeContent;
