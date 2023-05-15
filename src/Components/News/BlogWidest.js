import "./BlogWidest.css";
import BlogWidestImg from "../../Assets/Cards/Blog/BlogWidest.png";
import {TiArrowRightThick} from "react-icons/ti";

const BlogWidest = () => {
  return(
    <div className={"BlogWidestContainer"}>
      <div className={"BlogWidestContent"}>
        <div className={"BlogWidestLeft"}>
          <span className={"BlogWidestDate"}>Posted on December 31, 2021 Business</span>
          <h1 className={"BlogWidestTitle"}>How To Keep The Motivation Up When There Is No Client Work</h1>
          <p className={"BlogWidestDesc"}>Whereby is the super simple way to connect over video, No downloads or long having into meeting links.</p>
          <div className={"BlogWidestBtnControl"}>
            <button className={"BlogWidestBtn"}>Read More
              <TiArrowRightThick className={"BlogWidestIcon"}/>
            </button>
          </div>
        </div>
        <div className={"BlogWidestRight"}>
          <img src={BlogWidestImg} alt={"BlogWidestImg"} />
        </div>
      </div>
    </div>
  )
};export default BlogWidest;