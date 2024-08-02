import './Tags.css'

export default function Tags(props) {
    return (
        <div className='cont--tags'>
            {props.tags.map(x => <Tag text={x} />)}
        </div>
    )
}

function Tag(props) {
    return (
        <div className='cont--tag'>
            <span className='tag'>
                {props.text}
            </span>
        </div>
    )
}