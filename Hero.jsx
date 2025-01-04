import { delay, motion } from "motion/react"
const container = (delay) => ({
    hidden: {x:-100, opacity:0},
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    }
})
const hero = () => {
  return <div className="border-b border-neutral-900 pb-4 lg:mb-35">
    <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
        <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pb-13 text-5xl font-thin tracking-tight lg:mt-16 
            lg:text-8xl">
            Bello Adeboye
            </motion.h1>
                <motion.span 
                 variants={container(0.5)}
                 initial="hidden"
                 animate="visible"
                className="bg-gradient-to-r from bg-pink-300 via-slate-600 to-blue-600 bg-clip-text text-4xl tracking-tight text-transparent">Front-End Engineer</motion.span>
                <motion.p
                  variants={container(1)}
                  initial="hidden"
                  animate="visible"
                className="my-2 max-w-xl py-6 font-light tracking-tighter">I am passionate front-end engineer with a knack for crafting robust and scalable web applications. With a 5 years
                of hands on-experience, I have honored my skills in front-end technologies like React and Flutter. 
                My goal is to leverage my expertise to create innovate solutions that drive business growth and deliver exceptional user experiences
                </motion.p>
        </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
            </div>
        </div>
    </div>
  </div>
  
};

export default hero;