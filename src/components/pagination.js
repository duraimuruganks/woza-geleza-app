import s from "./pagination.module.css";

import React, { useState } from "react";

function MyPagination(props) {
  const [highlightCurrentPage, sethighlightCurrentPage] = useState(1);
  const totalCountFromApi =
    props.viewAllContent == undefined
      ? null
      : Math.ceil(props.viewAllContent.data.data.totalCount / 12);
  // console.log("totalCountFromApitotalCountFromApi", totalCountFromApi);
  const pageNumberList = [];
  for (let i = 1; i <= totalCountFromApi; i++) {
    pageNumberList.push(i);
  }
  return (
    <>
      {/* {console.log("props.viewAllContent", props.viewAllContent)} */}
      <div className={s.pageNumberTopBox}>
        <div className={s.pageNumberBox}>
          {pageNumberList.length == 1
            ? null
            : pageNumberList.map((val) => (
                <p
                  className={`${s.pageNumber} ${
                    highlightCurrentPage === val ? s.active : ""
                  }`}
                  key={val}
                  onClick={() => {
                    props.setcurrentPage(val);
                    sethighlightCurrentPage(val);
                  }}
                >
                  {val}
                </p>
              ))}
        </div>
      </div>
    </>
  );
}

export default MyPagination;
