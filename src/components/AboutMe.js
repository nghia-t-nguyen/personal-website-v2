import './AboutMe.css'
import { useInView } from 'react-intersection-observer';
import tarotCardBack from '../assets/images/tarot-card-back.png'

export default function AboutMe() {
    return (
        <div className='cont--about-me'>
            <div>
                <p>
                    I'm a computer science graduate who likes to write, paint, take photos, knit, and crochet.
                    Basically, I like to make things for fun and make them pretty while I'm at it.
                    I love accessible design and cute things. Naturally, I became interested in UI/UX design and development.
                </p>
                <p>
                    Below, you can learn more about my work eperience, projects, and how to contact me.
                </p>
            </div>
            <FaceCard />
        </div>
    )
}


function FaceCard() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.65 });

    return (
        <div className={`cont--face-card ${inView ? 'opaque-card' : ''}`}> {/* Used for when the card first appears*/}
            <div ref={ref} className={`cont-inner--face-card ${inView ? 'flipped' : ''}`}>
                <div className='cont-inner--face-card-back'>
                    <img src={tarotCardBack} height='100%' width='100%' />
                </div>

                <div className='cont-inner--face-card-front'>
                    <div className='cont-inner-cont--face-card-front'>

                    </div>
                </div>
            </div>
        </div >
    )
}