import React from "react";
import { Link } from "react-router-dom";
import s from "./Filter.module.css";

export function Filter(props) {
  const filterList = [
    "Online Resources",
    "Other Various Sites",
    "Learner Activity Book",
    "Lesson Plans",
    "Management Documents",
    "Printables",
    "Teacher Resources",
  ];

  return (
    <>
      {/* {console.log(
        "props.resourseFilter",
        props.resourseFilter,
        "Object.entries(props.resourseFilter)",
        Object.entries(props.resourseFilter)
      )} */}
      <div className={s.container}>
        <p className={s.sideTitle}>Filter by</p>
        <div className={s.bigBox}>
          {props.resourseFilter == undefined
            ? null
            : Object.entries(props.resourseFilter).map((val) => (
                <button
                  onClick={() => props.handleFilterScroll(val[0].split("_")[1])}
                  className={s.filterBox}
                >
                  {val[0]
                    .split("_")[0]
                    .split("-")
                    .map((val) => val + " ")}
                </button>
              ))}
        </div>
        <button
          className={s.goToTerms}
          onClick={() => props.handleTermScroll("TermScroll")}
        >
          <div>Go To Terms</div>
          <div className={s.filterArrw}>
            <span class="material-icons filterArrow">east</span>
          </div>
        </button>
      </div>
    </>
  );
}
