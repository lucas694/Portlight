import "./AboutUsBanner.css";
import BtnBase from "../Buttons/BtnBase";
import Partner from "../Homepage/Partner";
import {Bounce,Slide} from "react-awesome-reveal";

const AboutUsBanner = () => {
  return(
    <div className={"AboutUsBannerContainer"}>
      <div className={"AboutUsBannerContent"}>
        <Bounce triggerOnce={true} cascade>
          <h1 className={"AboutUsTitle"}>About Us</h1>
          <p className={"AboutUsDesc"}>Whereby is the super simple way to connect over video. No downloads or long having into meeting links.</p>
        </Bounce>
        <div className={"BtnSection"}>
          <Slide triggerOnce={true} direction={"left"} className={"BtnSection"}>
            <BtnBase className={"BlackBtn"}
                     children={"Join Our Team"}
                     icon={"white"}
            />
          </Slide>
        </div>
      </div>
      <Partner />
    </div>
  )
};export default AboutUsBanner;