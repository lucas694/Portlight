import "./Work.css";
import WorkBanner from "../Work/WorkBanner";
import WorkProjects from "../Work/WorkProjects";

const Work = () => {
  return(
    <div className={"WorkContainer"}>
      <WorkBanner />
      <WorkProjects />
    </div>
  )
};export default Work;