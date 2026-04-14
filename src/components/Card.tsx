import { memo, useState, type ReactNode } from "react";
import FallbackImage from "./FallbackImage";

interface CardProps {
  children: ReactNode;
}

interface CardLeftProps {
  imgSrc: string;
  imgAlt: string;
  imgLoading?: "eager" | "lazy";
  title: string;
}

export function Card({ children }: CardProps) {
  const [cardOpen, setCardOpen] = useState(false);

  const handleCardMouseEnter = () => {
    setCardOpen(true);
  };

  const handleCardMouseLeave = () => {
    setCardOpen(false);
  };

  return (
    <div className={`card ${cardOpen ? "card-open" : ""}`} onMouseEnter={handleCardMouseEnter} onMouseLeave={handleCardMouseLeave}>
      {children}
    </div>
  );
}

function CardLeftComponent({ imgSrc, imgAlt, imgLoading, title }: CardLeftProps) {
  return (
    <div className="card-left">
      <FallbackImage src={imgSrc} alt={imgAlt} className="card-left-img" width="350" height="515" loading={imgLoading} />
      <h2 className="card-left-title">{title}</h2>
    </div>
  );
}

function CardRightComponent({ children }: CardProps) {
  return <div className="card-right">{children}</div>;
}

export const CardLeft = memo(CardLeftComponent);
export const CardRight = memo(CardRightComponent);
