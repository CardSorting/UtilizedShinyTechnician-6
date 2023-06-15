// index.tsx or index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import './index.css';
import 'tailwindcss/tailwind.css'; // Import the generated Tailwind CSS file

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootElement
  );
}