import "../style/ExternalLinks.css"

import about from "../data/About.js"

import LinkImg from "./LinkImg" 

import { useState, useEffect } from "react"

const randomAnim = () => {
    const animations = ["grow", "rotate", "shakeX", "fallDown"];
    const elements = ["linkedIn", "email", "github"];
    const oneOrChainedAnimation = Math.ceil(Math.random()*10%2)
    const randomElement = elements[Math.floor(Math.random()*elements.length)]
    const randomAnimation = animations[Math.floor(Math.random()*animations.length)]
    if (oneOrChainedAnimation === 1) {
        return {
            element: randomElement,
            animation: randomAnimation
        }
    } else {
        return {
            element: randomElement,
            animation: `${randomAnimation}-${animations.filter(anim => anim !== randomAnimation)[Math.floor(Math.random()*(animations.length-1))]}`
        }
    }
}

const randomTime = (min, max) => (Math.ceil(Math.random()*(max-min)+min)*1000)


export default function ExternalLinks() {

    const [animObject, setAnimObject] = useState({})

    useEffect(() => {
        const timeoutId = setTimeout(() => setAnimObject(randomAnim()), randomTime(8, 4))
        return () => {
            clearTimeout(timeoutId)
        }
    })

    return (
        // Random key here make the whole component re render on each new state
        <aside className="externalLinks" key={Math.random()}>
            <div className="externalLinks__cat-ctn">
                <i className="fa-solid fa-at externalLinks__cat"></i>
            </div>
            <LinkImg 
                link={about.externalLinks.linkedIn} 
                classes={`fa-brands fa-linkedin-in externalLinks__img ${animObject.element === "linkedIn" ? animObject.animation : ''}`} />
            <LinkImg
                link={`mailto:${about.externalLinks.gmail}`} 
                classes={`fa-solid fa-envelope externalLinks__img ${animObject.element === "email" ? animObject.animation : ''}`} />
            <div className="externalLinks__cat-ctn">
                <i className="fa-solid fa-code externalLinks__cat"></i> 
            </div>
            <LinkImg 
                link={about.externalLinks.github} 
                classes={`fa-brands fa-github externalLinks__img ${animObject.element === "github" ? animObject.animation : ''}`} />
        </aside>
    )
}