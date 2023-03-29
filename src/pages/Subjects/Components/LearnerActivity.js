import React from "react";
import s from "./LearnerActivity.module.css";
import pdfImg from "../../../Images/icons/file-type-pdf.png";

export function LearnerActivity(checkProps) {
  const learnerActivity = checkProps.learnerActivity;
  const lessonsPlan = checkProps.lessonsPlan;
  const managementDocuments = checkProps.managementDocuments;
  const printables = checkProps.printables;
  const teacherResourses = checkProps.teacherResourses;

  const learnerActivityContent = [
    {
      heading: "Learner Activity Book...",
      subHeading: "Gr 1 Term 1 2021 Maths Af...",
      para: "Gr 1 Term 1 2021 Maths Afrikaans Learner Activity Book Cover",
    },
    {
      heading: "Learner Activity Book...",
      subHeading: "Gr 1 Term 1 2021 Maths Af...",
      para: "Gr 1 Term 1 2021 Maths Afrikaans Learner Activity Book Cover",
    },
  ];
  const managementDocumentsContent = [
    {
      heading: "Management Docume...",
      subHeading: "Gr 1 Term 1 2021 AASA Ma...",
      para: "Gr 1 Term 1 2021 Maths Management Dcument",
    },
  ];
  const lessonPlanContent = [
    {
      heading: "Lesson Plans 2021 (En...",
      subHeading: "Gr 1 Term 1 2019 TMU Ma...",
      para: "Gr 1 Term 1 2021 Maths Lesson Plan",
    },
  ];
  const printablesContent = [
    {
      heading: "Printables 2021 (N/A)",
      subHeading: "Gr 1 Terms 1-4 2020 TMU...",
      para: "Gr 1 Terms 1-4 2021 Maths Printables",
    },
  ];
  const teacherResourseslessonPlanContent = [
    {
      heading: "Teacher Resource Pac...",
      subHeading: "Gr 1 Term 1 2020 TMU Ma...",
      para: "Gr 1 Term 1 2021 Maths Teacher Resource Pack Afrikaans",
    },
    {
      heading: "Teacher Resource Pack 2021 (English)",
      subHeading: "Gr 1 Term 1 2020 TMU Maths Teacher Res...",
      para: "Gr 1 Term 1 2021 Maths Teacher Resource Pack English",
    },
  ];
  return (
    <>
      <div className={s.oContainer}>
        <div className={s.container}>
          {learnerActivity
            ? learnerActivityContent?.map((item) => (
                <div className={s.box}>
                  <div className={s.top}>
                    <div className={s.topContent}>
                      <p className={s.heading}>{item.heading}</p>
                      <p className={s.para}>{item.subHeading}</p>
                    </div>
                    <span class="material-icons subjectPdf">
                      picture_as_pdf
                    </span>
                    {/* <img src="" alt="" className={s.img} /> */}
                  </div>
                  <p className={s.para}> {item.para} </p>
                  <DownloadButton />
                </div>
              ))
            : lessonsPlan
            ? lessonPlanContent?.map((item) => (
                <div className={s.box}>
                  <div className={s.top}>
                    <div className={s.topContent}>
                      <p className={s.heading}>{item.heading}</p>
                      <p className={s.para}>{item.subHeading}</p>
                    </div>
                    <span class="material-icons subjectPdf">
                      picture_as_pdf
                    </span>
                    {/* <img src="" alt="" className={s.img} /> */}
                  </div>
                  <p className={s.para}> {item.para} </p>
                  <DownloadButton />
                </div>
              ))
            : managementDocuments
            ? managementDocumentsContent?.map((item) => (
                <div className={s.box}>
                  <div className={s.top}>
                    <div className={s.topContent}>
                      <p className={s.heading}>{item.heading}</p>
                      <p className={s.para}>{item.subHeading}</p>
                    </div>
                    <img src="../../" alt="" />
                    <span class="material-icons subjectPdf">
                      picture_as_pdf
                    </span>
                    {/* <img src="" alt="" className={s.img} /> */}
                  </div>
                  <p className={s.para}> {item.para} </p>
                  <DownloadButton />
                </div>
              ))
            : printables
            ? printablesContent?.map((item) => (
                <div className={s.box}>
                  <div className={s.top}>
                    <div className={s.topContent}>
                      <p className={s.heading}>{item.heading}</p>
                      <p className={s.para}>{item.subHeading}</p>
                    </div>
                    <span class="material-icons subjectPdf">
                      picture_as_pdf
                    </span>
                    {/* <img src="" alt="" className={s.img} /> */}
                  </div>
                  <p className={s.para}> {item.para} </p>
                  <DownloadButton />
                </div>
              ))
            : teacherResourses
            ? teacherResourseslessonPlanContent?.map((item) => (
                <div className={s.box}>
                  <div className={s.top}>
                    <div className={s.topContent}>
                      <p className={s.heading}>{item.heading}</p>
                      <p className={s.para}>{item.subHeading}</p>
                    </div>
                    <span class="material-icons subjectPdf">
                      picture_as_pdf
                    </span>
                    {/* <img src="" alt="" className={s.img} /> */}
                  </div>
                  <p className={s.para}> {item.para} </p>
                  <DownloadButton />
                </div>
              ))
            : null}
        </div>
      </div>
    </>
  );
}

function DownloadButton() {
  return (
    <>
      <button className={s.downloadButton}>
        <span class="material-icons subjectContentDownload">file_download</span>
        <div>Download File</div>
      </button>
    </>
  );
}
