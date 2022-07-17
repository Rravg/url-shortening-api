import { useState } from "react";
import "./styles/Header.css";
import logo from "../images/logo.svg";
import MenuIcon from "./MenuIcon";
import Menu from "./Menu";

export default function Header(): JSX.Element {
  const [menu, setMenu] = useState(false);
  return (
    <div className="header">
      <img src={logo} alt=""></img>
      <MenuIcon setMenu={setMenu} />
      {menu && <Menu />}
    </div>
  );
}
