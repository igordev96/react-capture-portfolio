import home1 from "../img/home1.png";
import Wave from "./Wave";
import { Link } from "react-router-dom";
//Styled-Components
import { About, Description, Hide, Image } from "../styles";
//Animation
import { titleAnimation, fade, photoAnimation } from "../animation";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const contact = useRef();
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills
        </motion.p>
        <motion.button onClick={() => contact.current.click()} variants={fade}>
          <Link
            ref={contact}
            style={{ color: "white", textDecoration: "none" }}
            to="/contact"
          >
            Contact Us
          </Link>
        </motion.button>
      </Description>
      <Image>
        <motion.img
          variants={photoAnimation}
          src={home1}
          alt="guy with a camera"
        />
      </Image>
      <Wave />
    </About>
  );
}
