import "./ProjectCard.css";

const ProjectCard = (props) => {
  const {CardImg, CardTitle, CardType} = props;
  return(
    <div className={"ProjectCardContainer"}>
      <img src={CardImg} alt={"CardImg"} className={"ProjectCardImg"} />
      <h1 className={"ProjectCardTitle"}>{CardTitle}</h1>
      <p className={"ProjectCardType"}>{CardType}</p>
    </div>
  )
}; export default ProjectCard;