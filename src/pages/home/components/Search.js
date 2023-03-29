import React, { useState, useEffect } from "react";
import s from "./Search.module.css";
import data from "../Data/SearchData1.json";
import data2 from "../Data/SearchData2.json";
import img from "../../../Images/icons/search.svg";

function Search(props) {
  const [currentFilterGradeId, setcurrentFilterGradeId] = useState(null);
  const [currentFilterSubjectId, setcurrentFilterSubjectId] = useState(null);
  const [currentSearchValue, setcurrentSearchValue] = useState(null);

  const [dropDownIntialValue, setdropDownIntialValue] = useState("default");

  function handleCurrentGradeId() {
    event.target.value == "default"
      ? setcurrentFilterGradeId(null)
      : setcurrentFilterGradeId(event.target.value);
  }
  function handleCurrentSubjectID() {
    event.target.value == "default"
      ? setcurrentFilterSubjectId(null)
      : setcurrentFilterSubjectId(event.target.value);
  }
  function handleCurrentSearchInput() {
    event.target.value == ""
      ? setcurrentSearchValue(null)
      : setcurrentSearchValue(event.target.value);
    event.target.value.length == 0
      ? setcurrentSearchValue(null)
      : setcurrentSearchValue(event.target.value);
  }
  useEffect(() => {
    function filterInputValueAndId() {
      props.handleCurrentSearchValueAndId(
        currentSearchValue,
        currentFilterGradeId,
        currentFilterSubjectId
      );
    }
    filterInputValueAndId();
  }, [currentFilterGradeId, currentFilterSubjectId, currentSearchValue]);

  return (
    <>
      {/* {console.log("currentFilterGradeId", currentFilterGradeId)}
      {console.log("currentFilterSubjectId", currentFilterSubjectId)}*/}
      {/* {console.log("currentSearchValue", currentSearchValue?.length)} */}
      <div className={s.section}>
        <div className={`${s.sBox} }`}>
          <span className="material-icons search">search</span>
          {/* <img src={img} alt="" className={s.sImg} /> */}
          <input
            name=""
            id=""
            className={s.sText}
            placeholder="Search"
            onChange={handleCurrentSearchInput}
            autoComplete="off"
          />
        </div>
        <div className={s.dBox}>
          <select
            name=""
            id=""
            onChange={handleCurrentGradeId}
            className={s.dGrade}
          >
            <option value={dropDownIntialValue}>Grades</option>
            {props.filterGradeListProps == null
              ? null
              : props.filterGradeListProps.data.map((val) => (
                  <option value={val.gradeID} key={val.gradeID}>
                    {val.gradeName}
                  </option>
                ))}
          </select>
          <div className={s.divider}></div>
          <select
            name=""
            id=""
            className={s.dSubject}
            onChange={handleCurrentSubjectID}
          >
            <option value="default">Subjects</option>
            {props.filterSubjectListProps == null
              ? null
              : props.filterSubjectListProps.data.map((item) => (
                  <option value={item.subjectID} key={item.subjectID}>
                    {item.subjectName}
                  </option>
                ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default Search;
