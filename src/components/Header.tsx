import React from "react";
import "./Header.css";

const XRPL_LOGO = "/assets/XRPLEVM_FullWhiteLogo.svg";
const ECOSYSTEM_SVG = "/assets/ECOSYSTEM.svg";

const Header: React.FC = () => {
  return (
    <div className="header-container">
      <img src={XRPL_LOGO} alt="XRPL EVM Sidechain Logo" className="xrpl-logo" />
      <img src={ECOSYSTEM_SVG} alt="ECOSYSTEM" className="ecosystem-svg" />
    </div>
  );
};

export default Header;
