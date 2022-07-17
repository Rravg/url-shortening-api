import "./styles/MenuIcon.css";

interface MenuIconProps {
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MenuIcon({ setMenu }: MenuIconProps): JSX.Element {
  const handleClick = () => {
    setMenu((state) => {
      return !state;
    });
  };

  return (
    <div className="icon" onClick={handleClick}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  );
}
