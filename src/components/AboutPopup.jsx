import "../style/AboutPopup.css"

import data from "../data/About"
import { useEffect } from "react"
import { useState } from "react"

export default function AboutPopup(props) {
    const style = {
        aboutPopup: {
            display: props.displayAbout ? 'block' : 'none'
        }
    }

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
            className="aboutPopup"
        >
            <span className="aboutPopup__triangle"></span>
            {
                timeLeft > 0 && 
                    <span className="aboutPopup__timeLeft">
                        {timeLeft}
                    </span>
            }
            <button 
                className="aboutPopup__close"
                onClick={() => props.setDisplayAbout(false)}
            >
                <i className="fa-solid fa-xmark aboutPopup__close__x"></i>
            </button>
            {props.displayText(props.lang, data.aboutMe, 'title')}
            {props.displayText(props.lang, data.aboutMe, 'text')}
        </article>
    )
}