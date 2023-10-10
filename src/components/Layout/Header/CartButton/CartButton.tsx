import React from 'react';
import {BasketIcon} from "./BasketIcon/BasketIcon";

export const CartButton = () => {
    return (
        <a href="/cart.html" className="button button--cart">
            <span>520 ₽</span>
            <div className="button__delimiter"></div>
            <BasketIcon/>
            <span>3</span>
        </a>
    );
};

