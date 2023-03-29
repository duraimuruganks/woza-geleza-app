import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import styles from "./Privacy.module.css";
const Privacy = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div>
          <h4 className={styles.title}>Privacy Policy</h4>

          <p className={styles.date}>Last Updated on 10th Nov, 2021</p>
        </div>
        <div className={styles.content}>
          <h4>Definitions</h4>
          <ul>
            <li>“this web site” means https://www.woza-geleza.com</li>
            <li>
              "the web site owner" and "we" means Woza Geleza, its sponsors, and
              the operators of this web site
            </li>
            <li>
              “Woza Geleza” is an educational platform that houses a collection
              of learning materials and resources for students across South
              Africa
            </li>
            <li>"user" means any person accessing any part of the web site</li>
          </ul>
          <h4>Status and Amendments</h4>
          <h6>
            This Privacy Policy forms part of the Terms and conditions of use of
            this web site. If you do not agree with this Policy then you may not
            use this web site.
          </h6>
          <h6>
            The web site owner reserves the right to amend the terms and
            conditions of this Privacy Policy at any time. While the web site
            owner will attempt to flag changes to this Policy as and when
            implemented, users remain at all times responsible for ensuring that
            they are aware of the current terms of this Policy whenever
            accessing this web site, and continued use of the site subsequent to
            any amendments having been affected constitutes users' acceptance of
            the Policy as amended.
          </h6>
          <h4>Collection of personal data</h4>
          {/* <h6>
            Where personal information (such as your name, address, telephone
            number and e-mail address) is submitted to the site by the user, for
            example through sending an e-mail or filling in required fields, the
            following principles are observed in the handling of that
            information:
          </h6> */}
          <ol>
            <li>
              This web site collects, processes and stores only such personal
              information regarding users as is necessary to provide the
              services offered. The specific purpose for which information is
              collected is apparent from the context in which it is requested.
            </li>
            <li>
              This web site will not use the personal information submitted for
              any other purpose other than the efficient provision of services,
              including this web site and services offered through it by
              third-parties, without obtaining the prior written approval of the
              user or unless required to do so by law.
            </li>
            <li>
              This web site will keep records of all personal information
              collected and the specific purpose for which it was collected for
              a period of one year from the date on which it was last used.
            </li>
            <li>
              This web site will not disclose any personal information regarding
              a user to any third-party unless the prior written agreement of
              the user is obtained or the web site is required or permitted to
              do so by law.
            </li>
            <li>
              If information is released with the user's consent this web site
              will retain a record of the information released, the third-party
              to which it was released, the reason for the release and the date
              of release, for a period of one year.
            </li>
            <li>
              This web site will destroy or delete any personal information
              under its control which has become obsolete.
            </li>
          </ol>
          <h6>
            Information collected about users through their use of this web site
            is the property of the web site owner.
          </h6>
          <h6>
            The web site owner will retain all ownership of and copyright in any
            database of users' personal information.
          </h6>
          <h4>Access to personal data</h4>
          <h6>
            Where a user believes that personal data concerning them held by the
            web site owner is outdated or incorrect, they may request that such
            personal data be corrected - please contact us. Any request for such
            a correction must specify both the incorrect data and the proposed
            correction and must give full reasons for the request.
          </h6>
          {/* <h6>
            Users can request access to any relevant personal data held by the
            web site owner as laid out in the Promotion of Access to Information
            Act No 2 of 2000 (“PAIA”) and where such access is necessary for
            them to exercise and/or protect any of their rights.
          </h6> */}
          <h6>
            Detailed information on PROATIA and the procedure to follow in
            making a request for access to personal data is available in the web
            site owner’s Promotion of Access to Information Manual and from the
            web site of the Human Rights Commission – https://www.sahrc.org.za/
            .
          </h6>
          <h4>Links to other web sites</h4>
          <h6>
            Our website contains links that lead to other websites. If you click
            on these links we cannot be held responsible for your data and
            privacy protection. Visiting those websites is not governed by this
            privacy policy agreement. We have no control over and accept no
            responsibility for the privacy practices of any third party sites to
            which hyperlinks may have been provided and we strongly recommend
            that you review the privacy policy of any site you visit before
            using it further.
          </h6>
          <h4>Security</h4>
          <h6>
            While reasonable measures are taken to ensure the security and
            integrity of information submitted to this site, this web site can
            not under any circumstances be held liable for any loss or other
            damage sustained by a user or users as a result of the intentional
            or accidental release of information by an employee of the web site
            owner or any third party.
          </h6>
          <h6>
            Users and/or subscribers are prohibited from releasing their
            username and/or password to any other person.
          </h6>
          <h4>Children's privacy</h4>
          <h6>
            We regard the safety and privacy of children using this web site
            extremely seriously but it remains the ultimate responsibility of
            the parents and other care-givers of children to ensure that they
            are not exposed to inappropriate content or behaviour.
          </h6>
          <h4>Queries</h4>
          <h6>
            If you have any queries about this Privacy Policy please contact
            AASAEducation@angloamerican.com
          </h6>
          <h6>Date of Last Review Nov 8th, 2021</h6>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Privacy;
