import React from 'react';
import {Categories} from "./Categories/Categories";
import {Sort} from "./Sort/Sort";
import {PizzaItem} from "./PizzaItem/PizzaItem";
import pizzas from '../../../assets/pizzas.json'

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

export const PizzaPage = () => {
    const pizzasList = pizzas.map(p =>
        <PizzaItem
            key={p.id}
            pizza={p}
        />
    )

    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Categories/>
                    <Sort/>
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {pizzasList}
                </div>
            </div>
        </div>
    );
};