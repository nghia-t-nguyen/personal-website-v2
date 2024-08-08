import './App.css';
import './components/FeaturedProjects'
import FeaturedProjects from './components/FeaturedProjects';
import OtherProjects from './components/OtherProjects';

function App() {
  return (
    <div className="App">
      <div className='scroll-testing'></div>
      <div className='max-width'>
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

export default App;
