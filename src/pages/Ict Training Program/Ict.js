import React from "react";
import s from "./Ict.module.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
// import "../../components/Common Css/Common.scss";
import data from "./data.json";
import { Link } from "react-router-dom";

export default function Ict() {
  console.log(data.image);
  return (
    <>
      <Navbar />
      <div className={s.section}>
        <div className={s.titleTop}>
          <Link to="/">
            <div className={s.backButton}>
              {/* <img
                className={s.backArrow}
                src="./icons/expand_less.png"
                alt="arrow"
              /> */}
              <span className="material-icons">navigate_before</span>
              <span className={s.Back}>Back to Home</span>
            </div>
          </Link>
          <h3 className={s.Title}>ICT Training Programme</h3>
        </div>

        <p className={s.titlePara}>
          The following ICT certified courses have been made available by our
          various partners. These courses offer you the opportunity to build
          basic and advanced ICT skills, and obtain a certification upon
          completion. By clicking on the various courses, it will redirect you
          to the providers website with further information and instruction on
          how to access and do the training.
        </p>
        <div className={s.contentBox}>
          {data.map((items) => (
            <div className={s.box}>
              <div className={s.imgBox}>
                <img className={s.img} src={items.image} alt="" />
              </div>
              <h6 className={s.heading}>{items.heading}</h6>
              <p className={s.link}>{items.companyLink}</p>
              <p className={s.paraBox}>{items.content}</p>
              <button className={s.btn}>
                <div className={s.buttonnContent}>
                  <span>Visit</span>
                  <img
                    className={s.btnArrow}
                    src="./icons/arrow.svg"
                    alt=""
                    width="20px"
                    height="20px"
                  />
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
