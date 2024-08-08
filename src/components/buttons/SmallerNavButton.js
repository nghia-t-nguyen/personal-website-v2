import './SmallerNavButton.css'

export default function SmallerNavButton(props) {
    return (
        <div className="cont--smaller-nav-button">
            <a className="a--smaller-nav-button" href={props.url}>
                {props.text}
            </a>
        </div>
    )
}