import "./styles/Header.css";
import logo from "../images/logo.svg";
import MenuIcon from "./MenuIcon";

export default function Header() {
  return (
    <div className="header">
      <img src={logo} alt=""></img>
      <MenuIcon />
    </div>
  );
}
