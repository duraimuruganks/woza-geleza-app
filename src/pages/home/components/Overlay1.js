import styles from "./Overlay1.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../UrlList";

const Overlay1 = (props) => {
  const [subMentList, setsubMentList] = useState();
  let currentTypeId;
  // let subMenuPair = props.pair;

  props.currentTypeId == undefined
    ? null
    : (currentTypeId = props.currentTypeId);
  const subMenuUrl = baseUrl + "sub/menu/list/";
  useEffect(() => {
    async function fetchData() {
      currentTypeId == undefined
        ? null
        : await axios.get(subMenuUrl + currentTypeId).then(function (res) {
            setsubMentList(res.data);
            // console.log(res.data);
          });
    }
    fetchData();
  }, [props.currentTypeId]);

  const backGroundGradient = [
    "var(--color-indigo-100)",
    "var(--color-purple-100)",
    "var(--color-orange-100)",
    "var(--color-purple-200)",
    "#70e1d8",
  ];
  const subBoxColor = [
    "var(--color-indigo-200)",
    "var(--color-purple-300)",
    "var(--color-orange-200)",
    "var(--color-purple-400)",
    "#66c7c0",
  ];

  const gradeDivide = [
    "Grade 1 to 3",
    "Grade 4 to 7",
    "Grade 8 to 10",
    "Grade 11 to 12",
  ];
  return (
    <div className={styles.overlay1}>
      {console.log(
        "currentTypeiD",
        currentTypeId,
        "subMentList",
        subMentList == undefined ? subMentList : subMentList.data
      )}
      <div className={styles.firsttwo}>
        {currentTypeId == undefined
          ? null
          : subMentList == undefined
          ? null
          : subMentList.success == false
          ? null
          : Object.entries(subMentList.data).map((val, index) => (
              <div className={styles.box} key={val}>
                <div
                  className={styles.top}
                  style={{ backgroundColor: backGroundGradient[index] }}
                >
                  <h3 className={styles.text}>
                    {val[0]
                      .split("_")[0]
                      .split("-")
                      .map((text) => text + " ")}
                    {console.log(
                      "name",
                      val[0].split("_")[0].split("-")[0].toLowerCase() +
                        " " +
                        val[0].split("_")[0].split("-")[1].toLowerCase()
                    )}
                  </h3>
                  <div
                    className={styles.subbox}
                    style={{ backgroundColor: subBoxColor[index] }}
                  >
                    <p className={styles.subtext}>{gradeDivide[index]}</p>
                  </div>
                </div>
                <div className={styles.list}>
                  {val[1].map((val1, index) => {
                    return (
                      <Link
                        key={val1.gradeID}
                        to={
                          val[0].split("_")[0].split("-")[0].toLowerCase() +
                            " " +
                            val[0].split("_")[0].split("-")[1].toLowerCase() ==
                          "training material"
                            ? "/Training-Material"
                            : "/Grade"
                        }
                        state={{
                          gradeId: val1.gradeID,
                          gradeNumber: val1.gradeName,
                          currentTypeId: currentTypeId,
                        }}
                      >
                        {console.log("val.gradeName", val)}
                        <p className={styles.grade1}>{val1.gradeName}</p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}

        {/* {currentId == undefined
          ? null
          : subMenuPair.map((item, index) => {
              return item[currentId] == undefined
                ? null
                : Object.entries(item[currentId]).map((val, index) => (
                    <div className={styles.box} key={val}>
                      <div
                        className={styles.top}
                        style={{ backgroundColor: backGroundGradient[index] }}
                      >
                        <h3 className={styles.text}>
                          {val[0]
                            .split("_")[0]
                            .split("-")
                            .map((text) => text + " ")}
                        </h3>
                        <div
                          className={styles.subbox}
                          style={{ backgroundColor: subBoxColor[index] }}
                        >
                          <p className={styles.subtext}>{gradeDivide[index]}</p>
                        </div>
                      </div>
                      <div className={styles.list}>
                        {val[1].map((val, index) => {
                          return (
                            <Link
                              key={val.gradeID}
                              to={
                                val.gradeID ==
                                "987646d7-1414-4ea8-8d6b-a02e376f699e"
                                  ? "/Training-Material"
                                  : "/Grade"
                              }
                              state={{
                                gradeId: val.gradeID,
                                gradeNumber: val.gradeName,
                              }}
                            >
                              <p className={styles.grade1}>{val.gradeName}</p>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ));
            })} */}

        {/* {currentId == undefined
          ? null
          : subMenuPair.map((item, index) => {
              return item[currentId] == undefined ? null : item[currentId][
                  foundation
                ] ? (
                <div className={styles.box}>
                  <div className={styles.top}>
                    <h3 className={styles.text}>FOUNDATION PHASE </h3>
                    <div className={styles.subbox}>
                      <p className={styles.subtext}>Grade 1 to 3</p>
                    </div>
                  </div>
                  <div className={styles.list}>
                    {item[currentId][foundation].map((val, index) => {
                      return (
                        <Link
                          key={val.gradeID}
                          to="/Grade"
                          state={{
                            gradeId: val.gradeID,
                            gradeNumber: val.gradeName,
                          }}
                        >
                          <p className={styles.grade1}>{val.gradeName}</p>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ) : null;
            })}
        {currentId == undefined
          ? null
          : subMenuPair.map((item, index) => {
              return item[currentId] == undefined ? null : item[currentId][
                  intermediate
                ] ? (
                <div className={styles.box}>
                  <div className={styles.top1}>
                    <h3 className={styles.text}>INTERMEDIATE PHASE</h3>
                    <div className={styles.subbox1}>
                      <p className={styles.subtext}>Grade 4 to 7</p>

                    </div>
                  </div>
                  <div className={styles.list}>
                    {item[currentId][intermediate].map((val, index) => {
                      return (
                        <Link
                          key={val.gradeID}
                          to="/Grade"
                          state={{ prop1: val.gradeID }}
                        >
                          <p className={styles.grade1}>{val.gradeName}</p>
                        </Link>
                      );
                    })}

                 
                  </div>
                </div>
              ) : null;
            })}
        {currentId == undefined
          ? null
          : subMenuPair.map((item, index) => {
              return item[currentId] == undefined ? null : item[currentId][
                  senior
                ] ? (
                <div className={styles.box}>
                  <div className={styles.top2}>
                    <h3 className={styles.text}>SENIOR PHASE</h3>
                    <div className={styles.subbox2}>
                      <p className={styles.subtext}>Grade 8 to 10</p>

                    </div>
                  </div>
                  <div className={styles.list}>
                    {item[currentId][senior].map((val, index) => {
                      return (
                        <Link
                          key={val.gradeID}
                          to="/Grade"
                          state={{ prop1: val.gradeID }}
                        >
                          <p className={styles.grade1}>{val.gradeName}</p>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ) : null;
            })}

        {currentId == undefined
          ? null
          : subMenuPair.map((item, index) => {
              return item[currentId] == undefined ? null : item[currentId][
                  further
                ] ? (
                <div className={styles.box}>
                  <div className={styles.top3}>
                    <h3 className={styles.text}>
                      FURTHER EDUCATION AND TRAINING
                    </h3>
                    <div className={styles.subbox3}>
                      <p className={styles.subtext}>Grade 11 to 12</p>

                    </div>
                  </div>
                  <div className={styles.list}>
                    {item[currentId][further]?.map((val, index) => {
                      return (
                        <Link
                          key={val.gradeID}
                          to="/Grade"
                          state={{ prop1: val.gradeID }}
                        >
                          <p className={styles.grade1}>{val.gradeName}</p>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ) : null;
            })}
        {currentId == undefined
          ? null
          : subMenuPair.map((item, index) => {
              return item[currentId] == undefined ? null : item[currentId][
                  Training
                ] ? (
                <div className={styles.box}>
                  <div className={styles.top4}>
                    <h3 className={styles.text}>TRAINING MATERIAL</h3>
                    <div className={styles.subbox4}>
                      <p className={styles.subtext}></p>
                    </div>
                  </div>
                  <div className={styles.list}>
                    {item[currentId][Training]?.map((val, index) => {
                      return (
                        <Link
                          key={val.gradeID}
                          to="/Grade"
                          state={{ prop1: val.gradeID }}
                        >
                          <p className={styles.grade1}>{val.gradeName}</p>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ) : null;
            })} */}
      </div>
    </div>
  );
};

export default Overlay1;

// {currentId == undefined
//   ? null
//   : subMenuPair.forEach((item, index) => {
//       console.log(
//         "test",
//         item[currentId]
//           ? item[currentId][foundation].map((val) => val.gradeName)
//           : null
//       );

//       item[currentId]
//         ? item[currentId][foundation].map((val) => (
//             <Link
//               to="/Grade"
//               state={{
//                 prop1: numberList[1],
//               }}
//               className="link"
//             >
//               <p className={styles.grade1}>{val.gradeName}</p>
//             </Link>
//           ))
//         : null;
//     })}
