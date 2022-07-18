import "./styles/Menu.css";

export default function Menu(): JSX.Element {
  return (
    <div className="menu" id="menu">
      <div className="container">
        <div className="item-container">
          <div className="item">Features</div>
          <div className="item">Pricing</div>
          <div className="item">Resources</div>
        </div>
        <div className="log-container">
          <div id="login">Login</div>
          <button id="sign-up">Sign Up</button>
        </div>
      </div>
    </div>
  );
}
