import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Button from './components/Button';
import SignContent from './components/SignContent';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mascotas from './components/Mascotas';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <App></App>
    /*<>
    <Button className="blacktext" title="Explora"></Button>
    <Button className="bluetext" title="Iniciar sesión"></Button>
    <Button className="bluebg" title="Únete"></Button>
    <Button className="blueblue" title="DiseñoWeb"></Button>
    <SignContent></SignContent>
    </>*/
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
