import { memo } from "react";

interface CloudProps {
  position?: string;
}

const CloudComponent = ({ position }: CloudProps) => {
  return (
    <div className={`cloud -${position ? position : ""}`} aria-hidden="true">
      <div className="cloud-inner"></div>
    </div>
  );
};

const Cloud = memo(CloudComponent);

export default Cloud;
