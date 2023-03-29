import React from "react";
import s from "./ArticleContent.module.css";

function ArticleContent(props) {
  console.log(props.Img);
  return (
    <>
      <div className={s.container}>
        <div className={s.left}>
          <h4 className={s.heading}>{props.head}</h4>
          <span className={s.date}>{props.date}</span>

          <div className={s.content}>
            {props.para ? <p> {props.para} </p> : null}
            {props.multiPara
              ? props.multiPara.map((item) => <p> {item} </p>)
              : null}
          </div>
        </div>
        <div className={s.right}>
          <img src={props.Img} alt="" />
        </div>
      </div>
    </>
  );
}

export default ArticleContent;
