import React from "react";
import Tilt from "react-parallax-tilt";

import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Intro</p>
        <h2 className={styles.sectionHeadText}>Overview </h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)}>
        Hi, as a software developer with two years of
        experience, I have been focusing on honing my skills in React and
        JavaScript to build dynamic, user-friendly applications. My journey has
        involved both studying and applying these technologies in real-world
        projects, enabling me to deepen my understanding of modern web
        development practices. I have a strong passion for creating clean
        (hopefully), efficient, and maintainable code while delivering intuitive
        user experiences. React's component-based architecture has allowed me to
        develop scalable applications, while my proficiency in JavaScript
        ensures that I can implement seamless interactivity and functionality.
        Alongside my work in React and JavaScript, I have developed a growing
        interest in Python and Typescript which I am actively exploring to expand my skill set
        and versatility as a developer. My goal is to continuously improve as a
        software engineer, embrace new challenges and technologies to deliver
        innovative solutions and contribute meaningfully to any development
        team. HIRE ME!
      </motion.p>
    </>
  );
};

export default About;
