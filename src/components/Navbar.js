import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import Drawer from "../components/Drawer";
import PortalDrawer from "../components/PortalDrawer";
import { signInpageLink } from "../pages/UrlList";
import styles from "./Navbar.module.css";

const Navbar = (props) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = useCallback(() => {
    setDrawerOpen(true);
  }, []);

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
  }, []);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navContent}>
          <Link
            to="/"
            state={{ currenFilterSearchValueFromLogo: undefined }}
            className={styles.homelink}
            onClick={props.resetSearchStates}
          >
            <img
              className={styles.navLogoIcon}
              alt=""
              src="../wozagalezalogo2xpng.svg"
            />
          </Link>
          <div className={styles.navContentLinks}>
            <div className={styles.navContentLinks1}>
              <Link to="/Notice" className={styles.navLinkNoticeBoard}>
                Notice Board
              </Link>
              <Link to="/FAQ" className={styles.navLinkFaq}>
                FAQ
              </Link>
              <Link to="/Help" className={styles.navLinkHelp}>
                Help
              </Link>
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
        <button className={styles.toggleButton} onClick={openDrawer}>
          <img
            className={styles.toogleBtnImageIcon}
            alt=""
            src="../component-2.svg"
          />
        </button>
      </nav>
      {isDrawerOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeDrawer}
        >
          <Drawer onClose={closeDrawer} />
        </PortalDrawer>
      )}
    </>
  );
};

export default Navbar;
