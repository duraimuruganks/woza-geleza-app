import s from "./OnlineResourse.module.css";
import React, { useState } from "react";
import pdfImg from "./images/pdfDownload.png";
import { Link } from "react-router-dom";
import Draggable from "react-draggable";
// import { Logger } from "sass";

const onlineResourseContent = [
  {
    img: "./Subject Content/Online Resourse/2.png",
    heading: "Department of Basic Education ...",
    link: "dbecontent.bhelela.com",
    para: "This site has FET and GET Resources such as workbooks and textbooks for math and english",
  },
  {
    img: "./Subject Content/Online Resourse/2.png",
    heading: "Department of Basic Education ...",
    link: "dbecontent.bhelela.com",
    para: "This site has FET and GET Resources such as workbooks and textbooks for math and english",
  },
];

export function OnlineResourse(props) {
  const [showVideo, setshowVideo] = useState(false);
  const [video, setvideo] = useState("a");

  let reqBody = props.fromSubjectContent == true ? props.reqBody : null;

  let currentList =
    props.fromSubjectContent == true
      ? props.content[1].slice(0, 4)
      : props.content;

  return (
    <>
      {/* {console.log("currentResourseIdName", props.currentResourseIdName)} */}
      {/* {console.log("reqBody resourse page", reqBody)} */}
      {/* {console.log("reqBody", props.reqBody)} */}
      {/* {console.log("props.content", props.content)} */}
      {/* {console.log("currentList", currentList)} */}
      {/* {console.log("video", video)} */}

      {showVideo ? (
        // <div className={s.resize}>
        // <Draggable>
        <div className={s.videoBox}>
          <div className={s.vidcloseBtn} onClick={() => setshowVideo(false)}>
            <span class="material-icons videoClose">cancel</span>
          </div>
          <video className={s.video} controls>
            <source src={video} />
          </video>
        </div>
      ) : (
        // </Draggable>
        // </div>
        <div className={s.oContainer}>
          <div className={s.container}>
            {props.content == null
              ? null
              : currentList == null
              ? null
              : currentList.map((item) => (
                  <div
                    className={
                      props.forMultipleColumns ? s.forMultipleColumns : s.box
                    }
                  >
                    {item.thumbail == "" ? null : (
                      <img src={item.thumbail} alt="" className={s.img} />
                    )}
                    <div className={s.bottom}>
                      <div className={s.headPdf}>
                        <div className={s.head}>
                          {item.title == null ? null : (
                            <p className={s.heading}>{item.title}</p>
                          )}
                          {item.link == null ? null : (
                            <a
                              href={"https://" + item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={s.link}
                            >
                              {item.link}
                            </a>
                          )}
                        </div>
                        <div className={s.pdfImgBox}>
                          {item.documentURL == "" ? null : (
                            <a href={item.documentURL} download target="_blank">
                              <img src={pdfImg} alt="" className={s.pdfImg} />
                            </a>
                          )}
                        </div>
                      </div>
                      {item.description_1 == null ? null : (
                        <p className={s.para}> {item.description_1} </p>
                      )}
                      {item.description_2 == null ? null : (
                        <p className={s.para}> {item.description_2} </p>
                      )}
                      {/* video_url */}
                      {item.videoURL == "" ? null : (
                        <div>
                          {/* {console.log("videoVideo", video)} */}
                          <button
                            className={s.videobtn}
                            onClick={() => {
                              setshowVideo(!showVideo);
                              setvideo(item.videoURL);
                            }}
                          >
                            Video
                          </button>
                          {/* {showVideo ? (
                          // <Draggable>
                          <div className={s.videoBox}>
                            <div
                              className={s.vidcloseBtn}
                              onClick={() => setshowVideo(false)}
                            >
                              <span class="material-icons videoClose">
                                cancel
                              </span>
                            </div>
                            <video className={s.video} controls>
                              <source src={item.videoURL} />
                            </video>
                          </div>
                        ) : //</Draggable>
                        null} */}
                        </div>
                      )}
                      {item.link == null ? null : (
                        <a
                          href={"https://" + item.link}
                          target="_blank"
                          className={s.btn1Box}
                          rel={"external"}
                        >
                          <Button1 />
                        </a>
                      )}
                      {item.documentURL == "" ? null : (
                        <a
                          href={item.documentURL}
                          target="_blank"
                          download
                          className={s.downloadBtnBox}
                        >
                          {" "}
                          <DownloadButton />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
          </div>
          {props.fromSubjectContent == true ? (
            <Button2
              reqBody={reqBody}
              reDirect="/ViewAll"
              currentResourseId2={props.content[0].split("_")[1]}
              currentResourseName={props.content[0].split("_")[0]}
            />
          ) : null}
        </div>
      )}
    </>
  );
}

export function Button1(props) {
  return (
    <>
      <button className={s.btn1}>
        <div> Visit </div>
        <span class="material-icons subjecBtn1">east</span>
      </button>
    </>
  );
}

export function Button2(props) {
  return (
    <>
      <Link
        to={props.reDirect}
        state={{
          reqBody: props.reqBody,
          currentResourseId2: props.currentResourseId2,
          currentResourseName: props.currentResourseName,
        }}
        className={s.btn2Box}
      >
        <button className={s.btn2}>
          <div>View All</div>{" "}
          <span class="material-icons subjecBtn2">east</span>
        </button>
      </Link>
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

// export function OtherVariousSites() {
//   return (
//     <>
//       <div className={s.oContainer}>
//         <div className={s.container}>
//           {onlineResourseContent?.map((item) => (
//             <div className={s.box}>
//               <div className={s.bottom}>
//                 <p className={s.heading}>{item.heading}</p>
//                 <div className={s.bottombox}>
//                   <p className={s.link}> {item.link} </p>
//                   <Button1 />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <Button2 />
//       </div>
//     </>
//   );
// }
