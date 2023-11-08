import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { VideoProvider } from './contexts/VideoContext';
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <Router>
      <VideoProvider>
        <AppRouter />
      </VideoProvider>
    </Router>
  );
}

export default App;


