import styles from "../styles/projectmin.module.css"
import cn from "classnames"
export default function ProjectMin(props) {
    const style = {
        emptyMin: {
            opacity: props.data.name ? '1' : `${1.6 - props.index/10}`
        }
    }
    return (
        <figure 
            // className={`projectMin ${(!props.data.name && "projectMin--emptyMin")}`}
            style={style.emptyMin}
            className={
                cn(
                    styles.projectMin,
                    {[styles.projectMin_emptyMin]: !props.data.name}
                )}
        >
            {props.data.name ? <div>
                <img 
                    src={props.data.imgMinSrc}
                    alt={props.data.imgMinAlt}
                    className={styles.projectMin__image}
                />
                <figcaption 
                    className={styles.projectMin__caption}
                >
                    <i className={
                        cn(
                            "fa-solid fa-arrow-up",
                            styles.projectMin__caption__arrow
                        )
                    }></i>
                    <span>{props.displayText(props.lang, props.data.shortDescription, 'text')}</span>
                    <a 
                        href={props.data.repoUrl} 
                        className={
                            cn(
                                styles.projectMin__link,
                                styles.projectMin__link_code
                            )
                        }
                    >
                        Code <i className={
                            cn(
                                "fa-solid fa-arrow-up-right-from-square",
                                styles.projectMin__link__icon
                            )
                        }></i>
                        <span className={styles.projectMin__link__underline_code}></span>
                    </a>
                    {
                        props.data.liveVersion && 
                            <a 
                                href={props.data.ghPagesUrl} 
                                className={
                                    cn(
                                        styles.projectMin__link,
                                        styles.projectMin__link_live
                                    )
                                }
                            >
                                {props.lang === "fr" ? "Voir le site" : "Live version"} 
                                <i className={
                                    cn(
                                        "fa-solid fa-arrow-up-right-from-square",
                                        styles.projectMin__link__icon
                                    )
                                }></i>
                                <span className={styles.projectMin__link__underline_live}></span>
                            </a>
                    }
                </figcaption>
            </div> : 
            <figcaption className={styles.projectMin__caption_emptyMin}>
                {
                    props.lang === 'fr' ? 
                        "Projet en cours" :
                        "Work in progress"    
                }
            </figcaption>
            }            
        </figure>
    )
}