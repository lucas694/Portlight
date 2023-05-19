import "./Footer.css";
import FooterLogo from "../Assets/FooterLogo.png";
import BtnBase from "./Buttons/BtnBase";
import {BsInstagram, BsFacebook, BsTwitter, BsLinkedin} from "react-icons/bs";
import {Link} from "react-router-dom";

const Footer = () => {
  return(
    <div className={"FooterContainer"}>
      <div className={"FooterContent"}>
        <div>
          <img src={FooterLogo} alt={"FooterLogo"} />
        </div>
        <ul className={"UlFooter"}>
          <h1 className={"FooterTitle"}>Pages</h1>
          <Link to={"/"}>
            <li className={"LiFooter"}>Home</li>
          </Link>
          <Link to={"/AboutUs"}>
            <li className={"LiFooter"}>About</li>
          </Link>
          <Link to={"/Work"}>
            <li className={"LiFooter"}>Work</li>
          </Link>
          <Link to={"#"}>
            <li className={"LiFooter"}>Pricing</li>
          </Link>
        </ul>
        <div className={"ContactDiv"}>
          <h1 className={"FooterTitle"}>Contact</h1>
          <p className={"FooterContact"}>741 New South Head Rd, Triple Bay SWFW 3148, New York</p>
        </div>
        {/* Newsletter */}
        <div className={"NewsletterFooter"}>
          <h1 className={"FooterTitle"}>Newsletter</h1>
          <div className={"FooterInputDiv"}>
            <input className={"FooterInput"} type={"text"} placeholder={"Enter your email"} />
            <BtnBase children={"Submit"} className={"BlackBtn"}/>
          </div>
          <div className={"FooterSocial"}>
            <BsInstagram className={"FooterSocialIcon"} />
            <BsFacebook className={"FooterSocialIcon"} />
            <BsTwitter className={"FooterSocialIcon"} />
            <BsLinkedin className={"FooterSocialIcon"} />
          </div>
        </div>
      </div>
      <div className={"FooterCopyDiv"}>
        <h1 className={"FooterCopy"}>Copyright © Portlight | Designed by VictorFlow - Powered by <span>Lucas Cardoso.</span></h1>
      </div>

    </div>
  )
};export default Footer;