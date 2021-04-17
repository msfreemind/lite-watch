import React from 'react';
import ReactDOM from "react-dom";
import Root from '../frontend/components/root.jsx';
import configureStore from "../frontend/store/store";

document.addEventListener("DOMContentLoaded", () => {
  let store;

  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };

    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  window.onorientationchange = function() { 
    const  orientation = window.orientation; 

    switch(orientation) { 
      case 0:
      case 90:
      case -90: 
        window.location.reload(); 
        break; 
    } 
  };

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
});