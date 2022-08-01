import { useState } from "react"
import styles from "../styles/about.module.css"

import AboutPopup from "./AboutPopup"
import ClientRendering from "./ClientRendering";

export default function About(props) {
    const [displayAbout, setDisplayAbout] = useState(true);

    return (
        <div className={styles.about}>
            <img 
                className={styles.about__image}
                src="/images/me/minimal-avatars.svg" 
                alt="Me" 
                onClick={() => setDisplayAbout(true)}
            />
            <h1 
                className={styles.about__title}
                onClick={() => setDisplayAbout(true)}>
                    Ben Degenève
            </h1>
            <ClientRendering>
                <AboutPopup 
                    lang={props.lang} 
                    displayText={props.displayText}
                    displayAbout={displayAbout}
                    setDisplayAbout={setDisplayAbout} 
                />
            </ClientRendering>
        </div>
    )
}