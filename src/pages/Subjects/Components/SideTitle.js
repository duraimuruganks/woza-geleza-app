import s from "./SideTitle.module.css";
import React, { useEffect, useState } from "react";

export function SideTitle(props) {
  // const [currentId, setcurrentId] = useState();

  let boxColor = props.sideTitleColor;
  let element = document.getElementById(props.handleFilterScroll3);
  // console.log(boxColor);
  useEffect(() => {
    function scrolltoFilterId() {
      element == null ? null : element.scrollIntoView();
    }
    scrolltoFilterId();
    // console.log("checkkkkkk butttonnn");
  }, [props.handleFilterScroll3]);

  return (
    <>
      {/* {console.log("props.handleFilterScroll3", props.handleFilterScroll3)} */}
      {/* {console.log(
        'props.sideTitle.split("_")[1]',
        props.sideTitle.split("_")[1]
      )} */}
      <div className={s.container}>
        <div className={s.left}>
          <div style={{ backgroundColor: boxColor }} className={s.support} />
          {props.sideTitle
            .split("_")[0]
            .split("-")
            .map((val) => (
              <p
                style={{ color: boxColor }}
                className={s.text}
                id={props.sideTitle.split("_")[1]}
              >
                {/* {console.log("scrollId", val)} */}
                {val}
              </p>
            ))}
        </div>
        <div className={s.arrowIcon}>
          <span
            style={{ color: boxColor }}
            class="material-icons subjectSideTitle"
          >
            east
          </span>
        </div>
      </div>
    </>
  );
}
