import React, {useState} from 'react';
import {EmptyCart} from "./EmptyCart/EmptyCart";
import {FilledCart} from "./FilledCart/FilledCart";

export const CartPage = () => {
    const [isEmptyCart, setIsEmptyCart] = useState<boolean>(false)

    return (
        <div className="container container--cart">
            {
                isEmptyCart
                    ? <EmptyCart/>
                    : <FilledCart/>
            }
        </div>
    );
};