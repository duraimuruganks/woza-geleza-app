import React from "react";
import { Link } from "react-router-dom";
import s from "./ArticleHeading.module.css";
import img from "../../../Images/icons/expand_less.svg";

function ArticleHeading(backButtonText) {
  return (
    <>
      <div className={s.container}>
        <div className={s.backButtonBox}>
          <Link to="/Notice" className={s.backButton}>
            {/* <img className={s.btnImg} src={img} alt="" /> */}
            <div className={s.btnImg}>
              <span className="material-icons back1">navigate_before</span>
            </div>
            <span className={s.btnText}>{backButtonText.btnText}</span>
          </Link>
        </div>
        <div>
          <h4 className={s.heading}>Notice Board - Full Article</h4>
        </div>
      </div>
    </>
  );
}

export default ArticleHeading;
