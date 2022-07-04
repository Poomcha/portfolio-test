import "../style/ProjectGrid.css"

import projects from "../data/Projects"

import ProjectMin from "./ProjectMin"

export default function ProjectsGrid(props) {
    const myProjects = projects.map((project, index) => (
        <ProjectMin 
            key={index}
            data={project}
            lang={props.lang}            
            displayText={props.displayText}
        />
    ))
    return (
        <section className="projectGrid">
            {myProjects}
        </section>
    )
}