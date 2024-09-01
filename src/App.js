import './App.css';
import './components/FeaturedProjects'
import Home from './pages/Home';
import GasTrackerBlog from './pages/GasTrackerBlog';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AforABlog from './pages/AforABlog';

function App() {
  return (

    // <div className="App">
    //   <GasTrackerBlog />
    //   <Home />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gas-tracker" element={<GasTrackerBlog />} />
        <Route path="/a-for-aesthetic" element={<AforABlog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
