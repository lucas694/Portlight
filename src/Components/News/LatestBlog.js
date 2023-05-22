import "./LatestBlog.css";
import {GetCardBlogData} from "../Utils/Utils";
import BlogCard from "../Cards/BlogCard";
import {Bounce} from "react-awesome-reveal";

const LatestBlog = () => {
  const CardBlogData = GetCardBlogData();
  return(
    <div className={"LatestBlogContainer"}>
      <div className={"LatestBlogUp"}>
        <Bounce>
          <h1 className={"LatestBlogTitle"}>Latest News & <span>Blogs</span></h1>
        </Bounce>

      </div>
      <div className={"LatestCardsContent"}>
        {CardBlogData.map((item, index) => {
        return(
          <BlogCard key={index}
                    CardDate={item.CardDate}
                    CardTitle={item.CardTitle}
                    CardImg={item.CardImg}
          />
        )})
        }
      </div>
    </div>
  )
};export default LatestBlog;