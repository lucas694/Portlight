import "./Header.css";
import HeaderLogo from "../Assets/HeaderLogo.png";
import {NavLink} from "react-router-dom";
import {useState} from "react";
import {BsFillHouseDoorFill,BsInfoCircleFill} from "react-icons/bs";
import {BiNews} from "react-icons/bi";
import {MdWorkOutline} from "react-icons/md";
import {HiUsers} from "react-icons/hi";

const Header = () => {
  const [active, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!active);
  }
  console.log(active)
  return(
    <div className={"HeaderContainer"}>
      <div className={"HeaderContent"}>
        <img src={HeaderLogo} alt={"HeaderLogo"} className={"HeaderLogo"}/>
        <nav className={"NavHeader"}>
          <NavLink to={ "/" } className={"NavLinkHeader"} activeClassName={`active`}>
            <BsFillHouseDoorFill className={"NavLinkHeaderIcon"}/>
            <h1 className={"NavLinkText"}>Home</h1>
          </NavLink>
          <NavLink to={ "/AboutUs" } className={"NavLinkHeader"} activeClassName={"active"}>
            <BsInfoCircleFill className={"NavLinkHeaderIcon"}/>
            <h1 className={"NavLinkText"}>About</h1>
          </NavLink>
          <NavLink to={ "/Work" } className={"NavLinkHeader"} activeClassName={"active"}>
            <MdWorkOutline className={"NavLinkHeaderIcon"}/>
            <h1 className={"NavLinkText"}>Work</h1>
          </NavLink>
          <NavLink to={ "/News" } className={"NavLinkHeader"} activeClassName={"active"}>
            <BiNews className={"NavLinkHeaderIcon"}/>
            <h1 className={"NavLinkText"}>News</h1>
          </NavLink>
          <NavLink to={ "/Team" } className={"NavLinkHeader"} activeClassName={"active"}>
            <HiUsers className={"NavLinkHeaderIcon"}/>
            <h1 className={"NavLinkText"}>Team</h1>
          </NavLink>
        </nav>

      </div>

    </div>
  )
};export default Header;