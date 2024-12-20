import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
        </motion.span>
        <div className="social">
          <a href="https://github.com/raj-hawlader">
            <img src="/github.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/raj-hawlader-844170329/">
            <img src="/linkdin.png" alt="" />
          </a>
          <a href="https://www.facebook.com/raj.hawlader.38/">
            <img src="/facebook.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
