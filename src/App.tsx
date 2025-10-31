import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import OfferPage from './pages/OfferPage';
import FloorPlanPage from './pages/FloorPlanPage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-stone-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ponuka" element={<OfferPage />} />
          <Route path="/podorys" element={<FloorPlanPage />} />
          <Route path="/o-projekte" element={<AboutPage />} />
          <Route path="/galeria" element={<GalleryPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
