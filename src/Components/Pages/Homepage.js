import "./Homepage.css";
import BannerHP from "../Homepage/BannerHP";
import AboutHP from "../Homepage/AboutHP";
import ProjectHP from "../Homepage/ProjectHP";
import BlogHP from "../Homepage/BlogHP";
import TeamHP from "../Homepage/TeamHP";

const Homepage = () => {
  return(
    <div className={"HomepageContainer"}>
      <BannerHP />
      <AboutHP />
      <ProjectHP />
      <BlogHP />
      <TeamHP />
    </div>
  )
};export default Homepage;