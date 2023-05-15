import "./BlogCard.css";
import {TiArrowRightThick} from "react-icons/ti";

const BlogCard = (props) =>{
  const {CardDate, CardTitle, CardImg} = props;
  return(
    <div className={"BlogCardContainer"}>
      <img src={CardImg} alt={"Blog Card"} className={"BlogCardImg"} />
      <div className={"BlogCardInfs"}>
        <span className={"CardBlogDate"}>{CardDate}</span>
        <h1 className={"CardBlogTitle"}>{CardTitle}</h1>
        <button className={"CardBlogBtn"}>Read More
          <TiArrowRightThick className={"CardBlogIconBtn"}/>
        </button>
      </div>
    </div>
  )
};export default BlogCard;