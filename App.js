import React from 'react';
import TrafficLight from './components/TrafficLight';
import PedestrianButton from './components/PedestrianButton';
import EmergencyOverrideButton from './components/EmergencyOverrideButton';
import { TrafficLightProvider } from './components/TrafficLightContext';
import './App.css';

function App() {
  return (
    <TrafficLightProvider>
      <div className="App">
        <h1>Traffic Light System</h1>
        <TrafficLight />
        <PedestrianButton />
        <EmergencyOverrideButton />
      </div>
    </TrafficLightProvider>
  );
}

export default App;

