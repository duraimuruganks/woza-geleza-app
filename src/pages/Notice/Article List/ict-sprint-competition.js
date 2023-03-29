import React from "react";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import ArticleContent from "../Components/ArticleContent";
import ArticleHeading from "../Components/Article Heading";
function IctSprintCompetition() {
  const backText = "Go back to notice board";

  const ContentHeading = "ICT Sprint Competition (Flyer)";
  const ContentDate = "Uploaded on  8th Nov, 2021";
  const ContentPara = [
    "AASA Schools programme has been running a series of competitions to encourage Grade 12 learners to get involved in ICT related activities. The first ICT sprint was used to identify 150 learners who were enrolled in a set of IT Google courses through Coursera. The second ICT sprint involved learners submitting Memes related to Heritage Day with the winners awarded a prize and their classmates treated to pizzas and drinks.",
    "AASA Schools Programme will be running similar ICT sprints over the next year.",
  ];
  const ContentImg =
    "./Notice Board/ict-sprint-competition/ict-sprint-competition.jpg";
  return (
    <>
      <Navbar />
      <ArticleHeading btnText={backText} />
      <ArticleContent
        head={ContentHeading}
        date={ContentDate}
        multiPara={ContentPara}
        Img={ContentImg}
      />
      <Footer />
    </>
  );
}

export default IctSprintCompetition;
