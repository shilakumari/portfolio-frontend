import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'

import './styles/global.css'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)

