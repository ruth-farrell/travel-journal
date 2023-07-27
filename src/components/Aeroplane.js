import React from "react";

const Aeroplane = () => {
  return (
    <img
      src={process.env.PUBLIC_URL + `/images/aeroplane.svg`}
      alt=""
      height="100" width="100"
      className="aeroplane"
      aria-hidden="true"
    />
  );
}

export default Aeroplane;