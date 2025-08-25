import { motion } from "framer-motion";
import html from '../assets/html.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwindcss.png'
import node from '../assets/node.png'
import figma from '../assets/figma.png'
import mongodb from '../assets/mongo.png'
import vscode from '../assets/vs.png'

const Skills = () => {
    const skills = [
        { name: "HTML", level: 85, category: "frontend", src: {html} },
        { name: "JavaScript", level: 75, category: "frontend", src: {js} },
        { name: "React", level: 70, category: "frontend", src: {react} },
        { name: "Tailwind CSS", level: 85, category: "frontend", src: {tailwind} },
        //Backend
        { name: "Node JS", level: 60, category: "backend", src: {node} },
        { name: "MongoDB", level: 50, category: "backend", src: {mongodb} },
        //Tools
        { name: "Figma", level: 30, category: "tools", src: {figma} },
        { name: "Vs Code", level: 70, category: "tools", src: {vscode} },

    ]
    const neonColor = [
        "#4deeea", //blue
        "#9966ff", //purple
        "#ffe700" // yellow
    ]
    return (
        <section id="skills" className="py-24 px-4 relative ">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-secondary">
                    My <span className="text-primary">Skills</span>
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 place-items-center">
                    {skills.map((skill, key) => {
                        const neon = neonColor[key % neonColor.length];
                        return (
                            <motion.div
                                key={key}
                                initial={{ opacity: 0, scale: 0.6 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: key * 0.08 }}
                                viewport={{ once: true }}
                                className="relative w-32 h-32 border-2 flex flex-col item-center justify-center"
                                style={{
                                    borderColor: neon,
                                    boxShadow: `0 0 10px 6px ${neon}`,
                                    background: "transparent no-repeat fixed center"
                                }}
                            >
                                <div className="text-2xl font-bold" style={{ color: neon }}>
                                    {skill.level}%
                                </div>
                                <div className="text-sm mt-1 text-secondary uppercase tracking-wide">{skill.name}</div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Skills;