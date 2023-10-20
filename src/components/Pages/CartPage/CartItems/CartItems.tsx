import React from 'react';
import cart from '../../../../assets/img/cart-page.svg'
import trash from '../../../../assets/img/trash.svg'
import leftArrow from '../../../../assets/img/grey-arrow-left.svg'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootStoreType} from "../../../../store/store";
import {ItemType, removeCart} from "../../../../store/slices/cartSlice";
import {CartItem} from "./CartItem/CartItem";
import {v1} from "uuid";

export const CartItems = () => {
    const items = useSelector<RootStoreType, ItemType[]>(state => state.cart.items)
    const countItems = useSelector<RootStoreType, number>(state => state.cart.countItems)
    const totalPrice = useSelector<RootStoreType, number>(state => state.cart.totalPrice)
    const dispatch = useDispatch()

    const onClickRemoveCart = () => {
        dispatch(removeCart())
    }
    const itemsList = items.map(i => <CartItem key={v1()} item={i}/> )

    return (
        <div className="cart">
        <div className="cart__top">
            <h2 className="content__title">
                <img src={cart} alt="cart"/>
                Корзина
            </h2>
            <div className="cart__clear" onClick={onClickRemoveCart}>
                <img src={trash} alt="trash"/>
                <span>Очистить корзину</span>
            </div>
        </div>
    <div className="content__cart_items">
        {itemsList}
    </div>
    <div className="cart__bottom">
        <div className="cart__bottom-details">
            <span> Всего пицц: <b>{countItems} шт.</b> </span>
            <span> Сумма заказа: <b>{totalPrice} ₽</b> </span>
        </div>
        <div className="cart__bottom-buttons">
            <NavLink to="/" className="button button--outline button--add go-back-btn">
                <img src={leftArrow} alt="left-arrow"/>
                <span>Вернуться назад</span>
            </NavLink>
            <div className="button pay-btn">
                <span>Оплатить сейчас</span>
            </div>
        </div>
    </div>
    </div>
)
    ;
};