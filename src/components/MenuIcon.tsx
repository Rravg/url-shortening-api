import "./styles/MenuIcon.css";

export default function MenuIcon(): JSX.Element {
  const handleClick = () => {
    const menu = document.getElementById("menu");
    menu?.classList.toggle("visible");
  };

  return (
    <div className="icon" onClick={handleClick}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  );
}
