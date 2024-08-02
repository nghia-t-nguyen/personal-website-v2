import './App.css';
import './components/FeaturedProjects'
import FeaturedProjects from './components/FeaturedProjects';

function App() {
  return (
    <div className="App">
      <div className='scroll-testing'></div>
      <div className='max-width'>
        <h1>Featured Projects</h1>
        <FeaturedProjects />
      </div>
      <div className='scroll-testing'></div>
    </div>
  );
}

export default App;
