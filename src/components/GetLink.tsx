import "./styles/GetLink.css";

export default function GetLink(): JSX.Element {
  const handleFocus = () => {
    const input = document.getElementById("url");
    const message = document.getElementById("invalid-msg");
    if (input?.classList.contains("invalid")) {
      input.classList.remove("invalid");
      message?.style.setProperty("display", "none");
    }
  };

  return (
    <div className="get-link">
      <input
        type="text"
        name="url"
        id="url"
        placeholder="Shorten a link here..."
        onFocus={handleFocus}
      ></input>
      <div id="invalid-msg">Please add a link</div>
    </div>
  );
}
