import React, { useState, useEffect } from "react";
import s from "./SubjectsContent.module.css";
import { OnlineResourse, OtherVariousSites } from "./OnlineResourse";

import { SideTitle } from "./SideTitle";
import { LearnerActivity } from "./LearnerActivity";
import { Filter } from "./Filter";

function SubjectsContent(props) {
  const [handleFilterScroll2, sethandleFilterScroll2] = useState();

  let fromSubjectContent = true;

  //term Scroll
  function handleTermScroll1(parameter) {
    props.handleTermScroll2(parameter);
  }

  // function resetHandleFilter() {
  //   sethandleFilterScroll2("");
  // }
  //filter Scroll
  function handleFilterScroll1(parameter) {
    sethandleFilterScroll2(parameter);
    setTimeout(() => {
      sethandleFilterScroll2("RESET");
    }, 1000);
  }
  //resetTerm Scroll State

  // useEffect(() => {
  //   function resetTermScrollState() {
  //     props.resetTermScrollState == undefined
  //       ? null
  //       : sethandleFilterScroll2(props.resetTermScrollState);
  //   }
  //   resetTermScrollState();
  // }, [props.resetTermScrollState]);

  const sideTitleContents = [
    {
      sideTitleClor: "#19EBDC",
      sideTitle: "ONLINE RESOURCES",
    },
    {
      sideTitleClor: "#FBB055",
      sideTitle: "OTHER VARIOUS SITES",
    },
    {
      sideTitleClor: "#80B1FF",
      sideTitle: "LEARNER ACTIVITY BOOK",
    },
    {
      sideTitleClor: "#A069B8",
      sideTitle: "LESSON PLANS",
    },
    {
      sideTitleClor: "#B86986",
      sideTitle: "MANAGEMENT DOCUMENTS",
    },
    {
      sideTitleClor: "#8769B8",
      sideTitle: "PRINTABLES",
    },
    {
      sideTitleClor: "#69B0B8",
      sideTitle: "TEACHER RESOURCES",
    },
  ];

  return (
    <>
      {/* {console.log(
        "handleFilterScroll2handleFilterScroll2",
        handleFilterScroll2
      )} */}

      {props.filterCondition == true ? null : (
        <Filter
          resourseFilter={
            props.resourse == undefined ? null : props.resourse.result
          }
          handleTermScroll={handleTermScroll1}
          handleFilterScroll={handleFilterScroll1}
        />
      )}
      <div className={s.container}>
        {props.resourse == undefined
          ? null
          : Object.entries(props.resourse.result).map((val, index) => (
              <div className={s.list}>
                <div className={s.left}>
                  <SideTitle
                    sideTitleColor={sideTitleContents[index].sideTitleClor}
                    sideTitle={val[0]}
                    handleFilterScroll3={handleFilterScroll2}
                  />
                  {/* {console.log("currentresourse Id", val[1])} */}
                </div>
                <div className={s.right}>
                  <OnlineResourse
                    content={val}
                    reqBody={props.reqBody}
                    // currentResourseId={val[0].split("_")[1]}
                    // currentResourseIdName={val[0].split("_")[0]}
                    fromSubjectContent={fromSubjectContent}
                  />
                </div>
              </div>
            ))}

        {/* <div className={s.list}>
          <div className={s.left}>
            <SideTitle
              sideTitleColor={sideTitleContents[1].sideTitleClor}
              sideTitle={sideTitleContents[1].sideTitle}
            />
          </div>
          <div className={s.right}>
            <OtherVariousSites />
          </div>
        </div>

        <div className={s.list}>
          <div className={s.left}>
            <SideTitle
              sideTitleColor={sideTitleContents[2].sideTitleClor}
              sideTitle={sideTitleContents[2].sideTitle}
            />
          </div>
          <div className={s.right}>
            <LearnerActivity learnerActivity={true} />
          </div>
        </div>

        <div className={s.list}>
          <div className={s.left}>
            <SideTitle
              sideTitleColor={sideTitleContents[3].sideTitleClor}
              sideTitle={sideTitleContents[3].sideTitle}
            />
          </div>
          <div className={s.right}>
            <LearnerActivity lessonsPlan={true} />
          </div>
        </div>
        <div className={s.list}>
          <div className={s.left}>
            <SideTitle
              sideTitleColor={sideTitleContents[4].sideTitleClor}
              sideTitle={sideTitleContents[4].sideTitle}
            />
          </div>
          <div className={s.right}>
            <LearnerActivity managementDocuments={true} />
          </div>
        </div>
        <div className={s.list}>
          <div className={s.left}>
            <SideTitle
              sideTitleColor={sideTitleContents[5].sideTitleClor}
              sideTitle={sideTitleContents[5].sideTitle}
            />
          </div>
          <div className={s.right}>
            <LearnerActivity printables={true} />
          </div>
        </div>
        <div className={s.list}>
          <div className={s.left}>
            <SideTitle
              sideTitleColor={sideTitleContents[6].sideTitleClor}
              sideTitle={sideTitleContents[6].sideTitle}
            />
          </div>
          <div className={s.right}>
            <LearnerActivity teacherResourses={true} />
          </div>
        </div> */}
        <hr />
      </div>
    </>
  );
}

export default SubjectsContent;
