import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styles from "./Help1.module.css";
import Toast from "./Features/Toast";
import { useState, useEffect } from "react";
import { usePostFetch } from "../../Api/services";
import { baseUrl } from "../UrlList";

const Help1 = () => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Comment, setComment] = useState("");
  const [ButtonDisable, setButtonDisable] = useState(true);
  const [ShowToast, setShowToast] = useState(false);

  // const [res, setres] = useState();
  // const [loading, setloading] = useState();

  const [url, seturl] = useState(null);
  const [reqBody, setreqBody] = useState(null);

  const ButtonVariable = ButtonDisable;

  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowToast(false);
  //   }, 5000);
  // }, [ShowToast]);

  function handleLeave() {}

  function handleChange(event) {
    const { name, value } = event.target;
    if (name == "FirstName") setFirstName(value);
    if (name == "LastName") setLastName(value);
    if (name == "Email") setEmail(value);
    if (name == "Comment") setComment(value);
    if (FirstName == "" || Email == "" || Comment == "") setButtonDisable(true);

    if (FirstName !== "" && Email !== "" && Comment !== "")
      setButtonDisable(false);
    // else setButtonDisable(true);
  }

  function toastBack(ToastParams) {
    setShowToast(ToastParams);
  }

  const { data, loading } = usePostFetch(url, reqBody);

  function formsubmit() {
    event.preventDefault();
    // setButtonDisable(true);
    const url = baseUrl + "help";
    const resBody = {
      firstName: FirstName,
      lastName: LastName,
      email: Email,
      comment: Comment,
    };
    seturl(url);
    setreqBody(resBody);
    // const { data, loading } = usePostFetch(helpUrl, resBody);
    // setres(data);
    // setloading(loading);

    window.scrollTo({ top: 0 });
    setShowToast(true);
  }

  function ScrollTop() {
    window.scrollTo({ top: 0 });
  }
  return (
    <>
      {/* {console.log(
        "data",
        data == undefined ? "nodata" : data,
        "loading",
        loading == undefined ? "noLoading" : loading
      )} */}
      <div className={styles.help1}>
        <Navbar />
        {ShowToast ? (
          <div className={styles.toast}>
            <Toast func={toastBack} />
          </div>
        ) : (
          <div className={styles.helpandcontactus}>
            <form className={styles.helpandcontactusform} onSubmit={formsubmit}>
              <div className={styles.helpandcontactustitles}>
                <h3
                  className={styles.helpandcontactustitle}
                >{`Help & Contact Us`}</h3>
                <div className={styles.helpandcontactustitlesubbox}>
                  <h5 className={styles.helpandcontactustitle11}>
                    Contact Information
                  </h5>
                  <h6 className={styles.helpandcontactustitle12}>
                    If you have any enquiries, please contact us below.
                  </h6>
                </div>
              </div>
              <div className={styles.helpandcontactusinputbox}>
                <div className={styles.helpandcontactusfirstnamebox}>
                  <div className={styles.helpandcontactusfirstnamelable}>
                    <label className={styles.firstname} htmlFor="helpFirstName">
                      First Name
                    </label>
                    <sup className={styles.firstname1}>*</sup>
                  </div>
                  <input
                    required
                    onChange={handleChange}
                    onBlur={handleLeave}
                    className={styles.firstnameinput}
                    type="text"
                    placeholder="Example: John"
                    id="FirstName"
                    name="FirstName"
                  />
                </div>
                <div className={styles.helpandcontactusfirstnamebox}>
                  <div className={styles.helpandcontactusfirstnamelable1}>
                    <label className={styles.firstname} htmlFor="helpLastName">
                      Last Name
                    </label>
                  </div>
                  <input
                    onChange={handleChange}
                    onBlur={handleLeave}
                    className={styles.firstnameinput}
                    type="text"
                    placeholder="Example: Michelline"
                    id="LastName"
                    name="LastName"
                  />
                </div>
                <div className={styles.helpandcontactusfirstnamebox}>
                  <div className={styles.helpandcontactusfirstnamelable}>
                    <label className={styles.firstname} htmlFor="helpEmail">
                      Email
                    </label>
                    <sup className={styles.firstname1}>*</sup>
                  </div>
                  <input
                    onChange={handleChange}
                    onBlur={handleLeave}
                    type="email"
                    required
                    className={styles.firstnameinput}
                    placeholder="Example: craig-gibbs@geleza.co"
                    id="Email"
                    name="Email"
                  />
                </div>
                {/* <div className={styles.helpandcontactusfirstnamebox}>
                  <div className={styles.helpandcontactusfirstnamelable}>
                    <label className={styles.firstname} htmlFor="qweryType">
                      Query Type
                    </label>
                    <sup className={styles.firstname1}>*</sup>
                  </div>
                  <select
                    required
                    className={styles.firstnameinput}
                    id="qweryType"
                  >
                    <option value="">Select</option>
                    <option value="Content">Content</option>
                    <option value="Technical">Technical</option>
                    <option value="Others">Others</option>
                  </select>
                </div> */}
                <div className={styles.helpandcontactusfirstnamebox}>
                  <div className={styles.helpandcontactusfirstnamelable}>
                    <label className={styles.firstname} htmlFor="helpComment">
                      Comment
                    </label>
                    <sup className={styles.firstname1}>*</sup>
                  </div>
                  <textarea
                    onChange={handleChange}
                    onBlur={handleLeave}
                    className={styles.commentinput}
                    placeholder="I want some information."
                    rows={2}
                    cols={10}
                    id="Comment"
                    name="Comment"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className={styles.helpandcontactusbutton}
                // onClick={ScrollTop}
              >
                <span className={styles.helpandcontactusbuttontext}>Send</span>
              </button>
            </form>
          </div>
        )}
        <Footer />
      </div>
    </>
  );
};

export default Help1;
