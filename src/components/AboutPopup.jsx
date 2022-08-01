import styles from "../styles/aboutpopup.module.css"
import cn from "classnames"
import data from "../data/About"
import { useEffect } from "react"
import { useState } from "react"

export default function AboutPopup(props) {
    const style = {
        aboutPopup: {
            display: props.displayAbout ? 'block' : 'none',
        }
    }

    const skills = data.hardSkills.map(
        (skill, index) => (
            <span key={index} className={styles.aboutPopup__skills__skill}>{skill}</span>
        ))

    const [timeLeft, setTimeLeft] = useState(15)

    const decrementTime = () => {
        setTimeLeft((oldTime) => oldTime - 1)
    }

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => {decrementTime()}, 1000)
            return () => clearTimeout(timer)
        }
        else {props.setDisplayAbout(false)}
    }, [timeLeft])

    return (
        <article
            style={style.aboutPopup}
            className={styles.aboutPopup}
        >
            <span className={styles.aboutPopup__triangle}></span>
            <button 
                className={styles.aboutPopup__close}
                onClick={() => props.setDisplayAbout(false)}
            >
                {
                timeLeft > 0 && 
                    <span className={styles.aboutPopup__timeLeft}>
                        {timeLeft}
                    </span>
                }
                <span>{props.lang === 'fr' ? 'Fermer' : 'Close'}</span>
                <i className={cn("fa-solid fa-xmark", styles.aboutPopup__close__x)}></i>
            </button>
            {props.displayText(props.lang, data.aboutMe, 'title')}
            {props.displayText(props.lang, data.aboutMe, 'text')}
            {props.displayText(props.lang, data.aboutMe, 'subtitle')}
            <p className={styles.aboutPopup__skills}>
                {skills}
            </p>
        </article>
    )
}