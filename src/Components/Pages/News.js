import "./News.css";
import BlogWidest from "../News/BlogWidest";
import NewsLetter from "../NewsLetter";
import LatestBlog from "../News/LatestBlog";
import {Bounce,Fade} from "react-awesome-reveal";
import {useEffect} from "react";

const News = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return(
    <div className={"NewsContainer"}>
      <Bounce>
        <h1 className={"NewsTitle"}>Our Blog</h1>
      </Bounce>
      <Fade direction={"left"} triggerOnce={true}>
        <BlogWidest />
      </Fade>
      <hr className={"HrNews"} />
      <LatestBlog />
      <NewsLetter />
    </div>
  )

};export default News;