import { motion } from "framer-motion";

const ScrambleText = ({ text, className }) => {
    // Variants for container to stagger children
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.03 } // Stagger each word by 0.03s
        }
    };

    // Variants for each word
    const child = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className={className}
            style={{ display: "flex", flexWrap: "wrap", columnGap: "0.4rem" }} // Flex wrap for natural flow
        >
            {text.split(" ").map((word, index) => (
                <motion.span key={index} variants={child} style={{ display: "inline-block" }}>
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default ScrambleText;
