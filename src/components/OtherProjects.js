import './OtherProjects.css'
import { useState } from 'react'
import ActionButton from './buttons/ActionButton'
import { useInView } from 'react-intersection-observer'
import tarotCardBack from '../assets/images/tarot-card-back.png'
import { data } from '../data'
import SmallerTags from './SmallerTags'
import ExternalLink from './buttons/ExternalLink'
import NavButton from './buttons/NavButton'
import SmallerNavButton from './buttons/SmallerNavButton'

export default function OtherProjects() {
    const [isHidden, setIsHidden] = useState(true)

    const handleButtonClick = () => {
        setIsHidden(prev => !prev)
    }



    return (
        <div className='cont--other-projects'>
            <div className={`cont--other-projects-cards ${isHidden ? 'cont--other-projects-cards-hidden' : ''}`}>
                {data.projectCards.map(x => <ProjectCard key={x.title} subtitle={x.subtitle} title={x.title} tags={x.tags} description={x.description} />)}
            </div>
            <div className={`${isHidden ? '' : 'cont--action-button-extra-margin'}`}>
                <ActionButton handleClick={handleButtonClick} text={`${isHidden ? 'View more projects' : 'View less projects'}`} />
            </div>
        </div>
    )
}

function ProjectCard(props) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.65 });

    return (
        <div className={`cont--project-card ${inView ? 'opaque-card' : ''}`}>
            <div ref={ref} className={`cont-inner--project-card ${inView ? 'flipped' : ''}`}>
                <div className='cont-inner--project-card-back'>
                    <img src={tarotCardBack} height='100%' width='100%' />
                </div>

                <div className='cont-inner--project-card-front'>
                    <div className='cont-inner-cont--project-card-front'>
                        <div>
                            <span className='span--project-card-subtitle'>{props.subtitle}</span>
                            <h3 className='h4--project-card-title'>{props.title}</h3>
                            <SmallerTags tags={props.tags} />
                            <p className='p--description'>{props.description}</p>
                        </div>
                        <div className='cont--project-card-buttons'>
                            <ExternalLink />
                            <div className='wrapr--learn-more'>
                                <SmallerNavButton text='Learn more' />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}