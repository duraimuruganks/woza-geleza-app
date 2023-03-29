import React from "react";
import s from "./TopTitle.module.css";

export function TopTitle(props) {
  document.title =
    props.TrainingMaterialCondition == true
      ? props.Subjecttitle + " | Woza Geleza"
      : props.GradeTitle +
        " - " +
        props.Subjecttitle +
        " - " +
        props.TermTitle +
        " | Woza Geleza";
  return (
    <>
      <h4 className={s.title}>
        {props.TrainingMaterialCondition == true
          ? props.Subjecttitle
          : props.GradeTitle +
            " - " +
            props.Subjecttitle +
            " - " +
            props.TermTitle}
        {/* {  props.GradeTitle} - 
        {props.Subjecttitle} -
        { props.TermTitle} */}
      </h4>
    </>
  );
}
