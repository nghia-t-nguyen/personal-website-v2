import linkIcon from '../../assets/images/link.png'
import './ExternalLink.css'

export default function ExternalLink(props) {
    return (
        <a href={props.url} target="_blank" rel="noopener noreferrer">
            <img className='img--link-icon' src={linkIcon} />
        </a>
    )
}