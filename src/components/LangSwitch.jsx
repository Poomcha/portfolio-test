import { useState } from "react"
import styles from "../styles/langswitch.module.css"

export default function SwitchLanguage(props) {
    const [isChecked, setIsChecked] = useState(true)

    const handleCheck = () => {
        setIsChecked(prevChecked => !prevChecked)
        props.toggleLang()
    }

    return (
        <fieldset className={styles.switchLanguage}>
            <label htmlFor="fr">
                <img src="/images/flags/fr.svg" alt="French Flag" className={styles.switchLanguage__flagIcon}/>
            </label>
            <input type="radio" name="language" id="fr" checked={isChecked} onChange={handleCheck} className={styles.switchLanguage__input_fr}/>
            <label htmlFor="en">
                <img src="/images/flags/gb.svg" alt="UK Flag" className={styles.switchLanguage__flagIcon}/>
            </label>
            <input type="radio" name="language" id="en" checked={!isChecked} onChange={handleCheck} className={styles.switchLanguage__input_en}/>
            <div className={styles.switchLanguage__toggleCtn}>
                <div className={styles.switchLanguage__slider}></div>
            </div>
        </fieldset>
    )
}