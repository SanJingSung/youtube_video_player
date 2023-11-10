import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import MainScreen from '../components/MainScreen/MainScreen';
import DetailScreen from '../components/DetailScreen/DetailScreen';
import { VIDEO_DETAIL_PATH, DEFAULT_PATH } from '../constants/Strings';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path={DEFAULT_PATH} element={<MainScreen />} />
        <Route path={VIDEO_DETAIL_PATH} element={<DetailScreen />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
