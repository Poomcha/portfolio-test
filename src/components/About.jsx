import "../style/About.css"

import AboutPopup from "./AboutPopup"

export default function About() {
    return (
        <div className="about">
            <img className="about__image" src="/images/me/minimal-avatars.svg" alt="Me" />
            <h1 className="about__title">Ben Degenève</h1>
            <AboutPopup />
        </div>
    )
}