import "./NewsLetter.css";
import BtnBase from "./Buttons/BtnBase";
import {Bounce,Fade} from "react-awesome-reveal";

const NewsLetter = () => {
  return(
    <div className={"NewsLetterContainer"}>
      <div className={"NewsLetterContent"} className={"NewsLetterTitle"}>
        <Bounce duration={1200} cascade  triggerOnce={true}>
          <h1>Never Miss a Single <span>News</span></h1>
          <p className={"NewsLetterDesc"}>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et uis nostrud exercitation ullamco laboris nisi.</p>
        </Bounce>
        <Fade duration={1200} direction={"up"} triggerOnce={true}>
          <div className={"NewsLetterControl"}>
            <input type={"text"}
                   placeholder={"Enter your email address..."}
                   className={"NewsLetterInput"}
            />
            <BtnBase children={"Subscribe"}
                     className={"BlackBtnWhiteBorder"}
                     icon={"white"}
            />
          </div>
        </Fade>
      </div>

    </div>
  )
};export default NewsLetter;