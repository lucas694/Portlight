import "./BlogHP.css";
import {Link} from "react-router-dom";
import {TiArrowRightThick} from "react-icons/ti";

const BlogHP = () =>{
  return(
    <div className={"BlogHPContainer"}>
      <div className={"BlogHPContent"}>
        <section>
          <h1 className={"BlogHpTitle"}>Latest News & <span>Blogs</span></h1>
        </section>

        <div className={"BlogHpPostContent"}>
          <div className={"BlogHpPost"}>
            <span className={"BlogPostDate"}>Posted on December 31, 2021 Business</span>
            <Link to={"#"} className={"BlogPostTitle"}>JavaScript Algorithms And Data Structures Management</Link>
          </div>

          <div className={"BlogHpPost"}>
            <span className={"BlogPostDate"}>Posted on December 31, 2021 Business</span>
            <Link to={"#"} className={"BlogPostTitle"}>Winning Desing Tips And Strategies For App UI/UX Developers</Link>
          </div>

          <div className={"BlogHpPost"}>
            <span className={"BlogPostDate"}>Posted on December 31, 2021 Business</span>
            <Link to={"#"} className={"BlogPostTitle"}>How To Keep The Motivation Up When There Is No Client Work</Link>
          </div>
        </div>

        <Link to={"/News"} className={"BlogHpBtn"}>See All News
          <TiArrowRightThick className={"BlogHpIcon"}/>
        </Link>

      </div>

    </div>
  )
};export default BlogHP;