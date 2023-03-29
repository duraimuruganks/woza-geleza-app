import React from "react";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import ArticleContent from "../Components/ArticleContent";
import ArticleHeading from "../Components/Article Heading";
function HeritageDay() {
  const backText = "Go back to notice board";

  const ContentHeading = "Heritage Day Meme Competition (Winners)";
  const ContentDate = "Uploaded on  8th Nov, 2021";
  const ContentPara =
    "Here are the winners of the Meme Competition on Heritage Day.";
  const ContentImg = "./Notice Board/Heritage-Winner/Heritage-Winner.jpg";
  return (
    <>
      <Navbar />
      <ArticleHeading btnText={backText} />
      <ArticleContent
        head={ContentHeading}
        date={ContentDate}
        para={ContentPara}
        Img={ContentImg}
      />
      <Footer />
    </>
  );
}

export default HeritageDay;
