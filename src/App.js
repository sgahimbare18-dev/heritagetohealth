import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Impact from './pages/Impact';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import Partnerships from './pages/Partnerships';
import HealthServices from './pages/HealthServices';
import Updates from './pages/Updates';
import Login from './components/Login';
import AdminProjectsPage from './pages/AdminProjectsPage';
import AdminProgramsPage from './pages/AdminProgramsPage';
import AdminUpdatesPage from './pages/AdminUpdatesPage';
import AdminImpactsPage from './pages/AdminImpactsPage';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/partnerships" element={<Partnerships />} />
            <Route path="/health-services" element={<HealthServices />} />
            <Route path="/updates" element={<Updates />} />
            <Route path="/admin" element={<Login />} />
            <Route path="/admin/updates" element={<AdminUpdatesPage />} />
            <Route path="/admin/projects" element={<AdminProjectsPage />} />
            <Route path="/admin/programs" element={<AdminProgramsPage />} />
            <Route path="/admin/impacts" element={<AdminImpactsPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
