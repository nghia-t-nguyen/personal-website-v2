import './Description.css'

export default function Description(props) {
    return (
        <div className="cont--desc-featured-projects">
            <p className="desc-featured-projects">
                {props.text}
            </p>
        </div>
    )
}