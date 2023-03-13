import React from 'react';
import {motion} from 'framer-motion';
import {styles} from '../styles'
import {ComputersCanvas, StarsCanvas} from './canvas';
import ai from '/Users/aharo/desk/javascript/portfolio/src/assets/ai.png'; //maybe I use it idk yet..
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX}
        absolute inset-0 md:top-[100px] xs:top-[90px] max-w-7xl mx-auto flex 
        flex- items-start gap-5 `}>
        
        {/* this the purple bar */}
        <div className='flex flex-col justify-center items-center mt-20'>
          <div className='w-5 h-5 rounded-full bg-indigo-500'/>
          <div className='w-1 sm:h80 h-40 bg-indigo-500'/>
        </div>
 
        <div >
          {/* this the init Header stuff */}
          {/* <h1 className= {`${styles.heroHeadText}`} > 
              <span className='text-[#195eff]'> aharoJ </span>
          </h1> */}

          <h1 className= {`${styles.heroHeadText}`} > 
              <span className=' 
              font-extralight tracking-tighter bg-gradient-to-r from-violet-500 via-rose-600 to-slate-900 inline-block text-transparent 
              bg-clip-text 
              '
              > Angel J. Haro </span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 `} >
            <a class="
              bg-gradient-to-r from-indigo-500 via-yellow-500 to-pink-500
              inline-block text-transparent bg-clip-text font-extralight tracking-wide "
            >Algorithm and Data Structures Engineer </a> <br/>

            <a class="
              bg-gradient-to-r from-indigo-500 via-yellow-500 to-pink-500
              inline-block text-transparent bg-clip-text font-extralight tracking-wide "
            >Machine Learning Enigneer</a> <br/>
                        
            <a class="
              bg-gradient-to-r from-indigo-500 via-yellow-500 to-pink-500
              inline-block text-transparent bg-clip-text font-extralight tracking-wide "
            >Software Architect</a> <br/>            
            
            <a class="
              bg-gradient-to-r from-indigo-500 via-yellow-500 to-pink-500 
              inline-block text-transparent bg-clip-text font-extralight tracking-wide "
            >Backend Dev</a> <br/>   
          </p>
        </div>

      </div>


      <ComputersCanvas />

      
      {/* this is the squily thing that drops us to the bottom phone focused */}
      <div className='absolute xs:bottom-32 xl:bottom-5 md:bottom-10 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px]
          rounded-3xl border-4 border-secondary flex justify-center
          items-start p-2
          '>
            <motion.div 
              animate={{
                y: [0,24,0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className=
              'w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>


    </section>
  )
}

export default Hero