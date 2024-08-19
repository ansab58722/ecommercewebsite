import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Store } from './app/Store';
import { Provider } from 'react-redux';
import Landingpage from './Screens/Landingpage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shoppingcart from './Components/Shoppingcart';
import Producdetail from './Components/Productdetail'
import Allproducts from './Screens/Allproducts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landingpage/>,
  },
  {
    path: "product",
    element: <Producdetail/>,
  },
  {
    path: "shoppingcart",
    element: <Shoppingcart/>
  }, {
    path: "allproducts",
    element: <Allproducts/>
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      
    <Provider store={Store}>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
    </Provider>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
