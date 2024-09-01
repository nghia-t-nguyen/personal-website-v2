import './Home.css';
import FeaturedProjects from '../components/FeaturedProjects';
import OtherProjects from '../components/OtherProjects';
import AboutMe from '../components/AboutMe'
import Experience from '../components/Experience';

export default function Home() {
    return (
        <div className="Home">
            <div className='scroll-testing'></div>
            <div className='max-width'>
                <h1>
                    About Me
                </h1>
                <AboutMe />
                <h1>Experience</h1>
                <Experience />
                <div className='cont--heading'><h1>Featured Projects</h1></div>
                <FeaturedProjects />
                <div className='spacer'></div>
                <h1>Other Projects</h1>
                <OtherProjects />
            </div>
            <div className='scroll-testing'></div>
        </div>
    );
}
