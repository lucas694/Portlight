import "./WorkBanner.css";
import WorkBannerImg from "../../Assets/Work/WorkBannerImg.png";
import {Bounce} from "react-awesome-reveal";

const WorkBanner = () => {
  return(
    <div className={"WorkBannerContainer"}>
      <div className={"WorkBannerContent"}>
        <Bounce triggerOnce={true} cascade>
          <h1 className={"WorkBannerTitle"}>Our Work</h1>
          <p className={"WorkBannerDesc"}>Whereby is the super simple way to connect over video. No downloads or long having into meeting links.</p>
        </Bounce>
        <div className={"WorkBannerImgControl"}>
          <img src={WorkBannerImg} alt={"WorkBannerImg"} className={"WorkBannerImg"}/>
        </div>
      </div>

    </div>
  )
};export default WorkBanner;