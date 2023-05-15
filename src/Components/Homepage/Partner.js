import"./Partner.css";
import PartnerImg1 from "../../Assets/AboutHp/1.png";
import PartnerImg2 from "../../Assets/AboutHp/2.png";
import PartnerImg3 from "../../Assets/AboutHp/3.png";
import PartnerImg4 from "../../Assets/AboutHp/4.png";
import PartnerImg5 from "../../Assets/AboutHp/5.png";

const Partner = () => {
  return(
      <div className={"PartnerContainer"}>
        <h1 className={"PartnerTitle"}>WE PARTNER WITH FORWARD</h1>
        <div className={"PartnerContent"}>
          <img src={PartnerImg2} alt={"PartnerImg"} className={"PartnerImg"}/>
          <img src={PartnerImg1} alt={"PartnerImg"} className={"PartnerImg"}/>
          <img src={PartnerImg3} alt={"PartnerImg"} className={"PartnerImg"}/>
          <img src={PartnerImg4} alt={"PartnerImg"} className={"PartnerImg"}/>
          <img src={PartnerImg5} alt={"PartnerImg"} className={"PartnerImg"}/>
        </div>
      </div>
  )
};export default Partner;