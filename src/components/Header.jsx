import "../style/Header.css"

import About from "./About"
import LangSwitch from "./LangSwitch"

export default function Header(props) {
    return (
        <header className='header'>
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