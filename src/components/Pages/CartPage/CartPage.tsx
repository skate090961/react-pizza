import React, {useEffect, useState} from 'react';
import {EmptyCart} from "./EmptyCart/EmptyCart";
import {CartItems} from "./CartItems/CartItems";
import {useSelector} from "react-redux";
import {RootStoreType} from "../../../store/store";
import {ItemType} from "../../../store/slices/cartSlice";

export const CartPage = () => {
    const [isEmptyCart, setIsEmptyCart] = useState<boolean>(false)
    const items = useSelector<RootStoreType, ItemType[]>(state => state.cart.items)
    useEffect(() => {
        setIsEmptyCart(!items.length)
    }, [items])

    return (
        <div className="container container--cart">
            {
                isEmptyCart
                    ? <EmptyCart/>
                    : <CartItems/>
            }
        </div>
    );
};