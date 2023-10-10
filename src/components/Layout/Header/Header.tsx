import React from 'react';
import {CartButton} from "./CartButton/CartButton";
import logo from '../../../assets/img/pizza-logo.svg';

export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__logo">
                    <img width="38" src={logo} alt="Pizza logo"/>
                    <div>
                        <h1>React Pizza</h1>
                        <p>самая вкусная пицца во вселенной</p>
                    </div>
                </div>
                <div className="header__cart">
                    <CartButton />
                </div>
            </div>
        </header>
    );
};