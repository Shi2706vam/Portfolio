import { ExternalLink } from "lucide-react"
import valo from '../assets/valo.png'
import zentry from '../assets/zentry.png'
import ecom from '../assets/E-commerce.png'
import clarify from '../assets/clarify.png'

const projects = [
    {
        id: 1,
        title: "Zentry Website UI Clone",
        description: "Created a Zentry website UI clone using React, Tailwind CSS, and Framer Motion",
        image: zentry,
        url: "https://zentry-two-tau.vercel.app/",
        tags: ["React JS", "Tailwind CSS", "Framer Motion"]
    },
    {
        id: 2,
        title: "E-Commerce Website",
        description: "Created a E-Commerce website using React, Tailwind CSS, and AOS animation",
        image: ecom,
        url: "https://shop-me-olive.vercel.app/",
        tags: ["React JS", "Tailwind CSS", "AOS animation"]
    },
    {
        id: 3,
        title: "Valorant Media UI Clone",
        description: "Created a Valorant Media website UI clone using React JS and Tailwind CSS",
        image: valo,
        url: "https://shi2706vam.github.io/valorantMediaUI/",
        tags: ["React JS", "Tailwind CSS"]
    },
    {
        id: 4,
        title: "Authentication Website",
        description: "Full stack authentication website using React JS, Node JS, Express JS, and MongoDB",
        image: clarify,
        url: "https://clarifybot.onrender.com/",
        tags: ["React JS", "Tailwind CSS", "Node JS", "Express JS", "MongoDB"]
    },
]
const Projects = () => {
    return <section id="projects" className="py-24 px-2 relative" >
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-secondary">
                Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-center text-secondary mb-12 max-w-2xl mx-auto">
                There are some projects Each project was created with attention to detail and performance
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                {projects.map((project)=>(
                    <div  key={project.id} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-45 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            {JSON.stringify(project)}
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-3 mb-4">
                                {project.tags.map((tag, index)=>(
                                    <span key={index} className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary">{tag}</span>
                                ))}
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-1 text-secondary">{project.title}</h3>
                        <p className="text-secondary text-sm mb-4">{project.description}</p>
                        <div className="flex space-x-3">
                            <a target="_blank" href={project.url} className="text-primary px-2 py-2 transition-colors duration-300"><ExternalLink /></a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}

export default Projects;