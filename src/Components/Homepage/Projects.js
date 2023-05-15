import {GetProjectsData} from "../Utils/Utils";
import ProjectCard from "../Cards/ProjectCard";
import "./Projects.css"

const Projects = () => {
  const ProjectsData = GetProjectsData();
  return(
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
  )
};export default Projects;