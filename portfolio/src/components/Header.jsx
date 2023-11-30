import '../stylesheets/header-styles.css';

import { FaLinkedinIn , FaGithubAlt , FaCode , FaCertificate } from "react-icons/fa";

function Header() {
  return (
    <div className="header-body ">
      <div className="header-list">
        <div className="header-icon-div">
          <FaGithubAlt />
        </div>
        <div className="header-icon-div">
          <FaLinkedinIn />
        </div>
        <div className="header-icon-div">
          <FaCode />
        </div>
        <div className="header-icon-div">
          <FaCertificate />
        </div>
      </div>
    </div>
  );
}

export default Header;
