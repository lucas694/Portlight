import "./ValuesCard.css";

const ValuesCard = (props) => {
  const {title, description, image} = props;
  return(
    <div className={"ValuesCardContainer"}>
      <img className={"ValuesCardImg"} src={image} alt={title} />
      <h1 className={"ValuesCardTitle"}>{title}</h1>
      <p className={"ValuesCardDesc"}>{description}</p>
    </div>
  )
};export default ValuesCard;