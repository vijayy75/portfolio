import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaUser,
  FaShareAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import toast from "react-hot-toast"; 

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

export default function Contact() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(import.meta.env.VITE_FORMSPREE_URL, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        form.reset();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="snap-start scroll-mt-28 min-h-screen flex flex-col justify-center items-center px-4 md:px-0 text-white"
    >
      <motion.h2
        className="text-4xl font-bold text-center text-purple-400 mb-2"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>

      <motion.p
        className="text-center text-gray-300 mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Got a question? Send me a message, and I&apos;ll get back to you soon.
      </motion.p>

      <div className="bg-black/30 backdrop-blur-lg p-6 rounded-3xl w-full max-w-3xl shadow-2xl">
        <motion.div
          className="bg-gradient-to-br from-purple-700/30 to-pink-600/10 p-6 rounded-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-purple-300 inline-block mr-2">
              Get in Touch
            </h3>
            <FaShareAlt className="inline-block text-purple-400" />
            <p className="text-gray-300 mt-2">
              Have something to discuss? Send me a message and let&apos;s talk.
            </p>
          </div>

          <motion.form
            className="space-y-4 max-w-lg mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onSubmit={handleSubmit} 
          >
            <motion.div variants={fadeInUp} custom={1}>
              <label className="flex items-center px-3 py-2 bg-black/40 rounded-xl">
                <FaUser className="text-gray-400 mr-2" />
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="bg-transparent outline-none w-full placeholder:text-gray-400 text-white"
                />
              </label>
            </motion.div>

            <motion.div variants={fadeInUp} custom={2}>
              <label className="flex items-center px-3 py-2 bg-black/40 rounded-xl">
                <FaEnvelope className="text-gray-400 mr-2" />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  className="bg-transparent outline-none w-full placeholder:text-gray-400 text-white"
                />
              </label>
            </motion.div>

            <motion.div variants={fadeInUp} custom={3}>
              <label className="flex px-3 py-2 bg-black/40 rounded-xl">
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Your Message"
                  className="bg-transparent outline-none w-full placeholder:text-gray-400 text-white resize-none"
                ></textarea>
              </label>
            </motion.div>

            <motion.div variants={fadeInUp} custom={4}>
              <button
                type="submit"
                className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 rounded-xl flex justify-center items-center gap-2 transition duration-200"
              >
                <FaEnvelope /> Send Message
              </button>
            </motion.div>
          </motion.form>

          <hr className="my-6 border-gray-600" />

          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-purple-300 mb-4">
              Connect With Me
            </h4>
            <motion.div
              className="flex justify-center gap-5 flex-wrap"
              variants={fadeInUp}
              custom={5}
            >
              {[
                {
                  href: "https://www.linkedin.com/in/vijay-dev07/",
                  icon: <FaLinkedin />,
                  color: "text-blue-400",
                },
                {
                  href: "https://www.instagram.com/vijayy_75/?hl=en",
                  icon: <FaInstagram />,
                  color: "text-pink-400",
                },
                {
                  href: "https://github.com/vijayy75",
                  icon: <FaGithub />,
                  color: "text-gray-300",
                },
                {
                  href: "https://x.com/vijayy_kumar7",
                  icon: <FaXTwitter />,
                  color: "text-white",
                },
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 flex items-center justify-center rounded-full bg-black/40 hover:scale-110 hover:shadow-lg hover:shadow-${link.color} transition-transform duration-200 ${link.color}`}
                >
                  {link.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
