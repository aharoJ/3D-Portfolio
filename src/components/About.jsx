import React from 'react'
import Tilt from 'react-tilt';
import {motion} from 'framer-motion';
import {styles} from '../styles';
import {services} from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
const ServiceCard= ({index, title, icon})=> {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div 
      variants=
      {fadeIn('right', 'spring', 0.5 * index, 0.75)}

      className='w-full green-pink-gradient
      p-[1px] rounded-[20px] shadow-card'
      >
        <div 
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px]
          py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
          >
            <img src={icon} alt='title'  className='w-16 h-16 object-contain'/>
            <h3 className='text-white text-[20px] font-bold text-center '> {title}</h3>

        </div>

      </motion.div>

    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <div className="text-center mb-10  rounded-full border-solid border shadow-xl shadow-indigo-500/50">
          <p className={`${styles.sectionSubText} font-semibold tracking-tighter bg-gradient-to-r from-indigo-500 via-yellow-500 to-pink-500 inline-block 
          text-transparent bg-clip-text `}>
              My social medias
          </p>
        </div>

        <div className='flex flex-wrap  flex-row flex-1 space-x-0 space-y-3 mx-5 justify-center
        md:flex-row md:space-x-7 md:justify-center md:flex-1 
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

      </motion.div>

      <motion.p
        variants={fadeIn("","",0.1,0.1)}
        className='mt-10 text-[20px] max-w-3xl leading-[20px]
        bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-900 via-slate-100 to-neutral-300 inline-block text-transparent bg-clip-text text-center mx-0 md:mx-48
        font-light tracking-tight '
      >
        As a driven and ambitious computer scientist, I am eager to make a lasting impact in the world. Despite facing challenges early in my career due to my humble upbringing, I have revived my enthusiasm for technology and am focused on achieving recognition in the field. With a passion for software architecture, machine learning, pipelines, and hacking, I am committed to lifelong learning and embody Albert Einstein's words: "Wisdom is not a product of schooling but of the lifelong attempt to acquire it."
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((services, index)=> (
          <ServiceCard key={services.title} index=
          {index} {...services}/>    
        
        ))}

      </div>
    
    </>
  )
}

export default SectionWrapper(About, 'about')