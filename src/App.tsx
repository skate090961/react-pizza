import React, {useState} from 'react';
import './assets/styles/scss/app.scss'
import {Pages} from "./components/Pages/Pages";
import {BrowserRouter} from "react-router-dom";
import {Layout} from "./components/Layout/Layout";
import {ContextProvider} from "./context/ContextProvider";

export const App = () => {
    const [searchValue, setSearchValue] = useState<string>('')

    return (
        <BrowserRouter>
            <ContextProvider value={{searchValue, setSearchValue}}>
                <Layout>
                    <Pages/>
                </Layout>
            </ContextProvider>
        </BrowserRouter>
    )
}