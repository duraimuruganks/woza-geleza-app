import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import "./icons.css";
import { useEffect } from "react";
import Home1 from "./pages/home/Home1";
import Notice1 from "./pages/Notice/Notice1";
import Help1 from "./pages/Help/Help1";
import FAQPage from "./pages/FAQ/FAQPage";
import GradeContent from "./pages/Grade/GradeContent";
import OnlineResourses from "./pages/home/components/OnlineResourses";
import Terms from "./pages/Terms Privacy/Terms of use/Terms";
import Privacy from "./pages/Terms Privacy/Privacy Policy/Privacy";
import Ict from "./pages/Ict Training Program/Ict";
import Modules from "./pages/Modules/Modules";
import VendorName from "./pages/Subjects/VendorName";
import AngloAmericanIct from "./pages/Notice/Article List/AngloAmericanIct";
import HeritageDay from "./pages/Notice/Article List/HeritageDay";
import IctSprintCompetition from "./pages/Notice/Article List/ict-sprint-competition";
import TrainingMaterial from "./pages/Training Material/TrainingMaterial";
import ViewAll from "./pages/Subjects/ViewAll/ViewAll";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
  const pathTitle = pathname.slice(1) + " " + "|" + " " + "Woza Geleza";
  const pathTitleHome = "Woza Geleza";
  const NoticeBoardTitle = "Notice Board | " + pathTitleHome;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    // if (pathname == "/") title = pathTitleHome;
    // if (pathname == "/Notice Board") title = "Notice Board";
    // else title = pathTitle;

    // pathname == "/"
    //   ? (title = pathTitleHome)
    //   :
    pathname == "/Notice"
      ? (title = NoticeBoardTitle)
      : pathname == "/ict-champion-learnership"
      ? (title =
          "Anglo American ICT Education ICT Champion Learnership | Woza Geleza")
      : pathname == "/ICT-Sprint-Competition"
      ? (title = "ICT Sprint Competition (Flyer) | Woza Geleza")
      : null;

    let metaDescription = "";
    if (title) {
      document.title = title;
    }
    // if (metaDescription) {
    //   const metaDescriptionTag = document.querySelector(
    //     'head > meta[name="description"]'
    //   );
    //   if (metaDescriptionTag) {
    //     metaDescriptionTag.content = metaDescription;
    //   }
    // }
  }, [pathname]);

  useEffect(() => {
    const viewportMeta = document.querySelector('meta[name="viewport"]');
    if (window.matchMedia("(min-width: 601px)").matches) {
      viewportMeta.setAttribute(
        "content",
        "width=device-width, initial-scale=0.8"
      );
    }
    if (window.matchMedia("(max-width: 600px)").matches) {
      viewportMeta.setAttribute(
        "content",
        "width=device-width, initial-scale=1.0"
      );
    }
  }, []);

  return (
    <>
      <h1 id="google_translate_element"></h1>
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/Notice" element={<Notice1 />} />
        <Route
          path="/ict-champion-learnership"
          element={<AngloAmericanIct />}
        />
        <Route
          path="Heritage-Day-Meme-Competition-Winners"
          element={<HeritageDay />}
        />
        <Route
          path="/ICT-Sprint-Competition"
          element={<IctSprintCompetition />}
        />

        <Route path="/Help" element={<Help1 />} />
        <Route path="/FAQ" element={<FAQPage />} />
        <Route path="/Grade" element={<GradeContent />} />
        <Route path="Modules" element={<Modules />} />
        <Route path="/Subject" element={<VendorName />} />
        <Route path="/OnlineResourses" element={<OnlineResourses />} />
        <Route path="/Ict" element={<Ict />} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/Training-Material" element={<TrainingMaterial />} />
        <Route path="/ViewAll" element={<ViewAll />} />
      </Routes>
    </>
  );
}
export default App;
