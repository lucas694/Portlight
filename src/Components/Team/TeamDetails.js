import "./TeamDetails.css";
import {Link, useParams} from "react-router-dom";
import {GetCardTeamData} from "../Utils/Utils";
import {BsFacebook, BsInstagram, BsLinkedin, BsTwitter} from "react-icons/bs";
import NewsLetter from "../NewsLetter";
import BtnBase from "../Buttons/BtnBase";

const TeamDetails = () => {
  const {id} = useParams()
  const CardTeamData = GetCardTeamData()
  const CardTeamDataId = CardTeamData.find(item => item.id === parseInt(id));

  return(
    <div className={"TeamDetailsContainer"}>
      <div className={"TeamDetailsMain"}>
        <div className={"TeamDetailsLeft"}>
          <img src={CardTeamDataId.CardImg} alt={"CardImg"} className={"TeamDetailsImg"} />
        </div>
        <div className={"TeamDetailsRight"}>
          <h1 className={"TeamDetailsName"}>{CardTeamDataId.CardName}</h1>
          <p className={"TeamDetailsJob"}>{CardTeamDataId.CardPosition}</p>
          <div className={"TeamDetailsDesc"}>
            <h1 className={"TeamDetailsAboutName"}>About {CardTeamDataId.CardName}</h1>
            <p className={"TeamDetailsText"}>Portlight's worldwide managing partner and chief creator of portlight creative agency. Responsible for all aspects of the agency's strategy, team, and operations across the network of 50+ offices all over the world.</p>
            <div className={"TeamDetailsSocial"}>
              <Link to={`#${CardTeamDataId.Instagram}`}>
                <BsInstagram className={"TeamDetailsSocialIcon"} />
              </Link>
              <Link to={`#${CardTeamDataId.Facebook}`}>
                <BsFacebook className={"TeamDetailsSocialIcon"} />
              </Link>
              <Link to={`#${CardTeamDataId.Twitter}`}>
                <BsTwitter className={"TeamDetailsSocialIcon"} />
              </Link>
              <Link to={`#${CardTeamDataId.Linkedin}`}>
                <BsLinkedin className={"TeamDetailsSocialIcon"} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/*PersonalInfo*/}
      <div className={"TeamDetailsPersonalInfo"}>
        <h1 className={"PersonalInfoTitle"}>Personal Info</h1>
        <p className={"PersonalInfoDesc"}>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>

        <h1 className={"PersonalInfoTitle mt-2" +
          "0"}>Career Guidelines</h1>
        <p className={"PersonalInfoDesc"}>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined apitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide close the loop on focusing solely on the bottom line.</p>
      </div>

      {/*Contact Me*/}
      <div className={"TeamDetailsContactContainer"}>
        <div className={"TeamDetailsContactContent"}>
          <h1 className={"ContactTitle"}>Contact Me</h1>
          <div className={"ContactForms"}>
            <section>
              <label>
                <span>Full Name*</span>
                <input type={"text"}
                       placeholder={"Name"}
                       className={"ContactInput"}
                />
              </label>
              <label>
                <span>Your Email*</span>
                <input type={"email"}
                       placeholder={"example@yourmail.com"}
                       className={"ContactInput"}
                />
              </label>
            </section>

            <label>
              <span>Website*</span>
              <input type={"text"}
                     placeholder={"your website address here"}
                     className={"ContactInput"}
              />
            </label>
            <label>
              <span>Message*</span>
              <textarea type={"text"}
                     placeholder={"Hello there,I would like to talk about how to..."}
                     className={"ContactTxtArea"}
              />
            </label>
            <div className={"ContactBtnControl"}>
              <BtnBase children={"Send Message"} className={"BlackBtn"}/>
            </div>
          </div>
        </div>
      </div>
      <NewsLetter />
    </div>
  )
};export default TeamDetails