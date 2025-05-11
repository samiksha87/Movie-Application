import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Assuming your main component is in App.js

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<App />);