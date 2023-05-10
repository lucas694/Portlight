import"./BtnBase.css";
import IconWhite from "../../Assets/Btns/IconWhite.png"
import IconBlack from "../../Assets/Btns/IconBlack.png"

const BtnBase = ({ children, ...props }) => {
  const { className,onClick, icon} = props;
  return(
    <button className={`BtnBase ${className}`} onClick={onClick}>
      {children}
      {icon === "white" ? <img src={IconWhite} alt={"IconWhite"} className={"BtnBaseIcon"}/> : null}
      {icon === "black" ? <img src={IconBlack} alt={"IconBlack"} className={"BtnBaseIcon"}/> : null}
    </button>
  )
};
export default BtnBase;