import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl font-thin font-mono text-cyan-400"
      >
        &gt; INITIALIZE_CONTACT
        <span className="animate-pulse">_</span>
      </motion.h1>
      <div className="text-center tracking-tighter">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-6"
        >
          <span className="block text-xs text-neutral-500 font-mono mb-1">LOCATION_</span>
          <p className="text-neutral-300 hover:text-cyan-400 transition-colors duration-300">
            {CONTACT.address}
          </p>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-6"
        >
          <span className="block text-xs text-neutral-500 font-mono mb-1">PHONE_ID_</span>
          <p className="text-neutral-300 hover:text-purple-400 transition-colors duration-300 font-mono">
            {CONTACT.phoneNo}
          </p>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          className="mt-10"
        >
          <a
            href={`mailto:${CONTACT.email}?subject=Project%20Inquiry&body=Hello%20Bello,%0D%0A%0D%0AI%20would%20like%20to%20discuss...`}
            className="group relative inline-flex items-center gap-3 px-8 py-3 overflow-hidden rounded-full bg-neutral-900 border border-neutral-800 hover:border-cyan-500/50 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="font-mono text-sm text-cyan-400 group-hover:text-cyan-300 tracking-wider">
              INITIALIZE_COMMS
            </span>
            <span className="text-xl">🚀</span>
          </a>
          <p className="mt-4 text-xs text-neutral-600 font-mono">
            {CONTACT.email}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;