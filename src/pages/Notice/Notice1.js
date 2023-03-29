import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styles from "./Notice1.module.css";
import s from "./Notice2.module.css";

import { Link } from "react-router-dom";
import { useFetch } from "../../Api/services";
import { useEffect, useState } from "react";
import { baseUrl } from "../UrlList";

const Notice1 = () => {
  const [NoticeContent, setNoticeContent] = useState(null);
  const [NoticeLoading, setNoticeLoading] = useState(true);
  const [ReadMoreActive, setReadMoreActive] = useState(false);
  const [ReadMoreContent, setReadMoreContent] = useState("");
  const [ReadMoreContentImg, setReadMoreContentImg] = useState("");
  const [documentTitle, setdocumentTitle] = useState("");

  document.title = documentTitle + " " + "|" + " " + "Woza Geleza";

  const parser = new DOMParser();

  const url = baseUrl + "content/list/notice-board";

  // Example : contentType = notice-board or faq
  const { data, loading } = useFetch(url);
  useEffect(() => {
    setNoticeContent(data);
    setNoticeLoading(loading);
  }, [data]);

  useEffect(() => {
    ReadMoreContent == ""
      ? setdocumentTitle("Notice Board")
      : setdocumentTitle(ReadMoreContent[0].name);
  }, [data, ReadMoreContent]);

  function handleReadMore(parameter) {
    setReadMoreActive(true);
    setReadMoreContent([parameter]);
    setReadMoreContentImg(parameter.imageURL);
    ReadMoreActive == true ? null : window.scrollTo(0, 0);
  }

  const paraDiv = document.getElementById("para");

  let date;
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  // [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  //   "August",
  //   "September",
  //   "October",
  //   "November",
  //   "December",
  // ];

  return (
    <div className={styles.notice1}>
      {console.log(
        "data",
        data?.data.data,
        "ReadMoreContent",
        ReadMoreContent,
        "NoticeLoading",
        NoticeLoading
      )}
      <Navbar />
      <div className={`${styles.noticeboard} ${s.noticeboard}`}>
        <div className={styles.noticeboardcongroundtentbackgr} />
        <div className={s.headingBox}>
          {ReadMoreActive == true ? (
            <div
              className={s.back}
              onClick={() => {
                setReadMoreActive(false);
                setReadMoreContent("");
              }}
            >
              <span class="material-icons backArrow">expand_more</span>
              <p className={s.backButtonText}>Go back to notice board</p>
            </div>
          ) : null}
          <h3 className={styles.noticeboardtitle}>
            Notice Board {ReadMoreActive == true ? " - Full Article" : null}
          </h3>
        </div>
        {NoticeLoading ? (
          <h3>Loading...</h3>
        ) : NoticeContent == null ? null : NoticeContent.data.success ==
          false ? (
          <h1>{NoticeContent.data.message}</h1>
        ) : (
          <div className={styles.noticeboardcontent}>
            {NoticeContent == null
              ? null
              : (ReadMoreActive === true
                  ? ReadMoreContent
                  : NoticeContent.data.data
                ).map((val, index) => (
                  <div
                    // to="/ict-champion-learnership"
                    className={
                      ReadMoreActive == true
                        ? s.ReadMoreContent
                        : styles.noticeboardcontent1
                    }
                    key={index}
                    onClick={() => handleReadMore(val)}
                  >
                    {ReadMoreActive == true ? (
                      val.contents.length > 1000 ? (
                        ReadMoreContentImg ==
                        null ? null : ReadMoreContentImg == "" ? null : (
                          <div className={s.ReadMoreImgBoxDoubleColumn}>
                            <img
                              src={ReadMoreContentImg}
                              // src="./anglo-americanpng@2x.png"
                              alt=""
                              className={s.ReadMoreImgDoubleColumn}
                            />
                          </div>
                        )
                      ) : null
                    ) : null}
                    <div
                      className={
                        ReadMoreActive == true
                          ? val.contents.length > 1000
                            ? s.ReadMoreContentLeftDoubleColumn
                            : s.ReadMoreContentLeft
                          : ""
                      }
                    >
                      <h2
                        className={
                          ReadMoreActive == true
                            ? s.contentTitle
                            : styles.noticeboardcontent1title
                        }
                      >
                        {val.name}
                      </h2>

                      <p
                        className={
                          ReadMoreActive == true
                            ? s.contentDate
                            : styles.noticeboardcontent1titledate
                        }
                      >
                        Uploaded on {new Date(val.createdAt).getDate()}th{" "}
                        {months[new Date(val.createdAt).getMonth()]},{" "}
                        {new Date(val.createdAt).getFullYear()}
                      </p>

                      <p
                        className={
                          ReadMoreActive == true
                            ? val.contents.length > 1000
                              ? s.paraDoubleColumn
                              : s.paraSingleColumn
                            : styles.noticeboardcontent1para
                        }
                        dangerouslySetInnerHTML={{
                          __html:
                            ReadMoreActive == true
                              ? val.contents
                              : val.contents.length > 216
                              ? val.contents.slice(0, 216) + "..."
                              : val.contents.slice(0, 216),
                        }}
                      ></p>
                    </div>
                    {ReadMoreActive == true ? (
                      val.contents.length > 1000 ? null : ReadMoreContentImg ==
                        null ? null : ReadMoreContentImg == "" ? null : (
                        <div className={s.ReadMoreImgBoxSingleColumn}>
                          <img
                            src={ReadMoreContentImg}
                            alt=""
                            className={s.ReadMoreImgSingleColumn}
                          />
                        </div>
                      )
                    ) : null}

                    {ReadMoreActive == true ? null : (
                      <div className={styles.btnbox}>
                        <Button
                          currentContent={val}
                          handleReadMore={handleReadMore}
                        />
                      </div>
                    )}
                  </div>
                ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Notice1;

const Button = (props) => {
  return (
    <button
      className={styles.btn}
      onClick={() => {
        props.handleReadMore(props.currentContent);
      }}
    >
      <span className={styles.btnText}>Read More</span>
      {/* <img className={styles.btnImg} alt="" src="../icons/arrow.png" /> */}
      <div className={styles.btnImg}>
        <span className="material-icons noticeArrow">east</span>
      </div>
    </button>
  );
};

{
  // ReadMoreActive == true
  // ?
  //  paraDiv.appendChild(
  //     parser
  //       .parseFromString(val.contents, "text/html")
  //       .getElementsByTagName("html")[0]
  //   )
  //   console.table(
  //     "parser.parseFromString(val.contents, 'text/html')",
  //     parser
  //       .parseFromString(val.contents, "text/html")
  //       .getElementsByTagName("body")[0].innerHTML,
  //     typeof parser
  //       .parseFromString(val.contents, "text/html")
  //       .getElementsByTagName("body")[0].innerHTML
  //   )
  // : null
}

{
  /* {ReadMoreActive == true
                          ? // paraDiv.appendChild(
                            //   parser
                            //     .parseFromString(val.contents, "text/html")
                            //     .getElementsByTagName("html")[0]
                            // )
                            console.table(
                              "parser.parseFromString(val.contents, 'text/html')",

                              parser
                                .parseFromString(val.contents, "text/html")
                                .getElementsByTagName("body")[0].innerHTML,

                              typeof parser
                                .parseFromString(val.contents, "text/html")
                                .getElementsByTagName("body")[0].innerHTML
                            )
                          : val.contents.slice(0, 216)} */
}

{
  /* {ReadMoreActive == true
                          ? null
                          : val.contents.length > 216
                          ? "  ...."
                          : null} */
}

{
  /* <Link
            to="/Heritage-Day-Meme-Competition-Winners"
            className={styles.noticeboardcontent11}
          >
            <div className={styles.noticeboardcontent11box}>
              <h2 className={styles.noticeboardcontent1title}>
                Heritage Day Meme Competition (Winners)
              </h2>
              <p className={styles.noticeboardcontent1titledate}>
                Uploaded on 8th Nov, 2021
              </p>
              <p className={styles.noticeboardcontent1para}>
                Here are the winners of the Meme Competition on Heritage Day....
              </p>
            </div>
            <Button />
          </Link>
          <Link
            to="/ICT-Sprint-Competition"
            className={styles.noticeboardcontent12}
          >
            <h2 className={styles.noticeboardcontent1title}>
              ICT Sprint Competition (Flyer)
            </h2>
            <p className={styles.noticeboardcontent1titledate2}>
              Uploaded on 8th Nov, 2021
            </p>
            <p className={styles.noticeboardcontent1para}>
              AASA Schools programme has been running a series of competitions
              to encourage Grade 12 learners to get involved in ICT related
              activities. The first ICT sprint was used to ide...
            </p>

            <Button />
          </Link> */
}
