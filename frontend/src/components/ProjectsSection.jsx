import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Beginners TODo List",
        description: "A very simple todo list using MERN stack",
        image: "/projects/project1.png",
        tags: ["MongoDB", "Express", "React", "Node"],
        demoUrl: "#",
        githubUrl: "#",

    },

     {
        id: 2,
        title: "Library Management System",
        description: "just a simple java project",
        image: "/projects/project3.png",
        tags: ["Java", "Mysql"],
        demoUrl: "#",
        githubUrl: "#",

    },

     {
        id: 3,
        title: "Donatela Resort Booking",
        description: "Modern website for online resort bookings",
        image: "/projects/project2.png",
        tags: ["MongoDB", "Express", "React", "Node"],
        demoUrl: "#",
        githubUrl: "#",

    },

]

export const ProjectsSection = () => {

    return <section id = "projects" className="py-24 px-4 relative">
        <div className ="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary "> Projects</span> </h2>


        <p className="text-center text-muted-foreground mb-12 mx-w-2xl mx-auto">Here are some of my featured projects. Each projects was carefully crafted  with attention detail, performance, and user experience</p>
        <div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {projects.map ((project, key ) => (
                <div key = {key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover ">
                    <div className="h-48 overflow-hidden"> 
                        <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110">
                        </img>

                    </div>
                    <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-4 ">
                            {project.tags.map((tag)=> (
                                <span key={tag} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                            ))}
                            </div> 


                  
                    <h3 className="text-xl font-semiboldm mb-1">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                    <div className="flex justify-between items-center">
                        <div className="flex space-x-3"> 
                            <a href={project.demoUrl} 
                            target="_blank"
                            className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                <ExternalLink size={20}/>
                            </a>
                              <a href ={project.githubUrl}
                                  target="_blank"
                              className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                <Github size={20}/>
                            </a>
                             
                        </div>

                         </div>
                </div>
                  </div>

            ))}
        </div>
        <div className="text-center mt-12">
            <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/Ralphyy9yy" target="_blank">
                Check my Github <ArrowRight size={16}/>
            </a>

        </div>
        </div>


    </section>;
}