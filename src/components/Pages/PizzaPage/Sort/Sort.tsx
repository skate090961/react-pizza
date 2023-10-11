import React, {useState} from 'react';
import arrowUp from '../../../../assets/img/arrow-top.svg'
import arrowDown from '../../../../assets/img/arrow-down.svg'
import {Selector} from "../PizzaItem/Selector/Selector";

export const Sort = () => {
    const [isShowPopup, setIsShowPopup] = useState<boolean>(false)
    const [selected, setSelected] = useState<number>(0)

    const sortValues = ['популярности', 'цене', 'алфавиту']
    const sortTitle = sortValues[selected]
    const arrow = isShowPopup ? arrowDown : arrowUp

    const showPopupHandler = () => {
        setIsShowPopup(!isShowPopup)
    }
    const changeSelectHandler = (index: number) => {
        setSelected(index)
        setIsShowPopup(false)
    }

    return (
        <div className="sort">
            <div className="sort__label">
                <img src={arrow} alt="arrow"/>
                <b>Сортировка по:</b>
                <span onClick={showPopupHandler}>{sortTitle}</span>
            </div>
            {isShowPopup &&
                <div className="sort__popup">
                    <Selector onChange={changeSelectHandler} activeIndex={selected} values={sortValues}/>
                </div>}
        </div>
    );
};