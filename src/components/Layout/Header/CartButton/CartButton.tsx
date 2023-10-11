import React from 'react';
import basketIcon from '../../../../assets/img/cart.svg'

export const CartButton = () => {
    return (
        <a href="/cart.html" className="button button--cart">
            <span>520 ₽</span>
            <div className="button__delimiter"></div>
            <img src={basketIcon} alt="basket-icon"/>
            <span>3</span>
        </a>
    );
};

