import"./AboutHP.css";
import BtnBase from "../Buttons/BtnBase";
import Partner from "./Partner";
import {AttentionSeeker} from "react-awesome-reveal";
import {Fade} from "react-awesome-reveal";

const AboutHP = () =>{
  return(
    <div className={"AboutHpContainer"}>
      <div className={"AboutHpContent"}>
        <div className={"AboutHpLeft"}>
          <AttentionSeeker effect={"wobble"} >
            <h1 className={"AboutHpTitleWhite"}>What</h1>
            <h1 className={"AboutHpTitleBlack"}>We do</h1>
          </AttentionSeeker>
        </div>
        <div className={"AboutHpRight"}>
          <Fade direction={"right"} cascade damping={"0.2"}>
            <p className={"AboutRText"}>High-end digital experiences. Created at the heart of Manhattan, we are a should human team.</p>
            <p className={"AboutRText"}>The driving force of all speeches, we believe that creation should be the point around which any strategy revolves.</p>
              <div className={"AboutRBtnSection"}>
              <BtnBase className={"WhiteBtn"}
                       children={"See Our Process"}
                       icon={"black"}
              />
            </div>
          </Fade>
        </div>
      </div>
      <Partner />
    </div>
  )
};export default AboutHP;