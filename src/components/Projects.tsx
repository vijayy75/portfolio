import React from "react";
import { projects } from "../assets/asset";
import { motion } from "framer-motion";

const Project: React.FC = () => {
  return (
    <motion.section
      id="projects"
      className="py-20 px-6 md:px-12 bg-transparent min-h-screen text-white"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.4 }}
    >
      
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.4 }}
      >
        My <span className="text-violet-500">Projects</span>
      </motion.h2>

      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => {
          const direction = index % 2 === 0 ? -100 : 100;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: direction, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139,92,246,0.4)" }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
                ease: "easeOut",
              }}
              viewport={{ once: false, amount: 0.4 }}
              className="group relative rounded-2xl p-4 bg-darkCard/50 border border-white/10 transition-shadow duration-300 hover:shadow-2xl hover:shadow-purple-500/30 will-change-transform"
            >
              
              <div className="overflow-hidden rounded-xl mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-contain rounded-xl transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

              
              <p className="text-zinc-400 mb-6 text-sm">{project.description}</p>

              
              <div className="flex justify-between items-center gap-3">
                
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline text-sm flex items-center gap-1"
                >
                  Live Demo
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 3h7m0 0v7m0-7L10 14"
                    />
                  </svg>
                </a>

                
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto bg-purple-600 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1 hover:bg-purple-700 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.113.793-.258.793-.577v-2.234c-3.338.726-4.033-1.61-4.033-1.61-.547-1.388-1.335-1.756-1.335-1.756-1.091-.745.083-.729.083-.729 1.205.085 1.84 1.24 1.84 1.24 1.07 1.835 2.807 1.304 3.492.997.108-.775.42-1.304.763-1.604-2.665-.304-5.466-1.334-5.466-5.933 0-1.311.468-2.382 1.236-3.222-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.006-.404c1.02.005 2.047.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.654 1.653.243 2.873.12 3.176.77.84 1.233 1.911 1.233 3.222 0 4.61-2.804 5.625-5.475 5.921.431.37.815 1.102.815 2.222v3.293c0 .321.19.694.8.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z"
                      clipRule="evenodd"
                    />
                  </svg>
                  GitHub
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Project;
