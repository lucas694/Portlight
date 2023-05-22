import {GetProjectsData} from "../Utils/Utils";
import ProjectCard from "../Cards/ProjectCard";
import "./Projects.css"

import {JackInTheBox} from "react-awesome-reveal";

const Projects = () => {
  const ProjectsData = GetProjectsData();
  return(
    <div className={"ProjectCardsContent"}>
      <JackInTheBox damping={0.4} triggerOnce={true} cascade>
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
      </JackInTheBox>
    </div>
  )
};export default Projects;