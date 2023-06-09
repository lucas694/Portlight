import "./AboutUs.css";
import AboutUsBanner from "../AboutUs/AboutUsBanner";
import AboutMain from "../AboutUs/AboutMain";
import Values from "../AboutUs/Values";
import FAQ from "../AboutUs/FAQ";
import NewsLetter from "../NewsLetter";
import {useEffect} from "react";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return(
    <div className={"AboutUsContainer"}>
      <AboutUsBanner />
      <AboutMain />
      <Values />
      <FAQ />
      <NewsLetter />
    </div>
  )
};export default AboutUs;