import React from 'react'
import {Tilt} from "react-tilt";
import {motion} from "framer-motion";
import {styles} from "../style.js";
import {services} from "../constants/index.js";
import {fadeIn, textVariant} from "../utils/motion.js";
import SectionWrapper from "../hoc/index.js";

const ServiceCard = ({index, title, icon}) => {
    return (
        <Tilt className={"xs:w-[250px] w-full"}>
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                className={"w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"}
            >
                <div
                    option={{
                        max: 45,
                        scale: 1,
                        speed: 450
                    }}
                    className={"bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"}
                >
                    <img src={icon} alt={title} className={"w-16 h-16 object-contain"}/>
                    <h3 className={"text-white text-[20px] font-bold text-center"}>{title}</h3>
                </div>
            </motion.div>
        </Tilt>);
}
const About = () => {
    return (
        <>
            <motion.div
                variants={textVariant()}
            >
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>
            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className={"mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"}
            >
                Distinguished Senior Full Stack Engineer with 9+ years of experience architecting and delivering enterprise-scale distributed systems that power mission-critical applications for Fortune 500 companies. Expert in designing cloud-native architectures handling billions of transactions daily, with deep expertise in microservices, event-driven systems, and high-performance computing. Proven track record of leading technical transformations that reduced operational costs by 40% while improving system reliability to 99.99% uptime. Specialized in building scalable platforms using Java, Python, Go, and modern JavaScript frameworks, with extensive experience in AWS, Azure, Kubernetes, and distributed databases. Technical thought leader who has mentored 50+ engineers, established engineering best practices, and driven innovation through strategic technology adoption.
            </motion.p>
            <div className={"mt-20 flex flex-wrap gap-10"}>
                {services.map((service, index) => {
                    return (<ServiceCard key={service.title} index={index} {...service}/>)
                })}
            </div>
        </>
    )
}

export default SectionWrapper(About, "about")
