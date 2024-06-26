import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ParentContext from './assets/Components/useContext/useContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <ParentContext>
      <App />
    </ParentContext>
  // </React.StrictMode>,
)
