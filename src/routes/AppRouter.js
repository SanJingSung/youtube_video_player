import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainScreen from '../components/MainScreen/MainScreen';
import DetailScreen from '../components/DetailScreen/DetailScreen';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainScreen />} />
      <Route path="/video" element={<DetailScreen />} />
    </Routes>
  );
};

export default AppRouter;
