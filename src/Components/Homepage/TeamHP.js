import "./TeamHP.css";
import TeamBg from "../../Assets/TeamHP/TeamBg.png"
import BtnBase from "../Buttons/BtnBase";
import {Link} from "react-router-dom";

const TeamHP = () => {
  return(
    <div className={"TeamHPContainer"}>
      <div className={"TeamHPContent"}>
        <img src={TeamBg} alt={"TeamBg"} className={"TeamBg"} />
        <div className={"TeamHPTextContent"}>
          <h1 className={"TeamHPText"}>Team</h1>
        </div>
      </div>
      <div className={"TeamHpBtnControl"}>
        <Link to={"/Team"}>
          <BtnBase className={"BlackBtnWhiteBorder"}
                   children={"Meet Our Creative Professional"}
                   icon={"white"}
          />
        </Link>
      </div>
    </div>
  )
};export default TeamHP;