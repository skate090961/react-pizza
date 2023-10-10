import React from 'react';
import './assets/styles/scss/app.scss'
import {Layout} from "./components/Layout/Layout";
import {Pages} from "./components/Pages/Pages";

export const App = () => {
    return (
        <Layout>
            <Pages />
        </Layout>
    )
}