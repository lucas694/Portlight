import "./AboutUs.css";
import AboutUsBanner from "../AboutUs/AboutUsBanner";
import AboutMain from "../AboutUs/AboutMain";
import Values from "../AboutUs/Values";
import FAQ from "../AboutUs/FAQ";
import NewsLetter from "../NewsLetter";

const AboutUs = () => {
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