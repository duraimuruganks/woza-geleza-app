import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styles from "./Drawer.module.css";
import noticeImg from "../Images/NavBar/Drawer/Notice Board_FILL1_wght400_GRAD0_opsz48.svg";
import faqImg from "../Images/NavBar/Drawer/FAQs_FILL1_wght400_GRAD0_opsz48.svg";
import helpImg from "../Images/NavBar/Drawer/Help_FILL1_wght400_GRAD0_opsz48.svg";
import { signInpageLink } from "../pages/UrlList";

const Drawer = ({ onClose }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  const navigate = useNavigate();
  function navigateTo() {
    navigate("/Notice");
  }

  function navigateTo2() {
    navigate("/FAQ");
  }

  function navigateTo3() {
    navigate("/Help");
  }

  return (
    <div className={styles.drawer} data-animate-on-scroll>
      <div className={styles.navContentLinks} data-animate-on-scroll>
        <div className={styles.innerContainer}>
          <div className={styles.navContentLinks1}>
            <div className={styles.box}>
              <img src={noticeImg} alt="" className={styles.beforeImg} />
              <p onClick={navigateTo} className={styles.navLinkNoticeBoard}>
                Notice Board
              </p>
            </div>
            <div className={styles.box}>
              <img src={faqImg} alt="" className={styles.beforeImg} />
              <p onClick={navigateTo2} className={styles.navLinkNoticeBoard}>
                FAQ
              </p>
            </div>
            <div className={styles.box}>
              <img src={helpImg} alt="" className={styles.beforeImg} />
              <p onClick={navigateTo3} className={styles.navLinkNoticeBoard}>
                Help
              </p>
            </div>
            {/* <Link to="/notice1" className={styles.navLinkNoticeBoard}>
            Notice Board
          </Link>
          <Link className={styles.navLinkFaq}>FAQ</Link>
          <Link to="/help1" className={styles.navLinkHelp}>
            Help
          </Link> */}
          </div>
          <a
            target="_blank"
            href=// "https://woza.geleza.admin.rudimax.com/"
            {signInpageLink}
          >
            <button className={styles.navLoginButton}>
              <span className={styles.login}>Login</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
