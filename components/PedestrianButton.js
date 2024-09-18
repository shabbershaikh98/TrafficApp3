import React, { useContext } from 'react';
import TrafficLightContext from './TrafficLightContext';
import './PedestrianButton.css';

const PedestrianButton = () => {
  const { dispatch } = useContext(TrafficLightContext);

  const handlePedestrianRequest = () => {
    dispatch({ type: 'CHANGE_LIGHT', payload: 'red' });
  };

  return (
    <button className="pedestrian-button" onClick={handlePedestrianRequest}>
      Pedestrian Crossing
    </button>
  );
};

export default PedestrianButton;
