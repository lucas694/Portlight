import "./OurTeam.css";
import CardTeam from "../Cards/CardTeam";
import {GetCardTeamData} from "../Utils/Utils";
import BtnBase from "../Buttons/BtnBase";
import {Link} from "react-router-dom";
import {Fade} from "react-awesome-reveal";

const OurTeam = () => {
  const CardTeamData = GetCardTeamData()
  return(
    <div className={"OurTeamContainer"}>
      <div className={"OurTeamContent"}>
        <Fade damping={0.4} triggerOnce={true} cascade direction={"right"}>
          {CardTeamData.map((item) => {
            return(
              <Link to={`/Team/${item.id}`}>
                <CardTeam key={item.id}
                          CardName={item.CardName}
                          CardPosition={item.CardPosition}
                          CardImg={item.CardImg}
                          Instagram={item.Instagram}
                          Facebook={item.Facebook}
                          Twitter={item.Twitter}
                          Linkedin={item.Linkedin}
                />
              </Link>
            )})
          }
        </Fade>
      </div>
      <div className={"OurTeamBtnControl"}>
        <BtnBase children={"Join Our Team"} className={"BlackBtn"} icon={"white"} />
      </div>
    </div>
  )
};export default OurTeam