import React from 'react';
import ReactDOM from 'react-dom/client';
import {ErrorBoundary} from "react-error-boundary";
import App from "./App";
import ErrorPage from "./pages/error";
import {BrowserRouter, BrowserRouter as Router, Routes} from "react-router-dom";
import {RecoilRoot} from "recoil";


const $root = document.getElementById('root')
const root = ReactDOM.createRoot($root);


const Main = () => {

    return (
        <RecoilRoot>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </RecoilRoot>
    )
}

root.render(
  <ErrorBoundary fallback={<ErrorPage />}>
    <Main />
  </ErrorBoundary>
);

