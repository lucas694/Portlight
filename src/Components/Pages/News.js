import "./News.css";
import BlogWidest from "../News/BlogWidest";
import NewsLetter from "../NewsLetter";
import LatestBlog from "../News/LatestBlog";

const News = () => {
  return(
    <div className={"NewsContainer"}>
      <h1 className={"NewsTitle"}>Our Blog</h1>
      <BlogWidest />
      <hr className={"HrNews"} />
      <LatestBlog />


    <NewsLetter />
    </div>
  )

};export default News;