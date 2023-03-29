import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styles from "./Home1.module.css";
import s from "./Home2.module.css";
import Overlay1 from "./components/Overlay1";
import Content1 from "./components/Content1";
import Search from "./components/Search";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { OnlineResourse } from "../Subjects/Components/OnlineResourse";
import MyPagination from "../../components/pagination";
import { baseUrl } from "../UrlList";
import GoogleTranslateButton from "../../GoogleTranslateButton/GoogleTranslateButton";

const Home1 = () => {
  const [loading, setLoading] = useState(false);
  const [studentOverlay, setStudentOverlay] = useState(false);
  const [profile, setProfile] = useState(null);
  const [filterGradeList, setfilterGradeList] = useState(null);
  const [filterSubjectList, setfilterSubjectList] = useState(null);
  // const [subMenuList, setsubMenuList] = useState([]);

  const [currentTypeId, setCurrentTypeId] = useState();
  const [profile_SubMenu_Pair, setprofile_SubMenu_Pair] = useState();
  //search
  const [filterCurrentSearchValue, setfilterCurrentSearchValue] =
    useState(null);
  const [filterCurrentGradeId, setfilterCurrentGradeId] = useState(null);
  const [filterCurrentSubjectId, setfilterCurrentSubjectId] = useState(null);
  const [filterCurrentPage, setfilterCurrentPage] = useState(1);
  const [filterCurrentResponse, setfilterCurrentResponse] = useState();

  const [reSetSearchValues, setreSetSearchValues] = useState();

  //fom Navbar lonk state
  // const location = useLocation();
  // let { currenFilterSearchValueFromLogo } = location.state;
  // useEffect(() => {
  //   // setfilterCurrentResponse(currenFilterSearchValueFromLogo);
  //   setfilterCurrentSearchValue(undefined);
  //   setfilterCurrentGradeId(undefined);
  //   setfilterCurrentSubjectId(undefined);
  // }, [currenFilterSearchValueFromLogo]);

  // populate user, grades

  //fetch data from api start
  const profileUrl = baseUrl + "profile/list/";
  const subMenuUrl = baseUrl + "sub/menu/list/";
  const filterGradeUrl = baseUrl + "filter/grade/list";
  const filterSubjectUrl = baseUrl + "filter/subject/list";
  const searchListUrl = baseUrl + "filter/search/list";

  let subMenuList = [];
  // let profile_SubMenu_Pair;
  // let currentTypeId;

  useEffect(() => {
    // subMenuList = [];
    const title = () => {
      document.title = "Home | Woza Geleza";
    };
    title();
    const fetchData = async () => {
      const fetchProfile = await axios.get(profileUrl).then(function (res) {
        // console.log("res", res);
        // console.log("res?.data.success", res?.data.message);

        res.data.success == false ? setProfile(null) : setProfile(res.data);
        return res.data;
      });

      await fetchProfile?.data?.map(async (value, index) => {
        // console.log("value", value);
        // console.log("subMenuUrl", subMenuUrl);
        await axios.get(subMenuUrl + value.typeID).then(function (res) {
          // console.log("res", res);
          subMenuList.push(res);
        });
        // console.log("profileprofileprofile", fetchProfile.data);
        //q

        // console.log("subMenuListsubMenuList", subMenuList);
        // setprofile_SubMenu_Pair(
        //   fetchProfile.data.map((val, index) => ({
        //     [val.typeID]: subMenuList[index],
        //   }))
        // );
        // console.log("profile_SubMenu_Pair", profile_SubMenu_Pair);
      });
      await axios.get(filterGradeUrl).then(function (res) {
        setfilterGradeList(res.data);
        return res.data;
      });
      await axios.get(filterSubjectUrl).then(function (res) {
        setfilterSubjectList(res.data);
        return res.data;
      });
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])

  const navigate = useNavigate();
  function navigateToNotice() {
    navigate("/Notice");
  }
  // grade overlay show hide

  function OnOverlay(id) {
    setCurrentTypeId(id);
    setStudentOverlay(true);
  }

  function OffOverlay() {
    setStudentOverlay(false);
  }
  function leaveOverlay() {
    setStudentOverlay(false);
  }

  function OnClickOverlay(para1, para2) {
    setCurrentTypeId(para1);
    setStudentOverlay(para2);
  }

  // student, Teacher onclick event
  let studentProfileId = profile == null ? null : profile.data[0].typeID;
  let TeacherProfileId = profile == null ? null : profile.data[2].typeID;
  const firstOverlay = document.getElementById("firstOverlay");

  function scrollToOverlay(id) {
    setCurrentTypeId(id);
    window.scrollTo(0, firstOverlay);
    setStudentOverlay(true);
  }

  //search
  function handleCurrentSearchValueAndId(
    filterSearchValue,
    filterCurrentGradeId,
    filterCurrentSubjectId
  ) {
    setfilterCurrentSearchValue(filterSearchValue);
    setfilterCurrentGradeId(filterCurrentGradeId);
    setfilterCurrentSubjectId(filterCurrentSubjectId);
  }
  let searchRequestBody = {
    gradeID: filterCurrentGradeId,
    subjectID: filterCurrentSubjectId,
    search: filterCurrentSearchValue,
    page: filterCurrentPage,
    limit: 12,
  };
  // {
  //   gradeID: filterCurrentGradeId,
  //   subjectID: filterCurrentSubjectId,
  //   search: filterCurrentSearchValue,
  //   page: filterCurrentPage,
  //   limit: 100,
  // };

  useEffect(() => {
    const fetchData = async () => {
      filterCurrentSearchValue == null &&
      filterCurrentGradeId == null &&
      filterCurrentSubjectId == null
        ? setfilterCurrentResponse(undefined)
        : // filterCurrentSearchValue == ""
          // ? setfilterCurrentResponse(undefined)

          // :
          // : filterCurrentGradeId == undefined
          // ? setfilterCurrentResponse(undefined)
          // : filterCurrentSubjectId == undefined
          // ? setfilterCurrentResponse(undefined)
          // console.log(
          //   " before api call filterCurrentResponse ",
          //   filterCurrentResponse
          // );
          await axios.post(searchListUrl, searchRequestBody).then((res) => {
            setfilterCurrentResponse(res);
            // console.log("filterCurrentResponse 1111111", filterCurrentResponse);
          });
    };
    fetchData();
  }, [
    filterCurrentSearchValue,
    filterCurrentGradeId,
    filterCurrentSubjectId,
    filterCurrentPage,
  ]);

  function resetSearchStates() {
    // setfilterCurrentSearchValue(null);
    // setfilterCurrentGradeId(null);
    // setfilterCurrentSubjectId(null);
    // setfilterCurrentPage(1);
    window.location.reload();
  }

  //pagination
  function functionSetcurrentPage(param) {
    setfilterCurrentPage(param);
  }

  return (
    <>
      {/* {console.log(
        "filterCurrentResponse",
        filterCurrentResponse == undefined
          ? filterCurrentResponse
          : filterCurrentResponse.data.data.result
      )} */}
      {/* {console.log(
        "profile",
        profile,
        "subMenuList",
        subMenuList,
        "setprofile_SubMenu_Pair",
        profile_SubMenu_Pair
      )} */}
      {/* {console.log("searchRequestBody", searchRequestBody)} */}
      {/* {console.log("filterCurrentSearchValue", filterCurrentSearchValue)} */}
      {/* {console.log("filterCurrentResponse", filterCurrentResponse)} */}

      <div className={styles.home1}>
        {/* {option} */}

        <span className={styles.home1} onClick={OffOverlay}>
          <Navbar resetSearchStates={resetSearchStates} />
        </span>

        <div className={styles.selector}>
          <div className={styles.userselector}>
            {loading
              ? null
              : profile?.success == false
              ? // <p>{profile?.message}</p>
                null
              : profile?.data?.map((item) => (
                  <div className={styles.selectorbox} key={item.typeID}>
                    <p
                      className={styles.learner}
                      onPointerEnter={
                        // item.name == "Teacher" ? OnOverlayTeacher : OnOverlay
                        () => OnOverlay(item.typeID)
                      }
                      onClick={() =>
                        OnClickOverlay(item.typeID, () =>
                          setStudentOverlay(true)
                        )
                      }
                    >
                      {item.name}
                    </p>
                    <div className={styles.divider} />
                  </div>
                ))}
          </div>

          <div className={styles.searchContent} onClick={OffOverlay}>
            <Search
              filterGradeListProps={filterGradeList}
              filterSubjectListProps={filterSubjectList}
              handleCurrentSearchValueAndId={handleCurrentSearchValueAndId}
            />
          </div>
        </div>

        {/* <div className={s.translateButtonBox}>
          <GoogleTranslateButton />
        </div> */}

        <div
          className={styles.firstOverlay}
          id="firstOverlay"
          style={{ display: studentOverlay ? "block" : "none" }}
          onMouseLeave={() => leaveOverlay()}
        >
          <Overlay1
            currentTypeId={currentTypeId}
            // pair={profile_SubMenu_Pair}
            // subMenuList={subMenuList}
          />
        </div>
        {filterCurrentResponse == undefined ? (
          <div>
            <div onClick={OffOverlay}>
              <Content1 />
            </div>

            <div className={styles.sponsorcontainer} onClick={OffOverlay}>
              <h3 className={styles.sponsors}>Sponsors</h3>
              <div className={styles.sponsorlist}>
                <img
                  className={styles.angloAmericanIcon}
                  alt=""
                  src="../anglo-americanpng@2x.png"
                  loading="lazy"
                />
                <img
                  className={styles.awsIcon}
                  alt=""
                  src="../awspng@2x.png"
                  loading="lazy"
                />
                <img
                  className={styles.ciscoIcon}
                  alt=""
                  src="../ciscopng@2x.png"
                  loading="lazy"
                />
                <img
                  className={styles.microsoftIcon}
                  alt=""
                  src="../microsoftpng@2x.png"
                  loading="lazy"
                />
                <div className={styles.sponsorlist1}>
                  <img
                    className={styles.linkedinIcon}
                    alt=""
                    src="../linkedinpng@2x.png"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className={styles.content2} onClick={OffOverlay}>
              <div className={styles.content2top}>
                <h3 className={styles.content2title}>About Our Content</h3>
                <p className={styles.content2para1}>
                  The content on this platform is aimed at assisting learners,
                  educators and school management teams to improve education
                  access, resource provision and ultimately outcomes. It
                  consists of various resources that are available online. We
                  have tried to catalogue the resources and information in a way
                  that is easy to navigate and use.
                </p>
                <p className={styles.content2para2}>
                  Most of the content on this platform is zero rated – meaning
                  you will not be charged data fees to download and access. We
                  are trying our best to remove as many barriers as possible to
                  learning.
                </p>
                <p className={styles.content2para2}>
                  We will continuously add to the platform as new resources,
                  material and content become available. If there are resources,
                  that you would like to access, but aren't available on this
                  platform, please reach out to us and let us know. We will try
                  our best to add it.
                </p>
              </div>
              <div className={styles.content2bottom}>
                <h3 className={styles.content2bottompara1}>
                  Working Together to Improve Learners' Educational Outcomes
                </h3>
                <p className={styles.content2bottompara2}>
                  This platform is sponsored by Anglo American as part of their
                  Anglo American South Africa Education Programme, an initiative
                  of our Sustainable Mining Plan. The Anglo American programme
                  is a holistic approach to education, from early childhood
                  learning through to matric.
                </p>
                <a
                  href="https://southafrica.angloamerican.com/our-difference/anglo-american-south-africa-education-programme"
                  target="_blank"
                >
                  <button className={styles.btn2}>
                    {/* <span className={styles.content2bottombuttontext}> */}
                    Learn More
                    {/* </span> */}
                  </button>
                </a>
              </div>
            </div>

            <div className={styles.content3}>
              <div className={styles.content31}>
                <div className={styles.content31left}>
                  {/* <div className={styles.content31leftimg1}>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="../vector.svg"
                  loading="lazy"
                />
              </div> */}
                  <img
                    className={styles.content31leftimg2Icon}
                    alt=""
                    src="./Photos for Dashboard/For School Management/SchoolManagement.jpg"
                    loading="lazy"
                  />
                </div>
                <div className={styles.content31rignt}>
                  <h3 className={styles.content31rignttitle}>
                    For School Management
                  </h3>
                  <p className={styles.content31rigntpara}>
                    This section is aimed at assisting school management teams
                    with resources to help you strengthen your governance,
                    oversight and overall administration. Login and registration
                    are required for this section. Should you need assistance,
                    please contact the help desk to get registered.
                  </p>
                  {/* <button className={styles.content31rigntbutton}>
                <span className={styles.content2bottombuttontext}>
                  Learn More
                </span>
              </button> */}
                </div>
              </div>
              <div className={styles.content32}>
                <div className={styles.content31rignt}>
                  <h3 className={styles.content32lefttitle}>For Teachers</h3>
                  <p className={styles.content31rigntpara}>
                    This section is aimed at teachers and school coaches. A
                    number of resources are provided including lesson plans,
                    past tests, activities and challenges that you can use for
                    your class and Learners. No registration or login required.
                  </p>
                  <button
                    onClick={() => scrollToOverlay(TeacherProfileId)}
                    className={styles.btn2}
                  >
                    {/* <span className={styles.content32leftbuttontext}> */}
                    Learn More
                    {/* </span> */}
                  </button>
                </div>
                <div className={styles.content31left}>
                  {/* <div className={styles.content32rightimg1}>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="../vector1.svg"
                  loading="lazy"
                />
              </div> */}
                  <img
                    className={styles.content32rightimg2Icon}
                    alt=""
                    src="./Photos for Dashboard/For Teachers and Educators/TeachersEducators.jpg"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className={styles.content33}>
                <div className={styles.content31left}>
                  {/* <div className={styles.content33leftimg1}>
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="../vector2.svg"
                  loading="lazy"
                />
              </div> */}
                  <img
                    className={styles.content33leftimg2Icon}
                    alt=""
                    src="./Photos for Dashboard/For Learner, Student and Youth/LearnerStudentYouth.jpg"
                    loading="lazy"
                  />
                </div>
                <div className={styles.content31rignt}>
                  <h3 className={styles.content33righttitle}>
                    For Learner and Youth
                  </h3>
                  <p className={styles.content31rigntpara}>
                    This section is aimed at learners and youth. It consists of
                    a number of resources available in the South African space
                    to help you improve your learning and education. Additional
                    resources will be continuously added. The content varies and
                    consists of materials, videos, and self paced training. Some
                    of the ICT courses offer accredited certification.
                  </p>
                  {/* <button onClick={scrollToStudentOverlay}> */}
                  <button
                    onClick={() => scrollToOverlay(studentProfileId)}
                    // className={styles.content31rigntbutton}
                    className={styles.btn2}
                  >
                    {/* <span className={styles.content33rightbuttontext}> */}
                    Learn More
                    {/* </span> */}
                  </button>
                  {/* </button> */}
                </div>
              </div>
            </div>
            <div className={styles.content4}>
              <div className={styles.imgAboveNoticeBox}>
                <img
                  className={styles.content41imgIcon}
                  alt="Image"
                  src="./Photos for Dashboard/Above Notice board/AboveNotice.jpg"
                  loading="lazy"
                />
              </div>
              <div className={styles.content42}>
                <div className={styles.content42content}>
                  <h3 className={styles.content42contenttitle}>Notice Board</h3>
                  <p className={styles.content42contentpara}>
                    Do check out the notice board for announcements on new
                    material, challenges and competitions that are open to
                    learners and educators. If you would like to make
                    announcements on our notice board, please do contact us.
                  </p>

                  <button
                    onClick={navigateToNotice}
                    // className={styles.content42contentbutton}
                    className={styles.btn2}
                  >
                    {/* <span className={styles.content42contentbuttontext}> */}
                    Go to Notice Board
                    {/* </span> */}
                  </button>
                </div>
                <div className={styles.content42background} />
                {/* <img
            className={styles.content42dotimgIcon}
            alt=""
            src="../dot2svg.svg"
          /> */}
              </div>
              <div className={styles.content43}>
                <div className={styles.content43img}>
                  <img
                    className={styles.path334Icon}
                    alt=""
                    src="../path-334.svg"
                    loading="lazy"
                  />
                </div>
                <p className={styles.content43quote}>
                  “Education is the most powerful weapon which you can use to
                  change the world.”
                </p>
                <p className={styles.content43authorname}>-- Nelson Mandela</p>
              </div>
            </div>

            <Footer />
          </div>
        ) : filterCurrentResponse?.data?.data?.result?.length == 0 ? (
          <h1 className={s.notFound}>{filterCurrentResponse.data.message}</h1>
        ) : (
          // filterCurrentResponse?.data.data.result.map((val) => (
          <div onClick={OffOverlay} className={s.searchResult}>
            {/* <div> */}
            <MyPagination
              viewAllContent={filterCurrentResponse}
              setcurrentPage={functionSetcurrentPage}
            />
            <OnlineResourse
              content={filterCurrentResponse?.data?.data?.result}
              forMultipleColumns={true}
            />
          </div>
          // ))
          // <h4>result</h4>
        )}
      </div>
    </>
  );
};

export default Home1;
