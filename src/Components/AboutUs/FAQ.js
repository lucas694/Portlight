import "./FAQ.css";
import FaqTopics from "../Cards/FaqTopics";
import {GetFaqQuestionsData} from "../Utils/Utils";

const FAQ = () => {
  const FaqQuestionsData = GetFaqQuestionsData();
  return(
    <div className={"FaqContainer"}>
      <div className={"FaqContent"}>
        <h1 className={"FaqTitle"}>Find the Answers on Frequently Asked <span>Questions</span></h1>
        <div className={"FaqQuestions"}>
          {FaqQuestionsData.map((item, index) => {
            return(
              <FaqTopics key={index}
                         Question={item.Question}
                         Answer={item.Answer}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
};export default FAQ;