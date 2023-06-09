import React from "react";
import UseBusinessNameContext from "./UseBusinessNameContext";
const Title = () => {
  const { businessName } = UseBusinessNameContext();

  return <h1>{businessName}</h1>;
};

export default Title;
