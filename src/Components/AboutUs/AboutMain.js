import "./AboutMain.css";
import AboutMainImg from "../../Assets/AboutHp/AboutMain.png";

const AboutMain = () => {
  return(
    <div className={"AboutMainContainer"}>
      <div className={"AboutMainContent"}>
        <div className={"AboutMainLeft"}>
          <section>
            <h1 className={"AboutLeftTitleWhite"}>Why</h1>
            <h1 className={"AboutLeftTitleBlack"}>Portlight</h1>
          </section>
          <p className={"AboutLeftDesc"}>Lorem ipsum dolor sit amet ut sem adipiscing elit. Suspendisse varius enim in tristique.</p>
          <img src={AboutMainImg} alt={"AboutMainImg"} className={"AboutMainImg"} />
        </div>

        <div className={"AboutMainRight"}>
          <div className={"AboutMainTopic"}>
            <h1 className={"AboutTopicTitle"}>What We Are</h1>
            <p className={"AboutTopicDesc"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
          </div>
          <div className={"AboutMainTopic"}>
            <h1 className={"AboutTopicTitle"}>What We Do</h1>
            <p className={"AboutTopicDesc"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
          </div>
          <div className={"AboutMainTopic"}>
            <h1 className={"AboutTopicTitle"}>Making Amazing Stuff</h1>
            <p className={"AboutTopicDesc"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
          </div>
        </div>
      </div>
    </div>
  )
};export default AboutMain;