import { useState } from "react"
import "../style/About.css"

import AboutPopup from "./AboutPopup"

export default function About(props) {
    const [displayAbout, setDisplayAbout] = useState(true);

    return (
        <div className="about">
            <img 
                className="about__image" 
                src={process.env.PUBLIC_URL + "/images/me/minimal-avatars.svg"} 
                alt="Me" 
                onClick={() => setDisplayAbout(true)}
            />
            <h1 
                className="about__title" 
                onClick={() => setDisplayAbout(true)}>
                    Ben Degenève
            </h1>
            <AboutPopup 
                lang={props.lang} 
                displayText={props.displayText}
                displayAbout={displayAbout}
                setDisplayAbout={setDisplayAbout} 
            />
        </div>
    )
}