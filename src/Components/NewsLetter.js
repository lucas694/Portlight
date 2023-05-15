import "./NewsLetter.css";
import BtnBase from "./Buttons/BtnBase";

const NewsLetter = () => {
  return(
    <div className={"NewsLetterContainer"}>
      <div className={"NewsLetterContent"}>
        <h1 className={"NewsLetterTitle"}>Never Miss a Single <span>News</span></h1>
        <p className={"NewsLetterDesc"}>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et uis nostrud exercitation ullamco laboris nisi.</p>
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

      </div>

    </div>
  )
};export default NewsLetter;