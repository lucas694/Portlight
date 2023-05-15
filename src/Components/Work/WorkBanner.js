import "./WorkBanner.css";
import WorkBannerImg from "../../Assets/Work/WorkBannerImg.png";

const WorkBanner = () => {
  return(
    <div className={"WorkBannerContainer"}>
      <div className={"WorkBannerContent"}>
        <h1 className={"WorkBannerTitle"}>Our Work</h1>
        <p className={"WorkBannerDesc"}>Whereby is the super simple way to connect over video. No downloads or long having into meeting links.</p>
        <div className={"WorkBannerImgControl"}>
          <img src={WorkBannerImg} alt={"WorkBannerImg"} className={"WorkBannerImg"}/>
        </div>
      </div>

    </div>
  )
};export default WorkBanner;