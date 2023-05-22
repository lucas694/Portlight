import "./FAQ.css";
import FaqTopics from "../Cards/FaqTopics";
import {GetFaqQuestionsData} from "../Utils/Utils";
import {Fade, Bounce} from "react-awesome-reveal";

const FAQ = () => {
  const FaqQuestionsData = GetFaqQuestionsData();
  return(
    <div className={"FaqContainer"}>
      <div className={"FaqContent"}>
        <Bounce duration={1500} className={"FaqTitle"}>
          <h1>Find the Answers on Frequently Asked <span>Questions</span></h1>
        </Bounce>
        <Fade  triggerOnce={true} direction={"up"} cascade className={"FaqQuestions"}>
          {FaqQuestionsData.map((item, index) => {
            return(
              <FaqTopics key={index}
                         Question={item.Question}
                         Answer={item.Answer}
              />
            )
          })}
        </Fade>
      </div>
    </div>
  )
};export default FAQ;