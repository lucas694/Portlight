import "./BannerTeam.css";
import {Bounce} from "react-awesome-reveal";

const BannerTeam = () => {
  return(
    <div className={"BannerTeamContainer"}>
      <div className={"BannerTeamContent"}>
        <Bounce cascade>
          <h1 className={"BannerTeamTitle"}>Digital Team</h1>
          <p className={"BannerTeamDesc"}>We love to talk with you about our unique approach. Feel free to contact us the creative team.</p>
        </Bounce>
      </div>
    </div>
  )
};export default BannerTeam