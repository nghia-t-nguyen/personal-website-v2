import './Home.css';
import FeaturedProjects from '../components/FeaturedProjects';
import OtherProjects from '../components/OtherProjects';
import AboutMe from '../components/AboutMe'
import Experience from '../components/Experience';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

export default function Home() {
    return (
        <div className="Home">
            <Navbar />
            <section id='hero'>
                <Hero />
            </section>

            <div className='max-width'>
                <section id='about'>
                    <h1>
                        About Me
                    </h1>
                    <AboutMe />
                </section>
                <section id='experience'>
                    <h1>Experience</h1>
                    <Experience />
                </section>
                <section id='projects'>
                    <div className='cont--heading'><h1>Featured Projects</h1></div> {/*container allows to move it up z-index*/}
                    <FeaturedProjects />
                    <div className='spacer'></div>
                    <h1>Other Projects</h1>
                    <OtherProjects />
                </section>

            </div>
            <div className='scroll-testing'></div>
        </div>
    );
}
