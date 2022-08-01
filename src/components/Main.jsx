import styles from "../styles/main.module.css"
import ClientRendering from "./ClientRendering"

import ExtLinks from "./ExtLinks"
import ProjectGrid from "./ProjectsGrid"

export default function Main(props) {
    return (
        <main className={styles.main}>
            <aside className={styles.main__aside}>
                <ClientRendering>
                    <ExtLinks />
                </ClientRendering>
            </aside>
            <ProjectGrid 
                lang={props.lang}
                displayText={props.displayText}
            />
        </main>
    )
}