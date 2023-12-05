import "../stylesheets/header-styles.css";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaGithubAlt, FaCode, FaHome } from "react-icons/fa";
import { motion } from "framer-motion";

function Header() {
  return (
    <div className="header-body ">
      <div className="header-list">
        <Link className="RRDLink" to="/">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="header-icon-div">
              <FaHome />
            </div>
          </motion.div>
        </Link>

        <Link
          className="RRDLink"
          to="https://www.linkedin.com/in/pranavkamathb/"
          target="_blank"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="header-icon-div">
              <FaLinkedinIn />
            </div>
          </motion.div>
        </Link>

        <Link
          to="https://github.com/kmth-hash"
          target="_blank"
          className="RRDLink"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="header-icon-div">
              <FaGithubAlt />
            </div>
          </motion.div>
        </Link>
        <Link to="/projects" className="RRDLink">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="header-icon-div">
              <FaCode />
            </div>
          </motion.div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
