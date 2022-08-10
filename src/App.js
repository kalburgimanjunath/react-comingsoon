import React from 'react';
import './style.css';
import Video from './Video';
import About from './About';
export default function App() {
  return (
    <div className="app" style={{ display: 'flex' }}>
      <Video />
      <div className="rightpart">
        <About />
      </div>
    </div>
  );
}
