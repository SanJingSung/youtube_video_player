import React from 'react';
import { VideoProvider } from './contexts/VideoContext';
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <VideoProvider>
      <AppRouter />
    </VideoProvider>
  );
}

export default App;


