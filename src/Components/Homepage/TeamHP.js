import "./TeamHP.css";
import TeamBg from "../../Assets/TeamHP/TeamBg.png"
import BtnBase from "../Buttons/BtnBase";
import {Link} from "react-router-dom";
import {Fade} from "react-awesome-reveal";

const TeamHP = () => {
  return(
    <div className={"TeamHPContainer"}>
      <div className={"TeamHPContent"}>
        <img src={TeamBg} alt={"TeamBg"} className={"TeamBg"} />
        <div className={"TeamHPTextContent"}>
          <Fade direction={"left"} >
            <h1 className={"TeamHPText"}>Team</h1>
          </Fade>
        </div>
      </div>
      <div className={"TeamHpBtnControl"}>
        <Fade direction={"left"} delay={500} triggerOnce={true}>
          <Link to={"/Team"}>
            <BtnBase className={"BlackBtnWhiteBorder"}
                     children={"Meet Our Creative Professional"}
                     icon={"white"}
            />
          </Link>
        </Fade>
      </div>
    </div>
  )
};export default TeamHP;