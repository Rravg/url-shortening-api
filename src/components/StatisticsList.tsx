import "./styles/StatisticsList.css";
import Card from "./Card";
import brandRecognitionIcon from "../images/icon-brand-recognition.svg";
import detailedRecordsIcon from "../images/icon-detailed-records.svg";
import fullyCustomizableIcon from "../images/icon-fully-customizable.svg";

export default function StatisticsList(): JSX.Element {
  return (
    <div className="group-15">
      <div className="group-9">
        <div className="s-title">Advanced Statistics</div>
        <div className="s-text">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </div>
      </div>
      <div className="group-14">
        <Card
          title="Brand Recognition"
          text="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
          imgSrc={brandRecognitionIcon}
        />
        <Card
          title="Detailed Records"
          text="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
          imgSrc={detailedRecordsIcon}
        />
        <Card
          title="Fully Customizable"
          text="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
          imgSrc={fullyCustomizableIcon}
        />
        <div className="line"></div>
      </div>
    </div>
  );
}
