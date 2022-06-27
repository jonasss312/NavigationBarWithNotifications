import React from 'react';
import './App.css';
import { HomeWindow } from './view/container/home-window/HomeWindow';
import { NavigationBar } from './view/component/navigation-bar/NavigationBar';

function App() {
  return (
    <>
    <NavigationBar />
      <HomeWindow />
    </>
  );
}

export default App;
