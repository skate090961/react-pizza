import React from 'react';
import plus from '../../../../../assets/img/plus.svg'

export const AddButton = () => {
    return (
        <div className="button button--outline button--add">
            <img src={plus} alt="plus"/>
            <span>Добавить</span>
            <i>2</i>
        </div>
    );
};