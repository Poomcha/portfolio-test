import styles from "../styles/extlinks.module.css"
import cn from "classnames"

export default function LinkImg(props) {
    return (
        <a href={props.link} className={styles.externalLinks__link}>
            <span style={{display: 'none'}}>{props.name}</span>
            <i className={
                cn(
                    props.classes
                        .split(' ')
                        .filter(style => style.startsWith('fa-') || style.startsWith('externalLinks_'))
                        .map(style => style.startsWith('externalLinks_') ? styles.externalLinks__img : style),
                    props.classes
                        .split(' ')
                        .filter(style => !style.startsWith('fa-') && !style.startsWith('externalLinks_'))
                        .length > 0 ?
                            styles[props.classes.split(' ')[props.classes.split(' ').length - 1]]
                            :
                            ''
                )
            }></i>
        </a>
    )
}