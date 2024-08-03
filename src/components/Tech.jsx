import React from "react";
import { styles } from "../styles";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Technical expertise acquired in</p>
          <h2 className={styles.sectionHeadText}>.</h2>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
