import React from 'react';
import plus from '../../../../../assets/img/plus.svg'

type AddButtonPropsType = {
    addItem: () => void
}

export const AddButton: React.FC<AddButtonPropsType> = ({addItem}) => {
    const addItemHandler = () => {
        addItem()
    }

    return (
        <div className="button button--outline button--add" onClick={addItemHandler}>
            <img src={plus} alt="plus"/>
            <span>Добавить</span>
        </div>
    );
};