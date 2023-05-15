import"./AboutHP.css";
import BtnBase from "../Buttons/BtnBase";
import Partner from "./Partner";

const AboutHP = () =>{
  return(
    <div className={"AboutHpContainer"}>
      <div className={"AboutHpContent"}>
        <div className={"AboutHpLeft"}>
          <h1 className={"AboutHpTitleWhite"}>What</h1>
          <h1 className={"AboutHpTitleBlack"}>We do</h1>
        </div>
        <div className={"AboutHpRight"}>
          <p className={"AboutRText"}>High-end digital experiences. Created at the heart of Manhattan, we are a should human team.</p>
          <p className={"AboutRText"}>The driving force of all speeches, we believe that creation should be the point around which any strategy revolves.</p>
          <div className={"AboutRBtnSection"}>
            <BtnBase className={"WhiteBtn"}
                     children={"See Our Process"}
                     icon={"black"}
            />
          </div>
        </div>
      </div>
      <Partner />

    </div>
  )
};export default AboutHP;