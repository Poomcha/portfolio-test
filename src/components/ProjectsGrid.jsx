import styles from "../styles/projectgrid.module.css"

import projects from "../data/Projects"

import ProjectMin from "./ProjectMin"

export default function ProjectsGrid(props) {
    const myProjects = projects.map((project, index) => (
        <ProjectMin 
            key={index}
            index={index}
            data={project}
            lang={props.lang}            
            displayText={props.displayText}
        />
    ))
    return (
        <section className={styles.projectGrid}>
            {myProjects}
        </section>
    )
}