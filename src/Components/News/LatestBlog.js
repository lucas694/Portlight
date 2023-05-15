import "./LatestBlog.css";
import {GetCardBlogData} from "../Utils/Utils";
import BlogCard from "../Cards/BlogCard";

const LatestBlog = () => {
  const CardBlogData = GetCardBlogData();
  return(
    <div className={"LatestBlogContainer"}>
      <div className={"LatestBlogUp"}>
        <h1 className={"LatestBlogTitle"}>Latest News & <span>Blogs</span></h1>

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