import"./AboutHP.css";
import BtnBase from "../Buttons/BtnBase";
import AboutImg1 from "../../Assets/AboutHp/1.png";
import AboutImg2 from "../../Assets/AboutHp/2.png";
import AboutImg3 from "../../Assets/AboutHp/3.png";
import AboutImg4 from "../../Assets/AboutHp/4.png";
import AboutImg5 from "../../Assets/AboutHp/5.png";

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
      <div className={"AboutDown"}>
        <h1 className={"AboutDownTitle"}>WE PARTNER WITH FORWARD</h1>
        <div className={"AboutDownContent"}>
          <img src={AboutImg1} alt={"AboutImg1"} className={"AboutDownImg"}/>
          <img src={AboutImg2} alt={"AboutImg1"} className={"AboutDownImg"}/>
          <img src={AboutImg3} alt={"AboutImg1"} className={"AboutDownImg"}/>
          <img src={AboutImg4} alt={"AboutImg1"} className={"AboutDownImg"}/>
          <img src={AboutImg5} alt={"AboutImg1"} className={"AboutDownImg"}/>
        </div>
      </div>
    </div>
  )
};export default AboutHP;