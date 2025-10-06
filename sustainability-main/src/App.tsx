import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Homepage from './components/Homepage';
import FoodTrack from './components/FoodTrack';
import FoodShare from './components/FoodShare';
import FoodWise from './components/FoodWise';
import FoodCycle from './components/FoodCycle';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/foodtrack" element={<FoodTrack />} />
          <Route path="/foodshare" element={<FoodShare />} />
          <Route path="/foodwise" element={<FoodWise />} />
          <Route path="/foodcycle" element={<FoodCycle />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;