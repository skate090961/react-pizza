import React from 'react';
import {Categories} from "./Categories/Categories";
import {Sort} from "./Sort/Sort";
import {PizzaItem} from "./PizzaItem/PizzaItem";

export const PizzaPage = () => {
    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Categories/>
                    <Sort/>
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                <PizzaItem/>
                </div>
            </div>
        </div>
    );
};