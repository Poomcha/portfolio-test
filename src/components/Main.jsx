import "../style/Main.css"

import ExtLinks from "./ExtLinks"
import ProjectGrid from "./ProjectsGrid"

export default function Main(props) {
    return (
        <main className="main">
            <aside>
                <ExtLinks />
            </aside>
            <ProjectGrid 
                lang={props.lang}
                displayText={props.displayText}
            />
        </main>
    )
}