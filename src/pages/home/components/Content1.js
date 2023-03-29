import { Link } from "react-router-dom";
import styles from "./content1.module.css";
const Content1 = () => {
  return (
    <>
      <div className={styles.container}>
        {/* <div className={styles.content1} /> */}
        <div className={styles.box}>
          <div className={styles.left}>
            <h3 className={styles.title}>Let's learn together</h3>
            <p className={styles.para1}>
              Woza Geleza is an educational platform that houses a collection of
              learning materials and resources for learners across South Africa.
            </p>
            <p className={styles.para2}>
              This platform is sponsored by Anglo American and it partners in
              support of this initiative.
            </p>
            <div className={styles.content1buttons}>
              <button className={styles.ictbutton}>
                <Link to="/Ict">
                  <span className={styles.ictbuttoncontent}>
                    ICT Certified Courses
                  </span>
                </Link>
              </button>

              <button className={styles.dbebutton}>
                <a
                  href="https://dbecloud.org.za/login/welcome.php"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <div className={styles.dbebuttoncontent}>
                    <span className={styles.dbebuttontext}>DBE iCloud</span>
                    <img
                      className={styles.dbebuttonimgIcon}
                      alt=""
                      src="./homebuttonpng@2x.png"
                      loading="lazy"
                    />
                  </div>
                </a>
              </button>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.threeInOne}>
              <div className={styles.rightBox}>
                <img
                  className={styles.rightImg}
                  alt=""
                  src="./Photos for Dashboard/Let's learn together/Learn1.jpg"
                  loading="lazy"
                />
              </div>
              <div className={styles.rightBox}>
                <img
                  className={styles.rightImg}
                  alt=""
                  src="./Photos for Dashboard/Let's learn together/Learn2.jpg"
                  loading="lazy"
                />
              </div>
              <div className={styles.rightBox}>
                <img
                  className={styles.rightImg}
                  alt=""
                  src="./Photos for Dashboard/Let's learn together/Learn3.jpg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content1;
