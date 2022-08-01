import styles from "../styles/main.module.css"

import ExtLinks from "./ExtLinks"
import ProjectGrid from "./ProjectsGrid"

export default function Main(props) {
    return (
        <main className={styles.main}>
            <aside className={styles.main__aside}>
                <ExtLinks />
            </aside>
            <ProjectGrid 
                lang={props.lang}
                displayText={props.displayText}
            />
        </main>
    )
}