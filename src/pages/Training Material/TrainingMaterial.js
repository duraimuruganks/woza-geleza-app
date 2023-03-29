import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { baseUrl } from "../UrlList";
import ContentBox from "./Components/ContentBox";
import s from "./TrainingMaterial.module.css";

function TrainingMaterial() {
  let [vendorList, setvendorList] = useState(null);
  // const location = useLocation();
  // let { gradeId, gradeNumber, currentTypeId } = location.state;
  document.title = "Training Material | Woza Geleza";

  // let currentGradeNumber = gradeNumber;

  //fetch api
  // let currentGradeId = gradeId;

  const trainingVendorListUrl = baseUrl + "training/vendor/list";
  useEffect(() => {
    const fetchData = async () => {
      await axios.get(trainingVendorListUrl).then((res) => {
        setvendorList(res);
      });
    };
    fetchData();
  }, []);

  const contentItems = [
    {
      img: "./Subjects/Maths/Maths@2x.png",
      text: "EduNova",
      navigateLink: "/VendorName",
    },
    {
      img: "./Subjects/Home Language/Home Language@2x.png",
      text: "Vendor Name",
      navigateLink: "/VendorName",
    },
    {
      img: "./Subjects/English/English@2x.png",
      text: "Vendor Name",
      navigateLink: "/VendorName",
    },
    {
      img: "./Subjects/Natural Science/Natural Science@2x.png",
      text: "Vendor Name",
      navigateLink: "/VendorName",
    },
    {
      img: "./Subjects/Physical Science/Physical Science@2x.png",
      text: "Vendor Name",
      navigateLink: "/Subject",
    },
  ];
  return (
    <>
      {/* {subject == undefined
        ? null
        : console.log(
            "currentTypeId",
            currentTypeId,
            "currentGradeId",
            currentGradeId,
            "currentGradeNumber",
            currentGradeNumber,
            "subject",
            subject.data.data
          )} */}
      {console.log("vendorList", vendorList)}
      <Navbar />
      <div className={s.container}>
        <h2 className={s.title}>Training Material</h2>
        <div className={s.flexBox}>
          {vendorList == null ? null : vendorList.data.success == false ? (
            <h1 style={{ fontSize: "25px", margin: "auto" }}>
              {vendorList.data.message}
            </h1>
          ) : (
            vendorList.data.data.map((val, index) => (
              <div className={s.flexItem}>
                <ContentBox
                  items={contentItems[index]}
                  current={val}
                  // currentvendorID = {val.vendorID}
                  // currentTypeId={currentTypeId}
                  // currentGradeId={currentGradeId}
                  // currentGradeNumber={currentGradeNumber}
                  // currentSubjectId={val.subjectID}
                />
              </div>
            ))
          )}
        </div>

        {/* <div className={s.flexBox}>
          {contentItems.map((val) => (
            <div className={s.flexItem}>
              <ContentBox items={val.img} />
            </div>
          ))}
        </div> */}
      </div>
      <Footer />
    </>
  );
}

export default TrainingMaterial;
