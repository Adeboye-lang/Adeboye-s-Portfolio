import { RiReactjsLine } from 'react-icons/ri';
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3 } from "react-icons/fa";
import { FaSquareJs } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { RiFlutterLine } from "react-icons/ri";
import { motion } from 'framer-motion';

const iconVariant = (duration) => ({
    initial: { y: -10 },
    animate: {
    y: [10, -10],
    transition : {
        duration: duration,
        ease:"linear",
        repeat: Infinity, 
        repeatType: "reverse",
    },
    },
});
const Technologies = () => {
  return <div className="border-b border-neutral-800 pb-24">
    <motion.h1 
    whileInView={{ opacity:1, y: 0 }}
    initial={{ opacity: 0, y: -100 }}
    transition={{ duration: 1.5 }}
    className="my-20 text-center text-4xl">Technologies</motion.h1>
    <motion.div
    whileInView={{ opacity: 1, x: 0 }} 
    initial={{ opacity: 0, x: -100 }}
    transition={{ duration: 1.5 }}
    className="flex flex-wrap items-center justify-center gap-4"
    >
        <motion.div 
        variants={iconVariant(2.5)}
        initial="initial"
        animate="animate"
        className="rounded 2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className='text-7xl text-cyan-400'/>
        </motion.div>

        <motion.div 
         variants={iconVariant(6)}
         initial="initial"
         animate="animate"
        className="rounded 2xl border-4 border-neutral-800 p-4"
        >

            <FaHtml5 className='text-7xl text-red-800'/>
        </motion.div>
        <motion.div 
         variants={iconVariant(3)}
         initial="initial"
         animate="animate"
        className="rounded 2xl border-4 border-neutral-800 p-4">
        <FaCss3 className='text-7xl text-cyan-400'/>
        </motion.div>

        <motion.div 
         variants={iconVariant(4)}
         initial="initial"
         animate="animate"
        className="rounded 2xl border-4 border-neutral-800 p-4">
        <FaSquareJs className='text-7xl text-yellow-400'/>
        </motion.div>
        
        <motion.div 
         variants={iconVariant(6)}
         initial="initial"
         animate="animate"
        className="rounded 2xl border-4 border-neutral-800 p-4">
        <SiMongodb className='text-7xl text-green-400'/>
        </motion.div>

        <motion.div 
         variants={iconVariant(5)}
         initial="initial"
         animate="animate"
        className="rounded 2xl border-4 border-neutral-800 p-4">
        <RiFlutterLine className='text-7xl text-blue-400'/>
        </motion.div>
    </motion.div>
  </div>
  
}

export default Technologies