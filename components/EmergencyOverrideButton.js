import React, { useContext } from 'react';
import TrafficLightContext from './TrafficLightContext';  // Default import
import './EmergencyOverrideButton.css';

const EmergencyOverrideButton = () => {
  const { dispatch } = useContext(TrafficLightContext);

  const handleOverrideClick = () => {
    dispatch({ type: 'CHANGE_LIGHT', payload: 'red' });
  };

  return (
    <button className="emergency-override-button" onClick={handleOverrideClick}>
      Emergency Override
    </button>
  );
};

export default EmergencyOverrideButton;

