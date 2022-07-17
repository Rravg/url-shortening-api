import { useState } from "react";
import "./styles/Copy.css";

interface CopyProps {
  url: string;
  shortUrl: string;
}

export default function Copy({ url, shortUrl }: CopyProps): JSX.Element {
  const [copied, setCopied] = useState(false);

  const returnCopy = () => {
    setCopied((current) => {
      return !current;
    });
  };

  const handleClick = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied((current) => {
      return !current;
    });
    setTimeout(returnCopy, 5000);
  };

  return (
    <div className="copy">
      <div className="url-container">
        <div className="url">{url}</div>
      </div>
      <div className="s-url-container">
        <div className="short-url">{shortUrl}</div>
        <button onClick={handleClick} className={copied ? "copied" : ""}>
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}
