import "./styles/Body.css";
import Button from "./Button";

export default function Body(): JSX.Element {
  return (
    <div className="body">
      <div className="moto">More than just shorter links</div>
      <div className="moto-2">
        Build your brand's recognition and get detailed insights on how your
        links are performing.
      </div>
      <div className="button-container">
        <Button />
      </div>
    </div>
  );
}
