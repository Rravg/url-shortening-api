import "./styles/ShortButton.css";

export default function ShortButton(): JSX.Element {
  return (
    <button type="submit" className="short-button">
      <div className="s-txt">Shorten It!</div>
    </button>
  );
}
