import styles from "./Toast.module.css";
import { Link } from "react-router-dom";

import React from "react";
//code for props pass from child to parent component?
const Toast = (props) => {
  function ToastClose() {
    props.func(false);
  }

  //code for props pass from child to parent
  return (
    <>
      <div className={styles.box}>
        <div className={styles.tick}>
          {/* <img className={styles.img} src="./icons/doneSvg.svg" /> */}
          <span class="material-icons helpToast">check</span>
        </div>
        <p className={styles.content}>Thanks for getting in touch with us. </p>
        <p className={styles.content}>
          We will contact you soon. <br />
        </p>
        <Link to="/">
          <button className={styles.btn}>Back to Home</button>
        </Link>
      </div>
    </>
  );
};
// Thank you for contacting us

export default Toast;
