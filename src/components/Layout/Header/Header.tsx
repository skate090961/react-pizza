import React from 'react';
import {CartButton} from "./CartButton/CartButton";
import logo from '../../../assets/img/pizza-logo.svg';
import {Link} from "react-router-dom";
import {Search} from "./Search/Search";

export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                    <Link to={'/'} className="header__logo">
                        <img width="38" src={logo} alt="Pizza logo"/>
                        <div>
                            <h1>React Pizza</h1>
                            <p>Самая вкусная пицца во вселенной</p>
                        </div>
                    </Link>
                    <Search/>
                <div className="header__cart">
                    <CartButton/>
                </div>
            </div>
        </header>
    );
};