import "../style/ProjectMin.css"

export default function ProjectMin(props) {
    return (
        <figure className="projectMin">
            <img 
                src={props.data.imgMinSrc}
                alt={props.data.imgMinAlt}
                className="projectMin__image" 
            />
            <figcaption 
                className="projectMin__caption"
            >

            </figcaption>
        </figure>
    )
}