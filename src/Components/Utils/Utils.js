//CardProjectsImgs
import Website from "../../Assets/Cards/Projects/WebSite.png";
import Branding from "../../Assets/Cards/Projects/Branding.png";
import DesignStrategy from "../../Assets/Cards/Projects/DesignStrategy.png";
import DifferentThings from "../../Assets/Cards/Projects/DifferentThings.png";
import Build from "../../Assets/Cards/Projects/BuildWebSite.png";
import Build2 from "../../Assets/Cards/Projects/Image.png";
import Build3 from "../../Assets/Cards/Projects/Image (1).png";

//CardValues Imgs
import Creativity from "../../Assets/Cards/Values/Creativity.png";
import Teamwork from "../../Assets/Cards/Values/Teamwork.png";
import Innovation from "../../Assets/Cards/Values/Innovation.png";
import Quality from "../../Assets/Cards/Values/Quality.png";
import Simplicity from "../../Assets/Cards/Values/Simplicity.png";
import Integrity from "../../Assets/Cards/Values/Integrity.png";

//CardBlog Imgs
import CardBlog1 from "../../Assets/Cards/Blog/CardBlog1.png";
import CardBlog2 from "../../Assets/Cards/Blog/CardBlog2.png";
import CardBlog3 from "../../Assets/Cards/Blog/CardBlog3.png";
import CardBlog4 from "../../Assets/Cards/Blog/CardBlog4.png";
import CardBlog5 from "../../Assets/Cards/Blog/CardBlog5.png";

//CardTeam Imgs
import DavidJames from "../../Assets/Cards/Team/DavidJames.png";
import JakeGibson from "../../Assets/Cards/Team/JakeGibson.png";
import MariaWilson from "../../Assets/Cards/Team/MariaWilson.png";
import EmmaBuckland from "../../Assets/Cards/Team/EmmaBuckland.jpg";
import StevenHill from "../../Assets/Cards/Team/StevenHill.png";
import MaxOliver from "../../Assets/Cards/Team/MaxOliver.png";


/*Cards Projects*/
const CardProjectsData = [
  {id:1, CardTitle:"Website Design", CardType:"Web Design", CardImg:Website},
  {id:2, CardTitle:"Branding Design", CardType:"Web Design", CardImg:Branding},
  {id:3, CardTitle:"Design Strategy", CardType:"Web Design", CardImg:DesignStrategy},
  {id:4, CardTitle:"Different Things", CardType:"Web Design", CardImg:DifferentThings},
  {id:5, CardTitle:"Build Website", CardType:"Web Design", CardImg:Build},
  {id:6, CardTitle:"Build Website", CardType:"Web Design", CardImg:Build2},
  {id:7, CardTitle:"Build Website", CardType:"Web Design", CardImg:Build3},
];
export const GetProjectsData = () => {
  return CardProjectsData;
}

/*Cards Values*/
const CardValuesData = [
  {id:1, CardTitle:"Creativity", CardImg:Creativity ,CardDesc:"High-end digital experiences. Created the heart Manhattan, we are a should human team driving force."},
  {id:2, CardTitle:"Teamwork", CardImg:Teamwork ,CardDesc:"High-end digital experiences. Created the heart Manhattan, we are a should human team driving force."},
  {id:3, CardTitle:"Innovation", CardImg:Innovation ,CardDesc:"High-end digital experiences. Created the heart Manhattan, we are a should human team driving force."},
  {id:4, CardTitle:"Quality", CardImg:Quality ,CardDesc:"High-end digital experiences. Created the heart Manhattan, we are a should human team driving force."},
  {id:5, CardTitle:"Simplicity", CardImg:Simplicity ,CardDesc:"High-end digital experiences. Created the heart Manhattan, we are a should human team driving force."},
  {id:6, CardTitle:"Integrity", CardImg:Integrity ,CardDesc:"High-end digital experiences. Created the heart Manhattan, we are a should human team driving force."},
]
export const GetValuesData = () => {
  return CardValuesData;
}

/*FAQ Questions*/
const FaqQuestionsData = [
  {id:1, Question:"Make the FAQs eacy to find" ,Answer:"Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi. consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi."},
  {id:2, Question:"Are there any additional fee?" ,Answer:"Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi. consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi."},
  {id:3, Question:"What features do you offer and other not?" ,Answer:"Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi. consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi."},
  {id:4, Question:"How can i get the app?" ,Answer:"Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi. consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi."},
  {id:5, Question:"How this work?" ,Answer:"Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi. consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi."},
]
export const GetFaqQuestionsData = () => {
  return FaqQuestionsData;
}

/*Cards Blog*/
const CardBlogData = [
  {id:1, CardDate:"Posted on December 31, 2021 Business", CardTitle:"We speak to Aimer & Tatin Creative Fund Board Members",CardImg:CardBlog1},
  {id:2, CardDate:"Posted on December 31, 2021 Business", CardTitle:"Social media is changing – how can you stay on the right side.",CardImg:CardBlog2},
  {id:3, CardDate:"Posted on December 31, 2021 Business", CardTitle:"Seven ways that Progressive Web Apps are killing regular.",CardImg:CardBlog3},
  {id:4, CardDate:"Posted on December 31, 2021 Business", CardTitle:"The UX : Improving communication to enlarge the digital output",CardImg:CardBlog4},
  {id:5, CardDate:"Posted on December 31, 2021 Business", CardTitle:"Branding sustainability: three lessons from IKEA’s Live Lago",CardImg:CardBlog5},
]
export const GetCardBlogData = () => {
  return CardBlogData;
}

/*Cards Team*/
const CardTeamData = [
  {id:1, CardName:"David James", CardPosition:"Web App", CardImg:DavidJames, Instagram:"#SocialDavidJames", Twitter:"#SocialDavidJames", Facebook:"#SocialDavidJames", Linkedin:"#SocialDavidJames"},
  {id:2, CardName:"Jake Gibson", CardPosition:"Web App", CardImg:JakeGibson, Instagram:"#SocialJakeGibson", Twitter:"#SocialJakeGibson", Facebook:"#SocialJakeGibson", Linkedin:"#SocialJakeGibson"},
  {id:3, CardName:"Maria Wilson", CardPosition:"Web App", CardImg:MariaWilson, Instagram:"#SocialMariaWilson", Twitter:"#SocialMariaWilson", Facebook:"#SocialMariaWilson", Linkedin:"#SocialMariaWilson"},
  {id:4, CardName:"Emma Buckland", CardPosition:"Web App", CardImg:EmmaBuckland, Instagram:"#SocialEmmaBuckland", Twitter:"#SocialEmmaBuckland", Facebook:"#SocialEmmaBuckland", Linkedin:"#SocialEmmaBuckland"},
  {id:5, CardName:"Steven Hill", CardPosition:"Web App", CardImg:StevenHill, Instagram:"#SocialStevenHill", Twitter:"#SocialStevenHill", Facebook:"#SocialStevenHill", Linkedin:"#SocialStevenHill"},
  {id:6, CardName:"Max Oliver", CardPosition:"Web App", CardImg:MaxOliver, Instagram:"#SocialMaxOliver", Twitter:"#SocialMaxOliver", Facebook:"#SocialMaxOliver", Linkedin:"#SocialMaxOliver"},
]
export const GetCardTeamData = () => {
  return CardTeamData;
}