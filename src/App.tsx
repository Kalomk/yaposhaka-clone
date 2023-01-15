import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import HomePage from './pages/HomePage';
import Reustarant from './pages/Reustarant/Reustarant';
import Delivery from './pages/Delivery/Delivery';
import About from './pages/About/About';
import Bonus from './pages/Bonus/Bonus';
import Gallery from './pages/Gallery/Gallery';
import data from './data/gallery/sushi';
import ScrollToTop from './components/ScrollToTop/SccrollToTop';
function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/reustarant" element={<Reustarant />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/about" element={<About />} />
            <Route path="/bonus" element={<Bonus />} />
            <Route path="/gallery" element={<Gallery {...data.sushi} />} />
            <Route path="/gallery/editSushi" element={<Gallery {...data.editSushi} />} />
          </Routes>
        </MainLayout>
      </Router>
    </>
  );
}

export default App;
