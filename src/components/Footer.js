import { Link } from "react-router-dom";
import GoogleTranslateButton from "../GoogleTranslateButton/GoogleTranslateButton";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footercontent}>
        <div className={styles.footercontentleft}>
          <p className={styles.footercontentlefttitle}>Powered by</p>
          <a target="_blank" href="https://www.bluepearl.co.za/">
            <div className={styles.companyBox}>
              <img
                src="./Company Logos/BluePearl.png"
                alt=""
                className={styles.logo}
              />

              <div className={styles.footercontentleftcompany}>BLUE PEARL</div>
            </div>
          </a>
          <div className={styles.footercontentleftsociallinks}>
            <a target="_blank" href="https://www.facebook.com/AngloAmericanZA">
              <img
                className={styles.facebookIcon}
                alt=""
                src="./facebookpng@2x.png"
                loading="lazy"
              />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/showcase/anglo-american-in-south-africa/?viewAsMember=true"
            >
              <img
                className={styles.linkedinIcon}
                alt=""
                src="../linkedinpng1@2x.png"
                loading="lazy"
              />
            </a>
            <a target="_blank" href="https://twitter.com/AngloAmericanZA">
              <img
                className={styles.twitterIcon}
                alt=""
                src="../twitterpng@2x.png"
                loading="lazy"
              />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/angloamericanplc/"
            >
              <img
                className={styles.facebookIcon}
                alt=""
                src="../instagrampng@2x.png"
                loading="lazy"
              />
            </a>
          </div>
        </div>
        <div className={styles.footercontentleft}>
          <p className={styles.footercontentrightcompanyname}>
            © 2021 | WOZA GELEZA
          </p>
          <div className={styles.footercontentrightbox}>
            <Link to="/Terms" className={styles.footercontentrightboxterms}>
              Terms of use
            </Link>
            <div className={styles.footercontentrightboxprivacybo}>
              <Link
                to="/Privacy"
                className={styles.footercontentrightboxprivacy}
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.GoogleTranslateButton}>
          {/* <GoogleTranslateButton /> */}
        </div>
      </div>
      {/* <img className={styles.footerdotimgIcon} alt="" src="../dot2svg1.svg" /> */}
      {/* <p className={styles.footercompanyname}>Woza Geleza</p> */}

      {/* <div className={styles.footerplainbackgroung} /> */}

      <div className={styles.footerplainbackgroung2box}>
        <div className={styles.footerplainbackgroung2}>
          <div></div>
          <p className={styles.footerplainbackgroung2text}>WOZA GELEZA</p>
        </div>
      </div>
      <div className={styles.footercolorbackground2} />

      {/* <div className={styles.footercolorbackground} /> */}
    </div>
  );
};

export default Footer;
