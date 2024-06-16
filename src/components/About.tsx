import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import ServiceCard from "./ServiceCard";

function About() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I'm skilled software developer with 8 years of experience. I have
          experience in building web applications and services using modern
          technologies like React, Node.js, TypeScript, Express, MongoDB,
          PostgreSQL. I'm also interested in blockchain technologies and have
          experience in building smart contracts and decentralized applications
          using Solidity, Web3.js, Ethers.js, Hardhat, Truffle. I'm quick
          learner and always open to new technologies and challenges, I like to
          collaborate closely with clients to create efficient, robust and
          scalable solutions that solve their business needs. Let's work
          together to build something great!
        </motion.p>

        <div className="mt-20 flex flex-wrap gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </motion.div>
    </>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(About, "about");
