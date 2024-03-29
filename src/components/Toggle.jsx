import { useState } from "react";
import { motion } from "framer-motion";

export default function Toggle({ children, title }) {
  const [toggle, setToggle] = useState(true);
  return (
    <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? "" : children}
      <div className="line"></div>
    </motion.div>
  );
}
