import "./styles/FooterItem.css";

interface FooterItemProps {
  title: string;
  items: string[];
}

export default function FooterItem({
  title,
  items,
}: FooterItemProps): JSX.Element {
  return (
    <div className="f-item">
      <div className="title">{title}</div>
      {items.map((item: string, index: number) => {
        return (
          <div className="item" key={index}>
            {item}
          </div>
        );
      })}
    </div>
  );
}
