import React, { useEffect } from "react";
import s from "./GoogleTranslateButton.module.css";

const GoogleTranslateButton = () => {
  useEffect(() => {
    const googleTranslateScript = document.createElement("script");
    googleTranslateScript.type = "text/javascript";
    googleTranslateScript.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    googleTranslateScript.async = true;
    console.log("googleTranslateScript", googleTranslateScript);

    document.head.appendChild(googleTranslateScript);

    // let testElement = document
    //   .getElementById("test")
    //   .appendChild(googleTranslateScript);

    // testElement.innerHTML = "hello";

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };
  }, []);

  return (
    <>
      <div id={s.box}>
        <div
          id={s.google_translate_element}
          className={s.google_translate_element}
        ></div>
      </div>
      <div id="test"></div>
    </>
  );
};

export default GoogleTranslateButton;
