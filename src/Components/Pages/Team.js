import "./Team.css";
import BannerTeam from "../Team/BannerTeam";
import OurTeam from "../Team/OurTeam";
import NewsLetter from "../NewsLetter";
import {useEffect} from "react";

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return(
    <div className={"TeamContainer"}>
      <BannerTeam />
      <OurTeam />
      <NewsLetter />
    </div>
  )
};export default Team