import React from "react";

const BusinessNameContext = React.createContext({
  businessName: "",
  setBusinessName: () => {},
});

export default BusinessNameContext;
