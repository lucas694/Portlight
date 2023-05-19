import "./BannerHP.css";
import img from "../../Assets/BannerHP/Image.png"
import BannerImg1 from "../../Assets/BannerHP/BannerImg1.png"
import BannerImg2 from "../../Assets/BannerHP/BannerImg2.png"
import BannerImg3 from "../../Assets/BannerHP/BannerImg3.png"
import BannerImg4 from "../../Assets/BannerHP/BannerImg4.png"
import BannerImg5 from "../../Assets/BannerHP/BannerImg5.png"
import BannerImg6 from "../../Assets/BannerHP/BannerImg6.png"
import BtnBase from "../Buttons/BtnBase";


const BannerHP = () => {
  return(
    <div className={"BannerHPContainer"}>
      <div className={"BannerHPUp"}>
        <h1 className={"BannerHpTitle"}>Take it to</h1>
        <h1 className={"BannerHpTitle"}>
          the Creative
          <img src={img} alt={"img"} className={"BannerHpTitleImg"}/>
          level
        </h1>
        <p className={"BannerHpDesc"}>High-end digital experiences. Created at the heart of Manhattan, we are a human-sized team.</p>
        <div className={"BtnSection"}>
          <BtnBase className={"BlackBtn"}
                   children={"Say Hello"}
                   icon={"white"}
          />
        </div>
      </div>
      <div className={"BannerHPUDown"}>
        <img src={BannerImg1} alt={"BannerImg1"} className={"BannerImg-0"}/>
        <img src={BannerImg2} alt={"BannerImg1"} className={"BannerImg-1"}/>
        <img src={BannerImg3} alt={"BannerImg1"} className={"BannerImg-2"}/>
        <img src={BannerImg4} alt={"BannerImg1"} className={"BannerImg-0"}/>
        <img src={BannerImg5} alt={"BannerImg1"} className={"BannerImg-1"}/>
        <img src={BannerImg6} alt={"BannerImg1"} className={"BannerImg-0"}/>
      </div>

    </div>
  )
};export default BannerHP;