import "./ProjectHP.css";
import ServicesCardsHP from "../Cards/ServicesCardsHP";
import LettersMoving from "./LettersMoving";
import Projects from "./Projects";
import Services1 from "../../Assets/Cards/ServicesHP/ServicesCardImg1.png";
import Services2 from "../../Assets/Cards/ServicesHP/ServicesCardImg2.png";
import Services3 from "../../Assets/Cards/ServicesHP/ServicesCardImg3.png";

import {Bounce,Fade,Zoom} from "react-awesome-reveal";

const ProjectHP = () => {
  return(
    <div className={"ProjectHPContainer"}>
      {/*Services - UP*/}
      <div className={"ProjectHpServices"}>
        <Bounce duration={1500} >
          <h1 className={"ServicesTitle"}>Unlock Revenue Growth for <span>Your Business</span></h1>
        </Bounce>
        <div className={"ServicesCardsContent"}>
          <Fade damping={0.6} triggerOnce={true} direction={"right"} cascade>
            <ServicesCardsHP CardPhoto={Services2}/>
            <ServicesCardsHP CardPhoto={Services1}/>
            <ServicesCardsHP CardPhoto={Services3}/>
          </Fade>
        </div>
      </div>

      {/*Text Animated - Middle*/}
        <LettersMoving />

      {/*Down - Down*/}
      <div className={"ProjectMainContainer"}>
        <Bounce duration={1500} >
          <h1 className={"ServicesTitle"}>We Work to Craft Solid Products & <span>Project</span> For You</h1>
        </Bounce>
        <Projects />
      </div>

    </div>
  )
};export default ProjectHP;