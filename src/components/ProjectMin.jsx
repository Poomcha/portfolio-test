import "../style/ProjectMin.css"

export default function ProjectMin(props) {
    const style = {
        emptyMin: {
            opacity: props.data.name ? '1' : `${1.6 - props.index/10}`
        }
    }
    return (
        <figure 
            className={`projectMin ${(!props.data.name && "projectMin--emptyMin")}`}
            style={style.emptyMin}
        >
            {props.data.name ? <>
                <img 
                    src={props.data.imgMinSrc}
                    alt={props.data.imgMinAlt}
                    className="projectMin__image" 
                />
                <figcaption 
                    className="projectMin__caption"
                >
                    <i className="fa-solid fa-arrow-up projectMin__caption__arrow"></i>
                    <>{props.displayText(props.lang, props.data.shortDescription, 'text')}</>
                    <a 
                        href={props.data.repoUrl} 
                        className="projectMin__link projectMin__link--code"
                    >
                        Code
                        <span className="projectMin__link__underline--code"></span>
                    </a>
                    {
                        props.data.liveVersion && 
                            <a 
                                href={props.data.ghPagesUrl} 
                                className="projectMin__link projectMin__link--live"
                            >
                                {props.lang === "fr" ? "Voir le site" : "Live version"}
                                <span className="projectMin__link__underline--live"></span>
                            </a>
                    }
                </figcaption>
            </> : 
            <figcaption className="projectMin__caption--emptyMin">
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