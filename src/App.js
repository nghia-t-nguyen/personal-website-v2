import './App.css';
import './components/FeaturedProjects'
import Home from './pages/Home';
import GasTrackerBlog from './pages/GasTrackerBlog';

function App() {
  return (
    <div className="App">
      <GasTrackerBlog />
      <Home />
    </div>
  );
}

export default App;
