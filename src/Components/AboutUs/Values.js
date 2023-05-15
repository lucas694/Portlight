import "./Values.css";
import {GetValuesData} from "../Utils/Utils";
import ValuesCard from "../Cards/ValuesCard";

const Values = () =>{
  const ValuesData = GetValuesData();
  return(
    <div className={"ValuesContainer"}>
      <div className={"ValuesContent"}>
        <h1 className={"ValuesTitle"}>The Core Values that drive <span>Everything</span> we do</h1>
        <div className={"ValuesCardsContent"}>
          {ValuesData.map((item,index) => {
            return(
              <ValuesCard key={index}
                          title={item.CardTitle}
                          description={item.CardDesc}
                          image={item.CardImg}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
};export default Values;