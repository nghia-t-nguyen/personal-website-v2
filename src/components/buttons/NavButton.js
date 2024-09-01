import './NavButton.css'

export default function NavButton(props) {
    return (
        <a className="a--nav-button" href={props.url} target="_blank" rel="noopener noreferrer">
            <div className="cont--nav-button">
                {props.text}
            </div>
        </a>
    )
}