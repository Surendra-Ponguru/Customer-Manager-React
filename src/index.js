import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './Component/Login';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import AboutPage from './Component/About';
import Body from './Component/body';
import Orders from './Component/Orders';
import CustomerDetail from './Component/CustomerDetail';
import 'bootstrap/dist/css/bootstrap.css';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
             {/* <Route index element={<App />}/> */}
             <Route path="/" element={<Login/>}/>
             <Route path="/App" element={<App/>}/>
             <Route path="/About" element={<AboutPage/>}/>
             <Route path="/body" element={<Body/>}/>
             <Route path="/Orders" element={<Orders/>}/>
             <Route path="/CustomerDetail" element={<CustomerDetail/>}/>
             <Route path="/EditCustomer" element={<CustomerDetail/>}/>
             {/* <Route path="/AddCustomer" element={<AddCustomer/>}/>
             <Route path="/EditCustomer" element={<EditCustomer/>}/> */}
             {/* <Route path="/" element={<App/>}/> */}
 </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
