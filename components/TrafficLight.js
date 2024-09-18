import React, { useContext, useEffect, useState } from 'react';
import TrafficLightContext from './TrafficLightContext';
import './TrafficLight.css';

const TrafficLight = () => {
  const { state, dispatch } = useContext(TrafficLightContext);
  const [countdown, setCountdown] = useState(0);
  
  useEffect(() => {
    let timer;
    let pedestrianOverride = false;

    if (state.pedestrianRequested) {
      // If pedestrian button is pressed, change the light to red after current light finishes
      if (state.currentLight === 'green' || state.currentLight === 'yellow') {
        pedestrianOverride = true;
        setCountdown(1); // Shorten current light time if pedestrian presses the button
      }
    } else {
      if (state.currentLight === 'green') {
        setCountdown(10);
      } else if (state.currentLight === 'yellow') {
        setCountdown(3);
      } else if (state.currentLight === 'red') {
        setCountdown(7);
      }
    }

    timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          // Handle regular light change or pedestrian override
          if (pedestrianOverride) {
            dispatch({ type: 'CHANGE_LIGHT', payload: 'red' });
            pedestrianOverride = false; // Reset the pedestrian override
            dispatch({ type: 'RESET_PEDESTRIAN_REQUEST' }); // Reset the pedestrian request
          } else {
            if (state.currentLight === 'green') {
              dispatch({ type: 'CHANGE_LIGHT', payload: 'yellow' });
            } else if (state.currentLight === 'yellow') {
              dispatch({ type: 'CHANGE_LIGHT', payload: 'red' });
            } else if (state.currentLight === 'red') {
              dispatch({ type: 'CHANGE_LIGHT', payload: 'green' });
            }
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [state.currentLight, state.pedestrianRequested, dispatch]);

  return (
    <div className="traffic-light-container">
      <div className="traffic-light">
        <div className={`light ${state.currentLight === 'green' ? 'green' : ''}`}></div>
        <div className={`light ${state.currentLight === 'yellow' ? 'yellow' : ''}`}></div>
        <div className={`light ${state.currentLight === 'red' ? 'red' : ''}`}></div>
      </div>
      <div className="countdown-display">{countdown}</div>
    </div>
  );
};

export default TrafficLight;
