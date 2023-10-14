import React from 'react';
import {Route, Routes} from "react-router-dom";
import {PizzaPage} from "./PizzaPage/PizzaPage";
import {CartPage} from "./CartPage/CartPage";
import {NotFoundPage} from "./NotFoundPage/NotFoundPage";

export type PizzaType = {
    id: number
    imageUrl: string
    title: string
    types: Array<number>
    sizes: Array<number>
    price: number
    category: number
    rating: number
}

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