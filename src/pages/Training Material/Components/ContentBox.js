import React from "react";
import s from "./ContentBox.module.css";
import { Link } from "react-router-dom";

function ContentBox(props) {
  // const PropDocumentTitle = "Vendoe Name";
  return (
    <>
      <div className={s.container}>
        <Link
          to={props.items == undefined ? null : "/ViewAll"}
          state={{
            currentResourseName: props.current.vendorName,
            trainingMaterial: true,
            currentResourseId2: props.current.vendorID,
            reqBody: {},

            // currentTypeId: props.currentTypeId,
            // currentGradeId: props.currentGradeId,
            // currentSubjectId: props.currentSubjectId,
            // currentGradeNumber: props.currentGradeNumber,

            // title: props.items.navigateLink,
            // from: "Training Material",
          }}
          className={s.box}
        >
          {props.current == undefined ? null : props.current.logoURL ==
            null ? null : (
            <img src={props.current.logoURL} alt="" className={s.img} />
          )}
          {props.current == undefined ? null : (
            <p className={s.text}>{props.current.vendorName}</p>
          )}
          {/* {props.items == undefined ? null : (
            <div>
              <img src={props.items} alt="" className={s.img} />
              <p className={s.text}>test</p>
            </div>
          )} */}
        </Link>
      </div>
    </>
  );
}

export default ContentBox;
