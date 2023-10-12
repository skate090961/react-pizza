import React from 'react';
import s from './NotFoundPage.module.scss'
import sadSmile from '../../../assets/img/sad-smile.png'
import {Link} from "react-router-dom";

export const NotFoundPage = () => {
    console.log(s)
    return (
        <div className={s.notFound}>
            <img src={sadSmile} alt="sad-smile"/>
            <h1>Страница не найдена</h1>
            <p>
                К сожалению, данная страница отсутствует в нашем интернет-магазине.
            </p>
            <Link to="/">Вернуться на главную</Link>
        </div>
    );
};