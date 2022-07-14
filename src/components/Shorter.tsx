import GetLink from "./GetLink";
import ShortButton from "./ShortButton";
import "./styles/Shorter.css";

export default function Shorter() {
  return (
    <div className="shorter">
      <div className="mask">
        <GetLink />
        <ShortButton />
      </div>
    </div>
  );
}
