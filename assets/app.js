import React from 'react';
import ReactDOM from 'react-dom/client';  // Correct import for React 18

function App() {
    return <h1>Hello, Symfony with React!</h1>;
}

// Get the root element
const rootElement = document.getElementById('root');

// Ensure it exists before rendering
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<App />);
} else {
    console.error("Root element not found");
}
