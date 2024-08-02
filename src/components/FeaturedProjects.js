import './FeaturedProjects.css'
import Tags from './Tags'
import Description from './Description'
import ExternalLink from './buttons/ExternalLink'
import NavButton from './buttons/NavButton'

export default function FeaturedProjects() {
    return (
        <div className='cont--featured-projects'>
            <div className='cont--featured-projects-column'>
                <div className='line'>
                </div>
                <div className='cont--featured-project-1 cont--featured-project'>
                    <div className='cont--two-thirds-width'>
                        <span className='span-topline'>featured project #1</span>
                        <div className='cont--featured-projects-title'>
                            <div className='dash'></div>
                            <h2 class>Gas Tracker</h2>
                        </div>
                        <Tags tags={['ReactJS', 'HTML', 'CSS', 'JS', 'Firebase', 'Cloud Firestore', 'AWS', 'Node.js', 'BitQuery']} />
                    </div>
                    <Description text='Gas Tracker is a web application that helps users track gas, a.k.a. the computational work required to perform transactions on a blockchain network.' />
                    <div className='cont--two-thirds-width'>
                        <div className='cont--featured-projects-links'>
                            <ExternalLink url='https://gas-trkr.netlify.app/' />
                            <NavButton text='Learn the process' />
                        </div>
                    </div>

                </div>

            </div>
            <div className='item2'></div>
        </div>
    )
}