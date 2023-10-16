import React from 'react';
import {Route, Routes} from "react-router-dom";
import {PizzaPage} from "./PizzaPage/PizzaPage";
import {CartPage} from "./CartPage/CartPage";
import {NotFoundPage} from "./NotFoundPage/NotFoundPage";

export const Pages = () => {
    return (
        <Routes>
            <Route path={'/'}
                   element={<PizzaPage/>}/>
            <Route path={'pizzas'}
                   element={<PizzaPage/>}/>
            <Route path={'cart'} element={<CartPage/>}/>
            <Route path={'*'} element={<NotFoundPage/>}/>
        </Routes>
    )
};