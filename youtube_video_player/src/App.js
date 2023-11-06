import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { VideoProvider } from './contexts/VideoContext'; 
import MainScreen from './components/MainScreen/MainScreen';
import DetailScreen from './components/DetailScreen/DetailScreen';

function App() {
  return (
    <Router>
      <VideoProvider>
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/video" element={<DetailScreen />} />
        </Routes>
      </VideoProvider>
    </Router>
  );
}

export default App;

