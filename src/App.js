import './App.css';
import './components/FeaturedProjects'
import Home from './pages/Home';
import GasTrackerBlog from './pages/GasTrackerBlog';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AforABlog from './pages/AforABlog';
import PhotoPortfolioBlog from './pages/PhotoPortfolioBlog';
import GitTimeTravelBlog from './pages/GitTimeTravelBlog';
import MiscGalleryBlog from './pages/MiscGalleryBlog';
import NativeGardeningBlog from './pages/NativeGardeningBlog';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gas-tracker" element={<GasTrackerBlog />} />
        <Route path="/a-for-aesthetic" element={<AforABlog />} />
        <Route path="/photo-portfolio" element={<PhotoPortfolioBlog />} />
        <Route path="/git-time-travel" element={<GitTimeTravelBlog />} />
        <Route path="/misc-art-gallery" element={<MiscGalleryBlog />} />
        <Route path="/native-gardening" element={<NativeGardeningBlog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
