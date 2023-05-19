import "./CardTeam.css";
import {BsInstagram, BsFacebook, BsTwitter, BsLinkedin} from "react-icons/bs";
import {Link} from "react-router-dom";

const CardTeam = (props) => {
  const {id,CardName,CardPosition,CardImg,Instagram,Facebook,Twitter,Linkedin} = props
  return(
    <div className={"CardTeamContainer"}>
      <div className={"CardTeamMain"}>
        <img src={CardImg} alt={"CardImg"} className={"CardTeamImg"} />
        <div className={"CardTeamSocial"}>
          <Link to={`#${Instagram}`}>
            <BsInstagram className={"CardTeamSocialIcon"} />
          </Link>

          <Link to={`#${Facebook}`}>
            <BsFacebook className={"CardTeamSocialIcon"} />
          </Link>

          <Link to={`#${Twitter}`}>
            <BsTwitter className={"CardTeamSocialIcon"} />
          </Link>

          <Link to={`#${Linkedin}`}>
            <BsLinkedin className={"CardTeamSocialIcon"} />
          </Link>
        </div>
      </div>
      <div className={"CardTeamInf"}>
        <h1 className={"CardTeamName"}>{CardName}</h1>
        <p className={"CardTeamJob"}>{CardPosition}</p>
      </div>
    </div>
  )
};export default CardTeam