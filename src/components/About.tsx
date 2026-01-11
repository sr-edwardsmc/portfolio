/* eslint-disable react-refresh/only-export-components */
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
          I'm a software engineer with over 11 years of experience building
          scalable web applications and services using modern technologies such
          as React, Node.js, TypeScript, Express, MongoDB, and PostgreSQL. I
          also specialize in blockchain and Web3 development, with hands-on
          experience designing smart contracts and decentralized applications
          using Solidity, Ethers.js, Web3.js, Wagmi, Viem, Hardhat, and Truffle.
          I'm a fast learner who thrives on new challenges and emerging
          technologies. I value close collaboration with clients and teams to
          deliver efficient, secure, and scalable solutions that align with real
          business needs.
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

export default SectionWrapper(About, "about");
