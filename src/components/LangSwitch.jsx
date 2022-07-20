import { useState } from "react"
import "../style/LangSwitch.css"

export default function SwitchLanguage(props) {
    const [isChecked, setIsChecked] = useState(true)

    const handleCheck = () => {
        setIsChecked(prevChecked => !prevChecked)
        props.toggleLang()
    }

    return (
        <fieldset className="switchLanguage" >
            <label htmlFor="fr">
                <img src="/images/flags/fr.svg" alt="French Flag" className="switchLanguage__flagIcon"/>
            </label>
            <input type="radio" name="language" id="fr" checked={isChecked} onChange={handleCheck} />
            <label htmlFor="en">
                <img src="/images/flags/gb.svg" alt="UK Flag" className="switchLanguage__flagIcon"/>
            </label>
            <input type="radio" name="language" id="en" checked={!isChecked} onChange={handleCheck} />
            <div className="switchLanguage__toggleCtn">
                <div className="switchLanguage__slider"></div>
            </div>
        </fieldset>
    )
}