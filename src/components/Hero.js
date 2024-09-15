import './Hero.css'
import StarPeople from '../assets/images/star_people4.gif'

export default function Hero() {
    return (
        <div className='cont--hero' style={{ backgroundImage: `url(${StarPeople})` }}>
            <div className='cont--hero-inner'>

                <h3 className='h3--creative fade-in--1'>creative</h3>
                <h1 className='h1--hero mark--hero fade-in--2'>Designer</h1>
                <h1 className='h1--hero mark--hero fade-in--3'>Developer</h1>
                <h3 className='h3--welcome fade-in--4'>✦ Welcome to my portfolio ✦</h3>
            </div>
        </div>
    )
}