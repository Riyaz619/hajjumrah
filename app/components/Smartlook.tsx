'use client'; // This line makes this component a Client Component

import { useEffect } from 'react';

declare global {
  interface Window {
    smartlook: any; // Extend the Window interface
  }
}

const Smartlook = () => {
  useEffect(() => {
    window.smartlook = window.smartlook || function () {
      (window.smartlook.api = window.smartlook.api || []).push(arguments);
    };
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://rec.smartlook.com/recorder.js';
    document.head.appendChild(script);

    // Initialize Smartlook with your project key
    script.onload = () => {
      window.smartlook('init', 'ac58392681ba775aad98d6021bff7762701e6819f4704c66b8e17c80f9807f7e');
    };
  }, []);

  return null; // This component does not render anything
};

export default Smartlook; 