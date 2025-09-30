import './FeaturedProjects.css'
import Tags from './Tags'
import Description from './Description'
import ExternalLink from './buttons/ExternalLink'
import NavButton from './buttons/NavButton'
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import gasTrackerScreenshot from '../assets/images/gas-tracker-screenshot.png'
import canopyWalkScreenshot from '../assets/images/canopy_walk.png'
import aForAScreenshot from '../assets/images/a-for-aesthetic-screenshot.png'
import R1 from '../assets/images/R1.pdf'

export default function FeaturedProjects() {
    const [lineHeight, setLineHeight] = useState(0);
    const [isListening, setIsListing] = useState(true);

    useEffect(() => {
        let animationFrameId;

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const viewportHeight = window.innerHeight;
            const container = document.querySelector('.line');
            const containerTop = container.getBoundingClientRect().top + scrollY;
            const distanceToMiddle = Math.min(1245, (scrollY + viewportHeight * 0.7 + 45) - containerTop);

            animationFrameId = requestAnimationFrame(() => {
                setLineHeight(prev => Math.max(prev, distanceToMiddle));
            });

            if (distanceToMiddle >= 1245) {
                setIsListing(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isListening]);



    const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true, threshold: 0, rootMargin: '50% 0px -30% 0px' });
    const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0, rootMargin: '50% 0px -30% 0px' });
    const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true, threshold: 0, rootMargin: '50% 0px -30% 0px' });

    return (
        <div className='cont--featured-projects'>
            <div className='cont--featured-projects-column'>
                <div className='line' style={{ height: `${lineHeight}px` }}>
                </div>
                <div ref={ref1} className={`cont--featured-project-1 cont--featured-project ${inView1 ? 'visible' : 'hidden'}`} >
                    <div className='cont--two-thirds-width'>
                        <span className='span-topline'>featured project #1</span>
                        <div className='cont--featured-projects-title'>
                            <div className='dash'></div>
                            <h2>Gas Tracker</h2>
                        </div>
                        <div className='cont--featured-project-tags'>
                            <Tags tags={['ReactJS', 'HTML', 'CSS', 'JS', 'Firebase', 'Cloud Firestore', 'AWS', 'Node.js', 'BitQuery']} />
                        </div>

                    </div>
                    <Description text='Gas Tracker is a web application that helps users track gas, a.k.a. the computational work required to perform transactions on a blockchain network.' />
                    <div className='cont--two-thirds-width'>
                        <div className='cont--featured-projects-links'>
                            <ExternalLink url='https://gas-trkr.netlify.app/' />
                            <NavButton text='Learn more' url='/gas-tracker' />
                        </div>
                    </div>
                    <div className='smaller-screenshot' style={{ backgroundImage: `url(${gasTrackerScreenshot})` }}></div>
                </div>

                <div ref={ref2} className={`cont--featured-project-2 cont--featured-project ${inView2 ? 'visible' : 'hidden'}`}>
                    <div className='cont--two-thirds-width'>
                        <span className='span-topline'>featured project #2</span>
                        <div className='cont--featured-projects-title'>
                            <div className='dash'></div>
                            <h2>Canopy Walk (Ongoing)</h2>
                        </div>
                        <div className='cont--featured-project-tags'>
                            <Tags tags={['UX Research', 'UX/UI Design', 'Interactive', 'Unity', 'Prototyping']} />
                        </div>

                    </div>
                    <Description text='Canopy Walk is a new exhibit featured in the Georgia Aquarium. In this project, I researched potential interactives that will enhance this exhibit.' />
                    <div className='cont--two-thirds-width'>
                        <div className='cont--featured-projects-links'>
                            <ExternalLink url={R1} />
                            <NavButton text='Learn more' url='/canopy-walk' />
                        </div>
                    </div>
                    <div className='smaller-screenshot' style={{ backgroundImage: `url(${canopyWalkScreenshot})` }}></div>
                </div>

                <div ref={ref3} className={`cont--featured-project-3 cont--featured-project ${inView3 ? 'visible' : 'hidden'}`}>
                    <div className='cont--two-thirds-width'>
                        <span className='span-topline'>featured project #3</span>
                        <div className='cont--featured-projects-title'>
                            <div className='dash'></div>
                            <h2>A for Aesthetic</h2>
                        </div>
                        <div className='cont--featured-project-tags'>
                            <Tags tags={['Shopify', 'Liquid Templating', 'HTML', 'CSS', 'Figma']} />
                        </div>

                    </div>
                    <Description text='Asian-founded, aesthetic, and authentic. A for Aesthetic is a small business that focuses on curating aesthetics using original artwork.' />
                    <div className='cont--two-thirds-width'>
                        <div className='cont--featured-projects-links'>
                            <ExternalLink url='https://aforaesthetic.com/' />
                            <NavButton text='Learn more' url='/a-for-aesthetic' />
                        </div>
                    </div>
                    <div className='smaller-screenshot' style={{ backgroundImage: `url(${aForAScreenshot})` }}></div>
                </div>

            </div>
            <div className='cont--image-column'>
                <div className={`cont--image ${inView1 ? 'visible' : 'hidden-left'}`}>
                    <div className='embed embed--image-1' >
                        <div className='filter--embed-image'></div>
                        <div className='cont--embed-image' style={{ backgroundImage: `url(${gasTrackerScreenshot})` }}></div>
                    </div>
                </div>
                <div className={`cont--image ${inView2 ? 'visible' : 'hidden-left'}`}>
                    <div className='embed embed--image-2'>
                        <div className='filter--embed-image'></div>
                        <div className='cont--embed-image' style={{ backgroundImage: `url(${canopyWalkScreenshot})` }}></div>
                    </div>
                </div>
                <div className={`cont--image ${inView3 ? 'visible' : 'hidden-left'}`}>
                    <div className='embed embed--image-3'>
                        <div className='filter--embed-image'></div>
                        <div className='cont--embed-image' style={{ backgroundImage: `url(${aForAScreenshot})` }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}