import React, { createContext, useReducer } from 'react';

// Create the TrafficLightContext
const TrafficLightContext = createContext();

// Initial state of the traffic light
const initialState = {
  currentLight: 'green', // Start with green light
  pedestrianRequested: false, // Initially, no pedestrian request
};

// Reducer function to handle state transitions
const trafficLightReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_LIGHT':
      return { ...state, currentLight: action.payload };
    case 'REQUEST_PEDESTRIAN':
      return { ...state, pedestrianRequested: true };
    case 'RESET_PEDESTRIAN_REQUEST':
      return { ...state, pedestrianRequested: false };
    default:
      return state;
  }
};

// Provider component to wrap the app and provide context
const TrafficLightProvider = ({ children }) => {
  const [state, dispatch] = useReducer(trafficLightReducer, initialState);

  return (
    <TrafficLightContext.Provider value={{ state, dispatch }}>
      {children}
    </TrafficLightContext.Provider>
  );
};

export { TrafficLightProvider };
export default TrafficLightContext;
