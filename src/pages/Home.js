import './Home.css';
import FeaturedProjects from '../components/FeaturedProjects';
import OtherProjects from '../components/OtherProjects';
import AboutMe from '../components/AboutMe'
import Experience from '../components/Experience';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { mirage } from 'ldrs'

export default function Home() {
    mirage.register()

    const [isLoading, setIsLoading] = useState(true);
    const [isVisible, setIsVisible] = useState(true);



    useEffect(() => {
        const lockScroll = () => {
            document.body.style.overflow = 'hidden';
            document.querySelector('html').scrollTo(0, 0) // Scroll position to top
        };

        const unlockScroll = () => {
            document.body.style.overflow = '' //re-enable scroll
        };

        lockScroll();

        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        const timer2 = setTimeout(() => {
            setIsVisible(false);
            unlockScroll();
        }, 3000);

        return () => {
            clearTimeout(timer)
            clearTimeout(timer2)
        }
    }, []);

    const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: false, threshold: 0, rootMargin: '-50% 0px -10px 0px' });
    const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: false, threshold: 0, rootMargin: '-50% 0px -10px 0px' });
    const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: false, threshold: 0, rootMargin: '-50% 0px -10px 0px' });
    const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: false, threshold: 0, rootMargin: '-50% 0px -10px 0px' });

    return (
        <div className="Home">
            <div className={`loading fade-out ${!isLoading ? 'active' : ''} ${!isVisible ? 'not-visible' : ''}`}>
                <div className='loader-container'>
                    <l-mirage
                        size="60"
                        speed="4"
                        color="#D6D6FF"
                    ></l-mirage>
                    <span>patience is a virtue</span>
                </div>
            </div>
            <Navbar highlight={[inView1, inView2, inView3, inView4]} />
            <section id='hero'>
                <Hero />
            </section>

            <div className='max-width'>
                <section ref={ref1} id='about'>
                    <AboutMe />
                </section>
                <section ref={ref2} id='experience'>
                    <h1>Experience</h1>
                    <Experience />
                </section>
                <section ref={ref3} id='projects'>
                    <div className='cont--heading'><h1>Featured Projects</h1></div> {/*container allows to move it up z-index*/}
                    <FeaturedProjects />
                    <div className='spacer'></div>
                    <h1>Other Projects</h1>
                    <OtherProjects />
                </section>
                <section ref={ref4} id='contact'>
                    <h1>Contact Me</h1>
                    <h3><strong>Email:</strong> 321nguyenn2001[at]gmail.com<br /><strong>Phone:</strong> 843-940-2081</h3>
                </section>
            </div>
        </div>
    );
}
