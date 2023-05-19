import "./Team.css";
import BannerTeam from "../Team/BannerTeam";
import OurTeam from "../Team/OurTeam";
import NewsLetter from "../NewsLetter";

const Team = () => {
  return(
    <div className={"TeamContainer"}>
      <BannerTeam />
      <OurTeam />
      <NewsLetter />
    </div>
  )
};export default Team