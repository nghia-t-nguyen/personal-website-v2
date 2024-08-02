import linkIcon from '../../assets/images/link.png'
import './ExternalLink.css'

export default function ExternalLink(props) {
    return (
        <a href={props.url}>
            <img className='img--link-icon' src={linkIcon} />
        </a>
    )
}