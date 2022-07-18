import "./styles/Header.css";
import logo from "../images/logo.svg";
import MenuIcon from "./MenuIcon";
import Menu from "./Menu";

export default function Header(): JSX.Element {

  return (
    <div className="header">
      <img src={logo} alt=""></img>
      <MenuIcon />
      <Menu />
    </div>
  );
}
