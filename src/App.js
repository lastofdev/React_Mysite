import React from 'react';
import './App.css';
import {Header} from './blocks/Header.js';
import { MainInfo } from './blocks/Main';
import { Skills } from './blocks/Skills';



function App() {
  return (
    <div >
      <div className="BackgroundImage">
        <div сlassName="MainFlex">
        <Header />
        <MainInfo />
        <Skills />
        </div>
      </div>
    </div>
  );
}

export default App;
