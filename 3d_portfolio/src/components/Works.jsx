import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({
  index,
  date,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        {/*remove this to get rid of date*/}
        <div>
          <p className='mt-1 text-secondary text-[14px]'>{date}</p>
        </div>
        <div className='mt-2'/>
        {/*remove this to get rid of date*/}
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  // Function to check if the device is mobile
  const isMobileDevice = () => {
    // Regular expression to match common mobile device screen sizes
    const mobileRegex = /Android|webOS|iPhone|iPad|IEMobile|Opera Mini/i;
    return mobileRegex.test(navigator.userAgent);
  };
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          My work
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
          Projects.
        </h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          The projects listed below serve as tangible demonstrations of my skills and expertise, offering real-world examples of my work. Each project is briefly outlined along with links to the corresponding code repositories. In the code repositories you may find more details and live demos. These projects reflect my ability to solve complex problems, navigate diverse technologies, and successfully manage projects.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.slice(0, isMobileDevice() ? 3 : projects.length).map((project, index) => (
          <ProjectCard 
            key={`project-${index}`} 
            index={index}
            {...project}
          />
        ))}
      </div>

      {isMobileDevice() && (
        <p className={`${styles.sectionSubText} text-center mt-12`}>More projects listed on web version</p>
      )}
    </>
  )
}

export default SectionWrapper(Works, "");