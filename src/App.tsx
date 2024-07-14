// App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './components/Hompage';
import Summary from './components/Summary';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './styles/styles.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/summary" element={<Summary/>} />
          <Route path="/education" element={<Education/>} />
          <Route path="/experience" element={<Experience/>} />
          <Route path="/projects" element={<Projects/>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
