import "./Header.css";
import HeaderLogo from "../Assets/HeaderLogo.png";
import {NavLink} from "react-router-dom";

const Header = () => {
  return(
    <div className={"HeaderContainer"}>
      <div className={"HeaderContent"}>
        <img src={HeaderLogo} alt={"HeaderLogo"} className={"HeaderLogo"}/>
        <nav className={"NavHeader"}>
          <ul className={"UlHeader"}>
            <NavLink to={ "/" } className={"NavLinkHeader"} activeClassName={"active"}>
              Home
            </NavLink>
            <NavLink to={ "/AboutUs" } className={"NavLinkHeader"} activeClassName={"active"}>
              About
            </NavLink>
            <NavLink to={ "/Work" } className={"NavLinkHeader"} activeClassName={"active"}>
              Work
            </NavLink>
            <NavLink to={ "/News" } className={"NavLinkHeader"} activeClassName={"active"}>
              News
            </NavLink>
            <NavLink to={ "/Contact" } className={"NavLinkHeader"} activeClassName={"active"}>
              Team
            </NavLink>
          </ul>
        </nav>

      </div>

    </div>
  )
};export default Header;