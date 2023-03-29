import s from "./ViewAll.module.css";
import React, { useState, useEffect } from "react";
import { OnlineResourse } from "../Components/OnlineResourse";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import MyPagination from "../../../components/pagination";
import { baseUrl } from "../../UrlList";

function ViewAll() {
  const [currentPage, setcurrentPage] = useState(1);
  const [viewAllContent, setviewAllContent] = useState();
  const [itemsPerPage, setitemsPerPage] = useState(10);

  const location = useLocation();
  let { reqBody, currentResourseId2, currentResourseName, trainingMaterial } =
    location.state;

  document.title = currentResourseName + " | Woza Geleza";
  //fetch Data
  let viewAllReqBody = reqBody;

  trainingMaterial == true
    ? (viewAllReqBody.vendorID = currentResourseId2)
    : (viewAllReqBody.resourceTypeID = currentResourseId2);
  viewAllReqBody.page = currentPage;
  viewAllReqBody.limit = 12;

  const viewAllUrl =
    trainingMaterial == true
      ? baseUrl + "training/material/vendor/list"
      : baseUrl + "grade/subject/term/resource/all/list";
  useEffect(() => {
    const fetchData = axios.post(viewAllUrl, viewAllReqBody).then((res) => {
      setviewAllContent(res);
    });
  }, [currentPage]);

  // const indexofLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexofLastItem - itemsPerPage;

  // const currentData =
  //   viewAllContent == undefined
  //     ? null
  //     : viewAllContent.data.data.result.slice(
  //         indexOfFirstItem,
  //         indexofLastItem
  //       );
  const currentData =
    viewAllContent == undefined
      ? null
      : trainingMaterial == true
      ? viewAllContent.data.data.result
      : viewAllContent.data.data.result;

  //pagenation
  // const totalItems =
  //   viewAllContent == undefined ? null : viewAllContent.data.data.result.length;

  // const totalCountFromApi =
  //   viewAllContent == undefined
  //     ? null
  //     : Math.ceil(viewAllContent.data.data.totalCount / 2);
  // console.log("totalCountFromApitotalCountFromApi", totalCountFromApi);
  // const pageNumberList = [];
  // for (let i = 1; i <= totalCountFromApi; i++) {
  //   pageNumberList.push(i);
  // }

  function functionSetcurrentPage(param) {
    setcurrentPage(param);
  }

  return (
    <>
      {/* {viewAllContent == undefined
        ? null
        : console.log(
            "viewAllReqBody",
            viewAllReqBody,
            "currentResourseId22222",
            currentResourseId2,
            "currentResourseName",
            currentResourseName,
            "viewAllContent",
            viewAllContent.data.data,
            "viewAllContent.data.data.result.length",
            viewAllContent.data.data.result.length
            // "totalCountFromApi",
            // totalCountFromApi
          )} */}
      {console.log(
        "reqBody",
        reqBody,
        "currentData",
        currentData,
        "viewAllContent",
        viewAllContent
      )}
      <Navbar />
      <div className={s.wholeBox}>
        <div className={s.viewContainer}>
          <div className={s.headingBox}>
            {currentResourseName?.split("-").map((val) => (
              <h1 className={s.heading}>{val}&#10240;</h1>
            ))}
          </div>
          <MyPagination
            viewAllContent={viewAllContent}
            setcurrentPage={functionSetcurrentPage}
          />
          {/* <div className={s.pageNumberTopBox}>
            <div className={s.pageNumberBox}>
              {pageNumberList.length == 1
                ? null
                : pageNumberList.map((val) => (
                    <p
                      className={s.pageNumber}
                      key={val}
                      onClick={() => setcurrentPage(val)}
                    >
                      {val}
                    </p>
                  ))}
            </div>
          </div> */}
          <div className={s.viewContentBox}>
            <div className={s.viewContent}>
              <OnlineResourse content={currentData} forMultipleColumns={true} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ViewAll;
