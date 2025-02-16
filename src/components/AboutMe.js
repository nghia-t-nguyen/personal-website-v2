import './AboutMe.css'
import { useInView } from 'react-intersection-observer';
import crystalOrb from '../assets/icons/crystal-orb.png'
import tarotCardBack from '../assets/images/tarot-card-back.png'
import photoOfMe from '../assets/images/photoOfMe.png'
import blueChilis from '../assets/images/blue_chilis.png'

export default function AboutMe() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.65 });

    return (
        <div ref={ref} className={`cont--about-me ${inView ? 'visible' : ''}`}>
            <div>
                <h1>About Me</h1>
                <p>
                    Hi, I'm <strong>Johnny</strong> (a.k.a. Nghia).
                    I'm a <strong>computer science graduate</strong> who likes to write, paint, take photos, grow native plants, knit, and crochet.
                    Basically, I like to make things and make them pretty while I'm at it.
                    In fact, I feel the most like myself when I create things.
                    I love challenging myself with design and making things cute.<br /><br /> Naturally, I became <strong>interested in UI/UX design, development, and human-computer interaction</strong>.
                    In order to complement my passion, I have built skills in the following:
                </p>
                <div className='cont--skills-list'>
                    <ul className='skills-list'>
                        {['HTML', 'CSS', 'JS', 'React', 'JQuery', 'REST APIs', 'NodeJS', 'Figma', 'Firebase'].map(x => <li><SkillItem text={x} /></li>)}

                    </ul>
                </div>

                {/* <p>
                    I also have experience working with other technologies and frameworks, such as:
                </p>
                <div className='cont--skills-list'>
                    <ul className='skills-list'>
                        {['Python', 'C++', 'C#', 'Kotlin', 'Dart', 'Java', 'Android Studio', 'Unity', 'Linux', 'pandas', 'Tensorflow', 'PyTorch'].map(x => <li><SkillItem text={x} /></li>)}

                    </ul>
                </div> */}

                <p>
                    <br />
                    I like to have fun, so this portfolio is magic-themed since creating websites is basically magic. Below you can learn about my general experience and projects.
                </p>
                <img src={blueChilis} style={{ marginTop: '0.75rem' }} width='100%' />
            </div>
            <FaceCard inView={inView} />

        </div>
    )
}


function FaceCard(props) {


    return (
        <div className={`cont--face-card ${props.inView ? 'opaque-card' : ''}`}> {/* Used for when the card first appears*/}
            <div className={`cont-inner--face-card ${props.inView ? 'flipped' : ''}`}>
                <div className='cont-inner--face-card-back'>
                    <img src={tarotCardBack} height='100%' width='100%' />
                </div>

                <div className='cont-inner--face-card-front'>
                    <img src={photoOfMe} height='100%' width='100%' />
                </div>
            </div>
        </div >
    )
}

function SkillItem(props) {
    return (
        <div className='cont--skill-item'>
            <img src={crystalOrb} height='8px' width='8px' style={{ marginRight: '0.3rem', marginBottom: '1px' }} />
            <span>
                {props.text}
            </span>
        </div>
    )
}