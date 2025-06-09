import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n';
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"

// Navigeerimiseks / Route-miseks / URL muutmiseks ja HTML vahetamiseks
// 1. npm i react-router-dom (node.js kaudu paneb navigeerimiseks
//      vajalikud failid node_modules kausta)
// 2. import { BrowserRouter } (võtab sealt node_modules kaustast BrowserRouteri)
// 3. ümbritseme <App /> elemendi BrowserRouteriga (App.jsx saab võimekuse navigeerida)
// 4. App.jsx failis teeme URL ja HTMLi seoseid

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

// 1. E 26.05 --> navigeerimine, routimine, pages, components
// 2. K 28.05 --> useState, useRef
// 3. E 02.06 --> array'd (push/splice), faili tõstmine
// 4. K 04.06 --> objektid, lisamine event abil, tõlge, localStorage, URL parameeter
// 5. E 09.06
// 6. K 11.06 kell 14.00
// 7. E 23.06
// 8. K 25.06
