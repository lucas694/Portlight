import "./ProjectHP.css";
import ServicesCardsHP from "../Cards/ServicesCardsHP";
import ProjectCard from "../Cards/ProjectCard";
import {GetProjectsData} from "../Utils/Utils";
import LettersMoving from "./LettersMoving";

const ProjectHP = () => {
  const ProjectsData = GetProjectsData();

  return(
    <div className={"ProjectHPContainer"}>
      {/*Services - UP*/}
      <div className={"ProjectHpServices"}>
        <h1 className={"ServicesTitle"}>Unlock Revenue Growth for <span>Your Business</span></h1>
        <div className={"ServicesCardsContent"}>
          <ServicesCardsHP />
          <ServicesCardsHP />
          <ServicesCardsHP />
        </div>
      </div>

      {/*Text Animated - Middle*/}
        <LettersMoving />

      {/*Down - Down*/}
      <div className={"ProjectMainContainer"}>
        <h1 className={"ServicesTitle"}>We Work to Craft Solid Products & <span>Project</span> For You</h1>
        <div className={"ProjectCardsContent"}>
          {ProjectsData.map((item, index) => {
            return(
              <ProjectCard
                key={index}
                CardImg={item.CardImg}
                CardTitle={item.CardTitle}
                CardType={item.CardType}
              />
            )})
          }
        </div>

      </div>

    </div>
  )
};export default ProjectHP;