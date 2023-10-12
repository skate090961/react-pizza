import React from 'react';
import basketIcon from '../../../../assets/img/cart.svg'
import {Link, useLocation} from "react-router-dom";

export const CartButton = () => {
    const location = useLocation()
    const isCartPath = location.pathname === '/cart' ? '' : '/cart'

    return (
        <Link to={isCartPath} className="button button--cart">
            <span>520 ₽</span>
            <div className="button__delimiter"></div>
            <img src={basketIcon} alt="basket-icon"/>
            <span>3</span>
        </Link>
    );
};

