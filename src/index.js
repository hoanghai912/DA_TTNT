import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ControlModeProvider} from './components/Context/ControlMode'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ControlModeProvider>
      <App />
    </ControlModeProvider>
  </React.StrictMode>
);

