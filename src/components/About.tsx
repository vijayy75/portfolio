import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import BlobsBackground from './BlobsBackground';

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative min-h-screen px-6 md:px-20 py-20 text-white overflow-hidden snap-start"
    >
      <BlobsBackground />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          About <span className="text-violet-500">Me</span>
        </h2>
           
           <p className='text-xl text-gray-400 text-center font-bold' >Hey! I’m Vijay Kumar</p>

        <p className="text-lg text-gray-400 leading-relaxed mt-6 ">
            A curious mind and a Full Stack Web Developer who loves bringing ideas to life on the web. I build sleek, responsive, and engaging applications using tools like React, Next.js, Tailwind CSS, and the full MERN stack.

My journey into code started in college, and what began as a spark of curiosity quickly turned into a full-blown passion. I’ve been designing and developing ever since 
crafting projects that not only work, but feel good to use.
        </p>

        <p className="text-lg text-gray-400 mt-8 leading-relaxed">
          As a fresher, I bring a fresh perspective, eagerness to learn, and a strong work ethic. I love crafting full-stack applications from scratch . whether it's designing seamless frontends or building powerful backends.

          I'm currently seeking opportunities as a Full Stack Developer, Frontend Developer, or Backend Developer where I can grow, contribute, and collaborate with inspiring teams to build meaningful digital experiences.
          
            Let’s build something great together!
          
          
        </p>
        <p className="text-xl font-bold text-gray-400 mt-20 leading-relaxed">
          "Still learning. Still building. Always evolving."
        </p>
      </div>
    </motion.section>
  );
};

export default About;
