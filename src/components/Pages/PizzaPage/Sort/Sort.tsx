import React, {useState} from 'react';
import arrowUp from '../../../../assets/img/arrow-top.svg'
import arrowDown from '../../../../assets/img/arrow-down.svg'
import {Selector} from "../PizzaItem/Selector/Selector";

type SortPropsType = {
    selected: number
    setSelected: (selected: number) => void
}

const Sort: React.FC<SortPropsType> = ({
                                                  selected,
                                                  setSelected
                                              }) => {
    const [isShowPopup, setIsShowPopup] = useState<boolean>(false)

    const sortValues = ['популярности', 'цене', 'алфавиту']
    const sortTitle = sortValues[selected]
    const arrow = isShowPopup ? arrowDown : arrowUp

    const showPopupHandler = () => {
        setIsShowPopup(!isShowPopup)
    }
    const changeSelect = (index: number) => {
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
                    <Selector onChange={changeSelect} activeIndex={selected} values={sortValues}/>
                </div>}
        </div>
    );
};

export default Sort