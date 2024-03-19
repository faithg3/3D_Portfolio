import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Feedbacks = () => {
  return (
    <>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center`}>Want to connect?</p>
          <h2 className={`${styles.sectionHeadText} text-center`}>LinkedIn.</h2>
        </motion.div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='flex justify-center mt-4 text-secondary text-[17px]'
        >
          <a href="https://www.linkedin.com/in/faith-gutierrez00/"
          >
            <button className='bg-tertiary py-4 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>
              LinkedIn Profile
            </button>
          </a>
        </motion.p>
        <motion.div variants={textVariant()} className="mt-20">
          <p className={`${styles.sectionSubText} text-center`}>Interested?</p>
          <h2 className={`${styles.sectionHeadText} text-center`}>Resume.</h2>
        </motion.div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='flex justify-center mt-4 text-secondary text-[17px]'
        >
          <a href="https://drive.google.com/file/d/1rQvuDG6zu9UA6ktyXczD1TCW5ltYSCy9/view?usp=sharing"
          >
            <button className='bg-tertiary py-4 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>
              Google Drive Download Link
            </button>
          </a>
        </motion.p>
    </>
  )
}

export default SectionWrapper(Feedbacks, "feedback");