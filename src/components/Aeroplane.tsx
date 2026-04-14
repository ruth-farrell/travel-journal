import { memo } from "react";

const AeroplaneComponent = () => {
  return (
    <img
      src={process.env.PUBLIC_URL + `/images/aeroplane.svg`}
      alt=""
      height="100"
      width="100"
      className="aeroplane"
      aria-hidden="true"
    />
  );
};

const Aeroplane = memo(AeroplaneComponent);

export default Aeroplane;
