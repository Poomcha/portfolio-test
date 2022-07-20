import "../style/ExternalLinks.css"

export default function LinkImg(props) {
    return (
        <a href={props.link}>
            <span style={{display: 'none'}}>{props.name}</span>
            <i className={props.classes}></i>
        </a>
    )
}