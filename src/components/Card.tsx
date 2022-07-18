import "./styles/Card.css";

interface CardProps {
  title: string;
  text: string;
  imgSrc: string;
}

export default function Card({ title, text, imgSrc }: CardProps): JSX.Element {
  return (
    <div className="card">
      <div className="container">
        <div className="card-icon">
          <div className="image">
            <img src={imgSrc} alt="" />
          </div>
        </div>
        <div className="title">{title}</div>
        <div className="text">{text}</div>
      </div>
    </div>
  );
}
