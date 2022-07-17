import "./styles/Shorter.css";
import React, { useState } from "react";
import GetLink from "./GetLink";
import ShortButton from "./ShortButton";
import Copy from "./Copy";
import axios from "axios";

interface shortResponse {
  ok: boolean;
  result: {
    code: string;
    short_link: string;
    full_short_link: string;
    short_link2: string;
    full_short_link2: string;
    short_link3: string;
    full_short_link3: string;
    share_link: string;
    full_share_link: string;
    original_link: string;
  };
}

interface URLPacket {
  url: string;
  short_url: string;
}

export default function Shorter(): JSX.Element {
  const [urlPacket, setUrlPacket] = useState<URLPacket[] | null>(null);

  const getShortURL = async (url: string) => {
    await axios
      .get(`https://api.shrtco.de/v2/shorten?url=${url}`)
      .then((response) => {
        const res: shortResponse = response.data;

        if (urlPacket === null) {
          setUrlPacket([{ url: url, short_url: res.result.short_link }]);
        } else {
          setUrlPacket((current) => {
            return [
              ...current!,
              { url: url, short_url: res.result.short_link },
            ];
          });
        }
      })
      .catch((e) => console.log(e));
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      url: { value: string };
    };
    const url = target.url.value;

    if (url === "") {
      const input = document.getElementById("url");
      const message = document.getElementById("invalid-msg");
      input?.classList.add("invalid");
      message?.style.setProperty("display", "inherit");
    } else {
      getShortURL(url);
      target.url.value = "";
    }
  };

  return (
    <div className="shorter">
      <form className="mask" onSubmit={handleSubmit}>
        <GetLink />
        <ShortButton />
      </form>
      <div className="group-11">
        {urlPacket?.map((packet: URLPacket, index: number) => {
          return (
            <Copy url={packet.url} shortUrl={packet.short_url} key={index} />
          );
        })}
      </div>
    </div>
  );
}
