import styles from "./GradeSubjects.module.css";
import arrow from "../Images/arrow.svg";
import { Link } from "react-router-dom";

const GradeSubjects = ({
  subjectImage,
  subTitle,
  background,
  backgroundImage,
  reDirect,
  // link,
  currentTypeId,
  currentGradeId,
  currentGradeNumber,
  currentSubjectId,
}) => {
  // console.log(link);
  return (
    <>
      {/* <div className={styles.container}> */}

      <Link
        to={reDirect}
        state={{
          PropDocumentTitle: subTitle,
          currentTypeId: currentTypeId,
          currentGradeId: currentGradeId,
          currentGradeNumber: currentGradeNumber,
          currentSubjectId: currentSubjectId,
        }}
        className={styles.topbox}
      >
        <div className={styles.imgBox}>
          <img className={styles.backgroundIcon} alt="" src={background} />
        </div>

        <div
          className={styles.topboxContent}
          style={{ backgroundImage: backgroundImage }}
        >
          <img className={styles.topboximgIcon} alt="" src={subjectImage} />
          <div className={styles.subbox}>
            <p className={styles.subtitle}>{subTitle}</p>
            <img className={styles.arrowIcon} alt="img" src={arrow} />
          </div>
        </div>
      </Link>

      {/* </div> */}
    </>
  );
};

export default GradeSubjects;
