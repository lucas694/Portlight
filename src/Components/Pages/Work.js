import "./Work.css";
import WorkBanner from "../Work/WorkBanner";
import WorkProjects from "../Work/WorkProjects";
import {useEffect} from "react";

const Work = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return(
    <div className={"WorkContainer"}>
      <WorkBanner />
      <WorkProjects />
    </div>
  )
};export default Work;