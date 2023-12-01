import "../stylesheets/header-styles.css";
import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaGithubAlt,
  FaCode,
  FaCertificate,
} from "react-icons/fa";

function Header() {
  return (
    <div className="header-body ">
      <div className="header-list">
        <Link
          className="RRDLink"
          to="https://github.com/kmth-hash"
          target="_blank"
        >
          <div className="header-icon-div">
            <FaGithubAlt />
          </div>
        </Link>

        <Link
          className="RRDLink"
          to="https://www.linkedin.com/in/pranavkamathb/"
          target="_blank"
        >
          <div className="header-icon-div">
            <FaLinkedinIn />
          </div>
        </Link>


        <Link to="/projects" className="RRDLink">
        <div className="header-icon-div" >
          <FaCode />
        </div>
        </Link>
        <Link to="/projects" className="RRDLink">
        <div className="header-icon-div">
          <FaCertificate />
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
