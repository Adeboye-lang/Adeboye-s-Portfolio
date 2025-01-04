import { motion } from "framer-motion"
const Experience = () => {
  return <div className="border b border-neutral-900 pb-4">
    <motion.h1 
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity:0, y: -100 }}
    transition={{ duration: 0.5 }}
    className="my-20 text-center text-4xl">Experience</motion.h1>
     <div className="mb-8 flex-wrap lg:justify-center">
        <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity:0, x: -100 }}
        transition={{ duration: 1 }}
        className="w-full lg:w-1/2"></motion.div>
     </div>
     <motion.p
     whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity:0, x: -100 }}
        transition={{ duration: 1 }}
     className="mb-2 text-neutral-200">2020-2022 :
     Collaborate with the design team to ensure the app meets user requirement and design guidelines
Develop high quality mobile applications using Flutter for both iOS and Android platforms
Integrate third-party APIs and web services for enhanced app functionality
Stay updated with the latest industry and advancements in Flutter Development.
     </motion.p>
     

     <motion.p 
     whileInView={{ opacity: 1, x: 0 }}
     initial={{ opacity:0, x: -100 }}
     transition={{ duration: 1 }}
     className="mb-2 text-neutral-200">2023-Present :
        Develop and maintain multiple mobile applications using Flutter
        Collaborate with cross-functional teams to design and implement new features
        Participate in code reviews to ensure high-quality code and best practices
        Stay up-to-date with the latest Flutter <br />features and best practices
        Developed a responsive Login and sign up page using HTML,CSS and JavaScript
     </motion.p>


     <motion.p 
     whileInView={{ opacity: 1, x: 0 }}
     initial={{ opacity:0, x: -100 }}
     transition={{ duration: 1 }}
     className="mb-2 text-neutral-300 items-start">
     Created a network load balancing system using Round-robin Algorithm and Node Js
     Developed and maintained responsive web applications using HTML, CSS, and JavaScript.
      Developed a responsive Login and sign up page using HTML,CSS and JavaScript
     </motion.p>
  </div>
  
}

export default Experience