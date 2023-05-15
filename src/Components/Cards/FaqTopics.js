import "./FaqTopics.css";
import BlackStar from "../../Assets/Cards/FAQ/BlackStar.png";
import WhiteStar from "../../Assets/Cards/FAQ/WhiteStar.png";
import {IoCloseSharp} from "react-icons/io5";
import {useState} from "react";

const FaqTopics = (props) => {
  const {Question, Answer} = props;

  const [Open, setOpen] = useState(false);
  const toggle = () => {
    return setOpen(!Open);
  }
  return(
    <div className={Open ? "FaqTopicsContainerOpen" : "FaqTopicsContainerDefault"}>
      <div className={"FaqTopicsMainContent"}>
        <h1 className={Open ? "FaqTopicsTitleOpen" : "FaqTopicsTitleDefault"}>{Question}</h1>
        <p className={Open ? "FaqTopicsDesc" : "hidden"}>{Answer}</p>
      </div>
      <button className={"FaqBtn"} onClick={toggle}>
        <img src={Open ? WhiteStar : BlackStar} alt={"BlackStar"} className={"StarImg"} />
        <IoCloseSharp className={Open ? "FaqBtnIconClose" : "FaqBtnIconOpen"}/>
      </button>

    </div>
  )
};export default FaqTopics;