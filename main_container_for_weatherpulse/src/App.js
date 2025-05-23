import React from 'react';
import './App.css';
import WeatherPulseMainContainer from './components/WeatherPulseMainContainer';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">☁</span> WeatherPulse
            </div>
            <button className="btn">Settings</button>
          </div>
        </div>
      </nav>

      <main>
        <div className="container">
          <div className="hero" style={{ paddingBottom: '2rem' }}>
            <div className="subtitle">Real-time Weather Information</div>
            <h1 className="title">WeatherPulse</h1>
            <div className="description">
              Your comprehensive weather companion with real-time updates, forecasts, and personalized insights.
            </div>
          </div>
          
          {/* WeatherPulse Main Container */}
          <WeatherPulseMainContainer />
        </div>
      </main>
    </div>
  );
}

export default App;