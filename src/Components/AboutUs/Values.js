import "./Values.css";
import {GetValuesData} from "../Utils/Utils";
import ValuesCard from "../Cards/ValuesCard";
import {Fade, Bounce} from "react-awesome-reveal";

const Values = () =>{
  const ValuesData = GetValuesData();
  return(
    <div className={"ValuesContainer"}>
      <div className={"ValuesContent"}>
        <Bounce duration={1500} className={"ValuesTitle"}>
          <h1 >The Core Values that drive <span>Everything</span> we do</h1>
        </Bounce>
        <div className={"ValuesCardsContent"}>
          <Fade  triggerOnce={true} direction={"right"} cascade>
            {ValuesData.map((item,index) => {
              return(
                <ValuesCard key={index}
                            title={item.CardTitle}
                            description={item.CardDesc}
                            image={item.CardImg}
                />
              )
            })}
          </Fade>
        </div>
      </div>
    </div>
  )
};export default Values;