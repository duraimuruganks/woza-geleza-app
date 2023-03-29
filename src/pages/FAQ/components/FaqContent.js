import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Icon,
  Typography,
} from "@mui/material";
import styles from "./FaqContent.module.css";
import downArrow from "../../../Images/icons/down-arrow.png";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { useFetch } from "../../../Api/services";
import { baseUrl } from "../../UrlList";

const FaqContent = () => {
  const url = baseUrl + "content/list/faq";
  // Example : contentType = notice-board or

  const { data, loading } = useFetch(url);

  return (
    <>
      {/* {console.log("url", url)} */}
      {
        // console.log("data", data)
        // console.log("data.data.data.message", data.data.message)
      }

      <Navbar />

      <div className={styles.faqcontent}>
        <h3 className={styles.title}>FAQs</h3>
        {loading ? (
          <h3>Loading...</h3>
        ) : data == undefined ? null : data.data.success == false ? (
          <h1>{data.data.message}</h1>
        ) : (
          <div className={styles.accordians}>
            <div className={styles.left}>
              {data?.data.success == false ? (
                <h1>{data?.data.message}</h1>
              ) : (
                data?.data.data
                  .slice(0, Math.ceil(data?.data.data.length / 2))
                  .map((val) => (
                    <div className={styles.accordian}>
                      <Accordion className={styles.accordianBox}>
                        <AccordionSummary
                          expandIcon={
                            // <img
                            //   src={downArrow}
                            //   alt="v"
                            //   style={{ width: "27px" }}
                            // />
                            <span class="material-icons faqExpand">
                              expand_more
                            </span>
                          }
                          className={styles.accordianTitleHead}
                        >
                          <Typography className={styles.accordianTitle}>
                            {val.questions}
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography className={styles.accordianPara}>
                            {val.answer}
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    </div>
                  ))
              )}
            </div>
            <div className={styles.right}>
              {data?.data.data
                .slice(
                  Math.ceil(data?.data.data.length / 2),
                  data?.data.data.length
                )
                .map((val) => (
                  <div className={styles.accordian}>
                    <Accordion className={styles.accordianBox}>
                      <AccordionSummary
                        expandIcon={
                          // <img
                          //   src={downArrow}
                          //   alt="v"
                          //   style={{ width: "27px" }}
                          // />
                          <span class="material-icons faqExpand">
                            expand_more
                          </span>
                        }
                        className={styles.accordianTitleHead}
                      >
                        <Typography className={styles.accordianTitle}>
                          {val.questions}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography className={styles.accordianPara}>
                          {val.answer}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                ))}
            </div>
            {/* <div className={styles.accordiansLeft}>
            <Accordion className={styles.accordian}>
              <AccordionSummary
                expandIcon={
                  <img src={downArrow} alt="v" style={{ width: "27px" }} />
                }
                className={styles.accordianTitleHead}
              >
                <Typography className={styles.accordianTitle}>
                  What is Woza Geleza?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={styles.accordianPara}>
                  Woza Geleza is a platform that provides zero – rated and free
                  education content, learning materials to students, educators
                  and school administrators.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <div>
              <Accordion className={styles.accordian}>
                <AccordionSummary
                  expandIcon={
                    <img src={downArrow} alt="v" style={{ width: "27px" }} />
                  }
                  className={styles.accordianTitleHead}
                >
                  <Typography className={styles.accordianTitle}>
                    Are there any certified courses on Woza Geleza?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className={styles.accordianPara}>
                    Some of the ICT courses provide certification upon
                    completion.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div>
              <Accordion className={styles.accordian}>
                <AccordionSummary
                  expandIcon={
                    <img src={downArrow} alt="v" style={{ width: "27px" }} />
                  }
                  className={styles.accordianTitleHead}
                >
                  <Typography className={styles.accordianTitle}>
                    Does Woza Geleza platform cater only for learners?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className={styles.accordianPara}>
                    No, the Woza Geleza platform caters for various persons
                    including School Management Teams, Teachers, Educators,
                    Coaches, students, and the Youth.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div>
              <Accordion className={styles.accordian}>
                <AccordionSummary
                  expandIcon={
                    <img src={downArrow} alt="v" style={{ width: "27px" }} />
                  }
                  className={styles.accordianTitleHead}
                >
                  <Typography className={styles.accordianTitle}>
                    What is the Notice Board?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className={styles.accordianPara}>
                    The Notice Board is Woza Geleza’s section to keep you
                    informed about new materials, challenges, and competitions.
                  </Typography>
                </AccordionDetails>
              </Accordion>{" "}
            </div>
          </div>
          <div className={styles.accordiansLeft}>
            <Accordion className={styles.accordian}>
              <AccordionSummary
                expandIcon={
                  <img src={downArrow} alt="v" style={{ width: "27px" }} />
                }
                className={styles.accordianTitleHead}
              >
                <Typography className={styles.accordianTitle}>
                  Is it free to access the courses on Woza Geleza?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={styles.accordianPara}>
                  Most of the resources on the platform are zero rated, meaning
                  you will not require data to download or access. However, a
                  stable internet connection is required.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <div>
              <Accordion className={styles.accordian}>
                <AccordionSummary
                  expandIcon={
                    <img src={downArrow} alt="v" style={{ width: "27px" }} />
                  }
                  className={styles.accordianTitleHead}
                >
                  <Typography className={styles.accordianTitle}>
                    What if I cannot find the course I am looking for on the
                    Woza Geleza platform?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className={styles.accordianPara}>
                    If there is specific content that you are looking for,
                    please do email us using the “contact us” or “help” options.
                  </Typography>
                </AccordionDetails>
              </Accordion>{" "}
            </div>
            <div>
              <Accordion className={styles.accordian}>
                <AccordionSummary
                  expandIcon={
                    <img src={downArrow} alt="v" style={{ width: "27px" }} />
                  }
                  className={styles.accordianTitleHead}
                >
                  <Typography className={styles.accordianTitle}>
                    Are the materials on Woza Geleza available in other
                    languages other than English?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className={styles.accordianPara}>
                    The resources provided are all available in English, but
                    some are available in other languages. Please check the
                    various links per resource to see which language it is
                    available in.
                  </Typography>
                </AccordionDetails>
              </Accordion>{" "}
            </div>
            <div>
              <Accordion className={styles.accordian}>
                <AccordionSummary
                  expandIcon={
                    <img src={downArrow} alt="v" style={{ width: "27px" }} />
                  }
                  className={styles.accordianTitleHead}
                >
                  <Typography className={styles.accordianTitle}>
                    Can anyone in South Africa use this platform?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className={styles.accordianPara}>
                    Yes, this platform is open to all students, educators and
                    school administration in South Africa.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div> */}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default FaqContent;
