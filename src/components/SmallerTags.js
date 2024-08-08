import './SmallerTags.css'

export default function SmallerTags(props) {
    return (
        <div className='cont--smaller-tags'>
            {props.tags.map(x => <SmallerTag text={x} />)}
        </div>
    )
}

function SmallerTag(props) {
    return (
        <div className='cont--smaller-tag'>
            <span className='smaller-tag'>
                {props.text}
            </span>
        </div>
    )
}