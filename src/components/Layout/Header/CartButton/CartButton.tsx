import React from 'react';
import basketIcon from '../../../../assets/img/cart.svg'
import {Link, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootStoreType} from "../../../../store/store";
import {CartStateType} from "../../../../store/slices/cartSlice";

export const CartButton = () => {
    const location = useLocation()
    const isCartPath = location.pathname === 'cart' ? '' : 'cart'

    const cart = useSelector<RootStoreType, CartStateType>(state => state.cart)

    return (
        <Link to={isCartPath} className="button button--cart">
            {!cart.items.length
                ? <img src={basketIcon} alt="basket-icon"/>
                : <>
                    <span>{cart.totalPrice} ₽</span>
                    <div className="button__delimiter"></div>
                    <img src={basketIcon} alt="basket-icon"/>
                    <span>{cart.countItems}</span>
                </>
            }
        </Link>
    );
};

