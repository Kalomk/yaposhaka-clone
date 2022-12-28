import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import HomePage from './pages/HomePage';
import Reustarant from './pages/Reustarant/Reustarant';
import Delivery from './pages/Delivery/Delivery';
import About from './pages/About/About';
import Bonus from './pages/Bonus/Bonus';

function App() {
  return (
    <>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/reustarant" element={<Reustarant />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/about" element={<About />} />
            <Route path="/bonus" element={<Bonus />} />
          </Routes>
        </MainLayout>
      </Router>
    </>
  );
}

export default App;
