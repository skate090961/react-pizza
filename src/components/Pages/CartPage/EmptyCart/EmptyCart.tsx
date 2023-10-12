import React from 'react';
import emptyCart from '../../../../assets/img/empty-cart.png';
import {Link} from "react-router-dom";
import sadSmile from '../../../../assets/img/sad-smile.png'

export const EmptyCart = () => {
    return (
        <div className="cart cart--empty">
            <h2>Корзина пустая<img src={sadSmile} alt="sad-smile"/></h2>
            <p>
                Вероятней всего, вы не заказывали ещё пиццу.<br/>
                Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <img src={emptyCart} alt="Empty cart"/>
            <Link to="/" className="button button--black">
                <span>Вернуться назад</span>
            </Link>
        </div>
    );
};