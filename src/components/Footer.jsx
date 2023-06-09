import React from "react";
import UseBusinessNameContext from "./UseBusinessNameContext";
const Footer = () => {
  const { businessName } = UseBusinessNameContext();

  return <footer>Copyright {businessName}</footer>;
};

export default Footer;
