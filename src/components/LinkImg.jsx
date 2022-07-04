import "../style/ExternalLinks.css"

export default function LinkImg(props) {
    return (
        <a href={props.link}>
            <i className={props.classes}></i>
        </a>
    )
}