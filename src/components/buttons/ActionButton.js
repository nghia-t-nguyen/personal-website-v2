import './ActionButton.css'

export default function ActionButton(props) {
    return (
        <button className='btn--action-button' onClick={props.handleClick}>
            <span className="span--action-button-text">{props.text}</span>
        </button>
    )
}