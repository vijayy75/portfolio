import { skills } from '../assets/asset';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen py-20 px-6 md:px-20 bg-transparent text-white snap-start"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          My <span className="text-violet-500">Skills</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {skills.map((skill, index) => {
            const { Icon, name, color } = skill;
            const direction = index % 2 === 0 ? -100 : 100;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: direction, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(139,92,246,0.8)' }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: 'easeOut',
                }}
                viewport={{ once: false, amount: 0.4 }}
                className="bg-white/10  aspect-square rounded-xl p-4 flex flex-col items-center justify-center 
                           shadow-md text-white cursor-pointer will-change-transform"
              >
                <Icon className={`text-7xl mb-4 ${color}`} />
                <p className="text-xl font-medium">{name}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
