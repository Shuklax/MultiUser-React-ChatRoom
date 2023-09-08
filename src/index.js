import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDLtYD8kE_P9RSZ27kyCaAySINSGU0woz0",
  authDomain: "react-live-chat-28f0e.firebaseapp.com",
  databaseURL: "https://react-live-chat-28f0e-default-rtdb.firebaseio.com",
  projectId: "react-live-chat-28f0e",
  storageBucket: "react-live-chat-28f0e.appspot.com",
  messagingSenderId: "2289624674",
  appId: "1:2289624674:web:f1171aec7b54dc57e5933b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <div>
      <h1>This is </h1>
    </div> */}
  </React.StrictMode>
);
