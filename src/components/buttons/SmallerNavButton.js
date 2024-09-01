import './SmallerNavButton.css'

export default function SmallerNavButton(props) {
    return (
        <a className="a--smaller-nav-button" href={props.url}>
            <div className="cont--smaller-nav-button">
                {props.text}
            </div>
        </a>
    )
}