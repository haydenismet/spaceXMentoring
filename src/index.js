import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Welcome from './App';
import reportWebVitals from './reportWebVitals';
import SpaceX from './spacex-graphql';


ReactDOM.render(
  <React.StrictMode>
    <Welcome title="SpaceX" subtitle="Built with React and GraphQL" />
    <SpaceX name="Graph QL Count"/> 

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
