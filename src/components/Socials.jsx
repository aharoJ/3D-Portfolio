import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useState } from 'react';
import resume from '/Users/aharo/desk/javascript/portfolio/src/assets/resume[angel-haro].pdf'
import resume_phone from '/Users/aharo/desk/javascript/portfolio/src/assets/resume[angel-haro].png'
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { isMobile } from 'react-device-detect';


const Socials = () => 
{
  const animation = useAnimation();

  async function sequence() {
    await animation.start({ rotate: -720 });
    await animation.start({ scale: 1.5 });
    await animation.start({ rotate: 0 });
    animation.start({ scale: 0 });
  }

  return (
    <>




      <motion.nav>
        {/* Show 'Download Resume' only on non-mobile (desktop) devices */}
        <div className="flex justify-center">
          <motion.div
            style={{
              borderRadius: 100,
              cursor: 'pointer',
            }}
            onTap={sequence}
            animate={animation}
            className={!isMobile ? 'flex items-center justify-center bg-white mt-10' : 'hidden'}
          >
            <a
              href={resume}
              download
              className="inline-flex items-center justify-center px-5 py-2 text-base font-light rounded-full bg-gray-800/90 hover:bg-rose-900/90 focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              <p className="">Download Resume</p>
            </a>
          </motion.div>
        </div>



        {/* Show 'View Resume' only on mobile devices */}
        {/* <div className="flex justify-center">
          <motion.div
            style={{
              borderRadius: 100,
              cursor: 'pointer',
            }}
            onTap={sequence}
            animate={animation}
            className={isMobile ? 'flex items-center justify-center bg-white mt-10' : 'hidden'}
          >
            <a
              // href={resume_phone}
              // ISSUES with view on jpg 
              // href={resume}
              href={`https://drive.google.com/file/d/1mk8dx1yhubz_3FSphZqGR0o4VpnI1I1n/view`}
              download
              className="inline-flex items-center justify-center px-5 py-2 text-base font-light rounded-full bg-gray-800/90 hover:bg-rose-900/90 focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              <p className="">View Resume</p>
            </a>
          </motion.div>
        </div> */}

        {/* Show 'View Resume' only on mobile devices */}
        <div className="flex justify-center">
          <a
            href={resume}
            className={`${
              isMobile ? 'flex' : 'hidden'
            } items-center justify-center px-5 py-2 text-base font-light rounded-full bg-gray-800/90 hover:bg-rose-900/90 focus:outline-none focus:ring-2 focus:ring-offset-2`}
          >
            <motion.div
              style={{
                borderRadius: 100,
                cursor: 'pointer',
              }}
              onTap={sequence}
              animate={animation}
            >
              <p className="">View Resume</p>
            </motion.div>
          </a>
        </div>



        
      </motion.nav>








      <div className="text-center mt-20  rounded-full border-solid border shadow-xl shadow-indigo-500/50">
          <p className={`${styles.sectionSubText} font-semibold tracking-tighter bg-gradient-to-r from-indigo-500 via-yellow-500 to-pink-500 inline-block 
          text-transparent bg-clip-text `}>
              My social medias
          </p>
      </div>







      <div className='flex flex-wrap  flex-row flex-1 space-x-0 space-y-3 mx-5 justify-center
        md:flex-row md:space-x-7 md:justify-center md:flex-1 mt-10
        '>
            <a href="https://github.com/aharoJ/"><img 
              src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" 
              alt="Github" 
              className="md:w-full md:h-[42px]  w-full h-[30px] mt-2.5" /></a>&nbsp;
            <a href="https://discord.gg/HDDQ6pUMHt"><img 
              src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white" 
              alt="Discord" 
              className="md:w-full md:h-[40px] w-full/2 h-full"/></a>&nbsp;
            <a href="https://twitter.com/aharoJ"><img 
              src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" 
              alt="Twitter" 
              className="md:w-full md:h-[40px] w-full/2 h-full"/></a>&nbsp;
            <a href="https://www.linkedin.com/in/aharoJ/"><img 
              src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" 
              alt="Linkedin"
              className="md:w-full md:h-[40px] w-full/2 h-full" /></a>&nbsp;
            <a href="https://leetcode.com/aharoJ/"><img 
            src="https://img.shields.io/badge/-LeetCode-FFA116?style=for-the-badge&logo=LeetCode&logoColor=black" 
            alt="LeetCode"
            className="md:w-full md:h-[40px] w-full/2 h-full" /></a>&nbsp;
            <a href="mailto: haro.j.angel@gmail.com"><img 
            src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" 
            alt="Gmail"
            className="md:w-full md:h-[40px] w-full/2 h-full" /></a>&nbsp;
      </div>





      <motion.p
        variants={fadeIn("","",0.1,7.1)}
        className='mt-10 text-[20px] max-w-3xl leading-[20px]
        bg-gradient-to-r from-indigo-500 via-yellow-500 to-pink-500 inline-block text-transparent bg-clip-text 
        text-center mx-0 md:mx-48 font-light tracking-wide '
      >
        As a driven and ambitious computer scientist, I am eager to make a lasting impact in the world. Despite facing challenges early in my career due to my humble upbringing, I have revived my enthusiasm for technology and am focused on achieving recognition in the field. With a passion for software architecture, machine learning, pipelines, and hacking, I am committed to lifelong learning and embody Albert Einstein's words: "Wisdom is not a product of schooling but of the lifelong attempt to acquire it."
      </motion.p>




    </>
  )
}

export default SectionWrapper(Socials, 'socials');
