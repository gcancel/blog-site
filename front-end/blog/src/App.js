import './App.css';

import Header from './components/Header';
import CV from './components/CV';
import Syllabus from './components/Syllabus';
import Bio from './components/Bio';
import Research from './components/Research';

import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={""} />
        <Route exact path="/CV" element={<CV />} />
        <Route exact path="/syllabus" element={<Syllabus />} />
      </Routes>
      <Bio/>
      {/* <Research/> */}
    </Router>

  );
}

export default App;
