import "./ServicesCardsHP.css";
import ServicesDefault from "../../Assets/Cards/ServicesHP/ServicesCardImg0.png";
import BtnWhite from "../../Assets/Btns/BtnCardServiceWhite.png";
import BtnBlack from "../../Assets/Btns/BtnCardServiceBlack.png";
import {useState} from "react";


const ServicesCardsHP = (props) => {
  const{CardPhoto} = props;
  const [Img, setImg] = useState(false);
  const toggleImg = () =>{
    setImg(!Img);
  }

  return(
    <div className={"ServicesCardsHPContainer"}
         onMouseEnter={toggleImg}
         onMouseLeave={toggleImg}
    >
      <h1 className={"ServicesCardTitle"}>Strategy</h1>
      <img src={
        Img ? CardPhoto : ServicesDefault
      } alt={"Services0"} className={"ServicesCardImg"} />
      <p className={"ServicesCardDesc"}>High-end digital experiences. Created the heart Manhattan, we are a should human team driving force.</p>
      <button className={"BtnCard"}>
        <img src={Img ? BtnWhite : BtnBlack} alt={"Btn"} className={"BtnServicesIcon"} />
      </button>

    </div>
  )
};export default ServicesCardsHP;