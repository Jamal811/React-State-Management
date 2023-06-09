import React, { useContext } from "react";
import BusinessNameContext from "./BusinessNameContext";
const UseBusinessNameContext = () => {
  const { businessName, setBusinessName } = useContext(BusinessNameContext);
  return { businessName, setBusinessName };
};

export default UseBusinessNameContext;
