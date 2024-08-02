import './NavButton.css'

export default function NavButton(props) {
    return (
        <div className="cont--nav-button">
            <a className="a--nav-button" href={props.url}>
                {props.text}
            </a>
        </div>
    )
}