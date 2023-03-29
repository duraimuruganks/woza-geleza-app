import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Grades from "../Grade/components/Grades";
import { baseUrl } from "../UrlList";
import SubjectsContent from "./Components/SubjectsContent";
import { TopTitle } from "./Components/TopTitle";
import s from "./VendorName.module.css";

export default function VendorName() {
  const [Term, setTerm] = useState();
  const [resourse, setresourse] = useState();
  const [handleTermScrollState, sethandleTermScrollState] = useState();
  const [resetTermScrollState, setresetTermScrollState] = useState();
  // const [currentTerm2, setcurrentTerm] = useState();
  // const [currentTermIdState, setcurrentTermIdState] = useState();
  // const [currentTerm, setcurrentTerm] = useState();
  // let PropDocumentTitle;
  const location = useLocation();
  // location.state == null
  //   ? null
  //   : (PropDocumentTitle = location.state.PropDocumentTitle);
  let {
    PropDocumentTitle,
    trainingMaterial,
    currentTypeId,
    currentGradeId,
    currentGradeNumber,
    currentSubjectId,

    currentTermId,
    termNumber,
  } = location.state;
  let fromTrainingMaterial = trainingMaterial;
  let docTitle = PropDocumentTitle;
  const TopTitile = docTitle;
  // document.title = docTitle + " | Woza Geleza";
  let currentTerm;
  let currentTerm2;

  // currentTermId == undefined ? null : setcurrentTermIdState(currentTermId);

  const TermUrl = baseUrl + "term/list";
  const resourceList = baseUrl + "grade/subject/term/resource/list";
  useEffect(() => {
    const fetchData = async function fetchData() {
      await axios.get(TermUrl).then((res) => {
        setTerm(res);
      });

      // setcurrentTerm(Term.data.data[0]);
    };
    fetchData();
  }, []);
  Term == undefined
    ? null
    : currentTermId == undefined
    ? (currentTerm = Term.data.data[0])
    : (currentTerm = Term.data.data[termNumber]);

  let reqBody =
    Term == undefined
      ? null
      : currentTermId == undefined
      ? {
          typeID: currentTypeId,
          gradeID: currentGradeId,
          subjectID: currentSubjectId,
          termID: currentTerm.termID,
        }
      : {
          typeID: currentTypeId,
          gradeID: currentGradeId,
          subjectID: currentSubjectId,
          termID: currentTermId,
        };

  useEffect(() => {
    const fetchData = async (url) => {
      // console.log("url", reqBody);
      Term == undefined
        ? null
        : await axios.post(url, reqBody).then((res) => {
            setresourse(res);
          });
    };

    fetchData(resourceList);
    scrollTo({ top: 0, behavior: "smooth" });
  }, [Term, currentTermId]);

  // Term == undefined ? null : setcurrentTerm(Term.data.data[0]);

  //Term Scroll
  function handleTermScroll3(parameter) {
    sethandleTermScrollState(parameter);
    setTimeout(() => {
      sethandleTermScrollState("RESET");
    }, 1000);
  }
  //reset Term scroll state
  // function resetTermScrollState1(parameter) {
  //   setresetTermScrollState(parameter);
  //   console.log("resetTermScrollState", "hhggaaghh", parameter);
  // }

  const gradeBottom = [
    {
      gradeImg: "./Grades/book.svg",
      backgroundColor: "#80B1FF",
    },
    {
      gradeImg: "./Grades/beaker.svg",
      backgroundColor: "#F2629B",
    },
    {
      gradeImg: "./Grades/target.svg",
      backgroundColor: "#83E4DD",
    },
  ];

  return (
    <>
      {/* {console.log("currentTermId", currentTermId)} */}
      {/* {Term == undefined ? null : console.log("Term", Term.data.data)} */}
      {/* {console.log(
        "docTitle",
        docTitle,
        "PropDocumentTitle",
        PropDocumentTitle,
        "trainingMaterial",
        trainingMaterial,
        "currentTypeId",
        currentTypeId,
        "currentGradeId",
        currentGradeId,
        "currentGradeNumber",
        currentGradeNumber,
        "currentSubjectId",
        currentSubjectId
      )}
      {console.log("currentTerm", currentTerm)}

      {resourse == undefined
        ? null
        : console.log("resourse", resourse.data.data)} */}

      <Navbar />
      {currentTerm == undefined ? null : resourse == undefined ? null : (
        <div>
          <TopTitle
            Subjecttitle={PropDocumentTitle}
            GradeTitle={currentGradeNumber}
            TermTitle={currentTerm.termName}
            TrainingMaterialCondition={fromTrainingMaterial}
          />
          <SubjectsContent
            filterCondition={fromTrainingMaterial}
            resourse={resourse.data.data}
            reqBody={reqBody}
            handleTermScroll2={handleTermScroll3}
            // resetTermScrollState={resetTermScrollState}
          />
          {fromTrainingMaterial == true ? null : (
            <div className={s.container}>
              <div className={s.container2}>
                {Term == undefined
                  ? null
                  : Term.data.data.map((val, index) => (
                      <Grades
                        gradeTitle={val.termName}
                        linkGradeId={val.termID}
                        gradeImg={gradeBottom[index].gradeImg}
                        backgroundColor={gradeBottom[index].backgroundColor}
                        redirect="/Subject"
                        currentTermId={val.termID}
                        termNumber={index}
                        currentTypeId={currentTypeId}
                        currentGradeId={currentGradeId}
                        currentSubjectId={currentSubjectId}
                        PropDocumentTitle={PropDocumentTitle}
                        currentGradeNumber={currentGradeNumber}
                        handleTermScroll4={handleTermScrollState}
                        // resetTermScrollState={resetTermScrollState1}
                      />
                    ))}
              </div>
            </div>
          )}
        </div>
      )}
      <Footer />
    </>
  );
}
