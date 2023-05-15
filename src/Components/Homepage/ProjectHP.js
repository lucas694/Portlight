import "./ProjectHP.css";
import ServicesCardsHP from "../Cards/ServicesCardsHP";
import LettersMoving from "./LettersMoving";
import Projects from "./Projects";
import Services1 from "../../Assets/Cards/ServicesHP/ServicesCardImg1.png";
import Services2 from "../../Assets/Cards/ServicesHP/ServicesCardImg2.png";
import Services3 from "../../Assets/Cards/ServicesHP/ServicesCardImg3.png";

const ProjectHP = () => {
  return(
    <div className={"ProjectHPContainer"}>
      {/*Services - UP*/}
      <div className={"ProjectHpServices"}>
        <h1 className={"ServicesTitle"}>Unlock Revenue Growth for <span>Your Business</span></h1>
        <div className={"ServicesCardsContent"}>
          <ServicesCardsHP CardPhoto={Services2}/>
          <ServicesCardsHP CardPhoto={Services1}/>
          <ServicesCardsHP CardPhoto={Services3}/>
        </div>
      </div>

      {/*Text Animated - Middle*/}
        <LettersMoving />

      {/*Down - Down*/}
      <div className={"ProjectMainContainer"}>
        <h1 className={"ServicesTitle"}>We Work to Craft Solid Products & <span>Project</span> For You</h1>
        <Projects />
      </div>

    </div>
  )
};export default ProjectHP;