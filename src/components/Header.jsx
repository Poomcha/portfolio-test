import styles from "../styles/header.module.css"

import About from "./About"
import LangSwitch from "./LangSwitch"

export default function Header(props) {
    return (
        <header className={styles.header}>
            <About 
                lang={props.lang}
                displayText={props.displayText}
            />
            <LangSwitch 
                lang={props.lang}
                toggleLang={props.toggleLang}
            />
        </header>
    )
}