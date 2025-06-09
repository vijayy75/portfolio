import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin,  } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import myImage from '../assets/asset';
import BlobsBackground from './BlobsBackground';
import { useInView } from 'react-intersection-observer';
import { FaXTwitter } from 'react-icons/fa6';

const Hero = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.section
      ref={ref}
      id="home"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 text-white overflow-hidden snap-start"
    >
      <BlobsBackground />

      <div className="flex-1 space-y-10 z-10">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Hi, I am <span className="text-violet-500">Vijay Kumar</span>
          <br />
          Full Stack Developer
        </h1>

        
          <span className="text-xl text-bold md:text-2xl text-gray-300 mt-4 block">
          <Typewriter
            words={['MERN Stack Developer','Tech Enthusiast', 'Freelancer']}
            loop={0}
            cursor
            cursorStyle=""
            typeSpeed={150}
            deleteSpeed={40}
            delaySpeed={1500}
          />
          <span className="text-violet-500 ml-1">|</span>
        </span>
        

        <p className="text-xl text-gray-400 max-w-xl">
          Enhancing digital experiences that are smooth, scalable, and made to impress.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="/Vijay_Kumar_Resume.pdf"
            download
            className="bg-white/10 border border-violet-600 hover:bg-violet-700 px-6 py-3 rounded-lg text-white font-medium transition shadow-md"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="bg-white/ border border-violet-600 hover:bg-violet-700 px-6 py-3 rounded-lg text-white font-medium transition shadow-md"
          >
            Hire Me
          </a>
        </div>

        <div className="flex gap-5 mt-6">
          <a href="https://github.com/vijayy75" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-violet-400 transition" />
          </a>
          <a href="https://www.linkedin.com/in/vijay-dev07/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-violet-400 transition" />
          </a>
          <a href="https://x.com/vijayy_kumar7" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="text-2xl hover:text-violet-400 transition" />
          </a>
        </div>
      </div>

      <div className='flex-1 mt-10 md:mt-0 flex justify-center z-10'>
<div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-[26rem] md:h-[26rem] rounded-full flex items-center justify-center">

  
  <div className="absolute w-full h-full rounded-full animate-spin-gradient z-0 blur-sm opacity-70">
    <div className="w-full h-full rounded-full bg-[conic-gradient(from_0deg,#8b5cf6,#3b82f6,#06b6d4,#8b5cf6)]" />
  </div>

  
  <div className="absolute w-[96%] h-[96%] rounded-full bg-black/75 z-10" />

  
  <div className="relative w-[92%] h-[92%] rounded-full z-20 overflow-hidden">
    <img
      src={myImage}
      alt="Vijay Kumar"
      className="rounded-full object-cover w-full h-full"
    />
  </div>
</div>
</div>







    </motion.section>
  );
};

export default Hero;
