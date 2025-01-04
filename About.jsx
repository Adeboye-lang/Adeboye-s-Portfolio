import { motion } from "framer-motion";
const About = () => {
  return <div className="border-b bg-neutral-900 pb-4">
    <h1 className="my-20 text-center text-4xl">
        About 
        <span className="text-neutral-500"> Me</span>
        </h1>
        <div className="flex flex-wrap">
      
            <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
            </div>
            </div>
            <div className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                <motion.p
                         whileHover={{ scale: 1.1}}
                         whileTap={{ scale: 0.95 }}
                         onHoverStart={() => console.log('hover started!')}
                       
                    className="my-2 max-w-xl py-6 items-center">I am a dedicated and versatile front-end engineer with a passion for creating efficient and user friendly web applications
                        With 5 years of professional experience in the field, I have honed my skills in HTML, CSS, JavaScript, and React and also Flutter.<br/> My journey
                        started with a strong foundation in computer science and mathematics, which has enabled me to approach problems with a logical and analytical mindset.
                        I am always eager to learn and improve, and I am excited to bring my skills and experience. <br/>It has also evolved into career where i continuously strive to learn and adapt to new challenges. <br/>I 
                        thrive in environments where I can quickly learn and adapt to new technologies and tools, and I am confident that my skills and experience make me a valuable asset to any team. <br/>Outside of coding, 
                        I enjoy staying active, exploring new technologies, and learning new skills. I am excited to bring my skills and experience to a new role and contribute to a team that shares my passion for innovation and excellence.
                    </motion.p>
                </div>
            </div>
        </div>
  </div>
  
}

export default About