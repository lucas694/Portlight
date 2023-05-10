//imgs
import Website from "../../Assets/Cards/Projects/WebSite.png";
import Branding from "../../Assets/Cards/Projects/Branding.png";
import DesignStrategy from "../../Assets/Cards/Projects/DesignStrategy.png";
import DifferentThings from "../../Assets/Cards/Projects/DifferentThings.png";
import Build from "../../Assets/Cards/Projects/BuildWebSite.png";

const CardProjectsData = [
  {id:1, CardTitle:"Website Design", CardType:"Web Design", CardImg:Website},
  {id:2, CardTitle:"Branding Design", CardType:"Web Design", CardImg:Branding},
  {id:3, CardTitle:"Design Strategy", CardType:"Web Design", CardImg:DesignStrategy},
  {id:4, CardTitle:"Different Things", CardType:"Web Design", CardImg:DifferentThings},
  {id:5, CardTitle:"Build Website", CardType:"Web Design", CardImg:Build},
];
export const GetProjectsData = () => {
  return CardProjectsData;
}