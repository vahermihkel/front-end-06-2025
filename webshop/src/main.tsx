import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'leaflet/dist/leaflet.css';
import './index.css'
import App from './App.js'
import {BrowserRouter} from "react-router-dom"
import './i18n.js';
import { CartSumContextProvider } from './context/CartSumContextProvider.js';
import { AuthContextProvider } from './context/AuthContextProvider.js';
import { Provider } from 'react-redux'
import { store } from './redux/store.js';

// { StrictMode } --> võtab tüki sealt moodulist     export const
// App            --> võtab terve selle faili        export default

// "react"        --> võtab node_module-st 
// "./index.css"  --> minu enda fail

// import bla from "bla" --> import kehtib vaid siin failis
// import "bla"          --> globaalne import e kehtib igas failis
// globaalsed:
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'leaflet/dist/leaflet.css';
// import './index.css'
// import './i18n.js';
// ülejäänud on lokaalsed


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <CartSumContextProvider>
        <AuthContextProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </AuthContextProvider>
      </CartSumContextProvider>
    </BrowserRouter>
  </StrictMode>,
)


// 1. E 26.05 --> navigeerimine, routimine, pages, components
// 2. K 28.05 --> useState, useRef
// 3. E 02.06 --> array'd (push/splice), faili tõstmine
// 4. K 04.06 --> objektid, lisamine event abil, tõlge, localStorage, URL parameeter
// 5. E 09.06 --> Firebase + andmebaas
// 6. K 11.06 --> .env fail, Leaflet kaardirakendus, Bootstrap, MUI, e-maili saatmine
// 7. E 23.06 --> API päringute sügavamaks + componentideks tõste (parameetrite saatma)
//                  pakiautomaadid (Omniva lehelt). tagasi kaupmehe juurde makse (EveryPay)
// 8. K 25.06 --> Context, Redux, TypeScript
// 9. N 26.06 --> TypeScript, kogus ostukorvis, CSS moodulid
//10. E 07.07 --> KOJU Proovitööd
//11. K 09.07 --> 
//12. R 11.07 --> DISAINER 9.00
//13. E 14.07 --> DISAINER???   /   back-endi
//14. K 16.07 --> back-endi
//15. E 21.07 --> 
//16. K 23.07 --> 
//17. E 28.07 --> 
//18. K 30.07 --> lõpuprojekti esitlemine


// Hiljem Java + Spring back-end (autentimisel)

// Globaalne muutuja (context)+++
// Redux+++
// TypeScript+++
// Kogus ostukorvis+++
// CSS ostukorvis + avalehel+++
// MUI -> Material UI+++
// Alamkomponendid -> andmete saatmine+++
// AuthForm+++
// ProductForm
// useImperativeRef -> erijuht alamkomponendis, läbi modali
// utils kaust
// custom HOOK
// Back-end Java+Spring
