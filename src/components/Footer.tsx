import "./styles/Footer.css";
import logo from "../images/logo.svg";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";
import FooterItem from "./FooterItem";

export default function Footer(): JSX.Element {
  return (
    <div className="footer">
      <div className="image">
        <img src={logo} alt=""></img>
      </div>
      <div className="f-items-containers">
        <div className="footer-item-container">
          <FooterItem
            title="Features"
            items={["Link Shortening", "Branded Links", "Analytics"]}
          />
          <FooterItem
            title="Resources"
            items={["Blog", "Developers", "Support"]}
          />
          <FooterItem
            title="Company"
            items={["About", "Our Team", "Careers", "Contact"]}
          />
        </div>
        <div className="icons">
          <img src={facebook} alt=""></img>
          <img src={twitter} alt=""></img>
          <img src={pinterest} alt=""></img>
          <img src={instagram} alt=""></img>
        </div>
      </div>
    </div>
  );
}
