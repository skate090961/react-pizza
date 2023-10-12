import React from 'react';
import './assets/styles/scss/app.scss'
import {Pages} from "./components/Pages/Pages";
import {BrowserRouter} from "react-router-dom";
import {Layout} from "./components/Layout/Layout";

export const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Pages/>
            </Layout>
        </BrowserRouter>
    )
}