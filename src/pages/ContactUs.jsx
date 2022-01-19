//Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation } from "../animation";
import styled from "styled-components";

export default function ContactUs() {
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Title>
        <motion.h2 variants={titleAnimation}>Get in touch</motion.h2>
      </Title>
      <Hide>
        <Social variants={titleAnimation}>
          <Circle />
          <h2>Send Us A Message</h2>
        </Social>
      </Hide>
      <Hide>
        <Social variants={titleAnimation}>
          <Circle />
          <h2>Send An Email</h2>
        </Social>
      </Hide>
      <Hide>
        <Social variants={titleAnimation}>
          <Circle />
          <h2>Social Media</h2>
        </Social>
      </Hide>
    </ContactStyle>
  );
}

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #888;
  min-height: 90vh;
  @media screen and (max-width: 700px) {
    padding: 3rem 0 0 0;
  }
`;

const Title = styled.div`
  overflow: hidden;
  margin-bottom: 4rem;
  color: #eee;
  @media screen and (max-width: 700px) {
    margin-bottom: 3rem;
    text-align: center;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  @media screen and (max-width: 700px) {
    width: 100vw;
    padding-left: 2rem;
  }
  h2 {
    margin: 2rem;
  }
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #333;

  @media screen and (max-width: 700px) {
    width: 2rem;
    height: 2rem;
  }
`;
