import "./AboutUsBanner.css";
import BtnBase from "../Buttons/BtnBase";
import Partner from "../Homepage/Partner";

const AboutUsBanner = () => {
  return(
    <div className={"AboutUsBannerContainer"}>
      <div className={"AboutUsBannerContent"}>
        <h1 className={"AboutUsTitle"}>About Us</h1>
        <p className={"AboutUsDesc"}>Whereby is the super simple way to connect over video. No downloads or long having into meeting links.</p>
        <div className={"BtnSection"}>
          <BtnBase className={"BlackBtn"}
                   children={"Join Our Team"}
                   icon={"white"}
          />
        </div>
      </div>
      <Partner />
    </div>
  )
};export default AboutUsBanner;