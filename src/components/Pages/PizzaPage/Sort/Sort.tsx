import React, {useState} from 'react';
import arrowUp from '../../../../assets/img/arrow-top.svg'
import arrowDown from '../../../../assets/img/arrow-down.svg'
import {Selector} from "../PizzaItem/Selector/Selector";
import {setSort} from "../../../../store/slices/filterSlice";
import {useDispatch} from "react-redux";

type SortPropsType = {
    sortId: number
}

const Sort: React.FC<SortPropsType> = ({
                                           sortId,
                                              }) => {
    const [isShowPopup, setIsShowPopup] = useState<boolean>(false)

    const dispatch = useDispatch()
    const changeSortId = (id: number) => {
        dispatch(setSort({id}))
    }


    const sortValues = ['популярности', 'цене', 'алфавиту']
    const sortTitle = sortValues[sortId]

    const arrow = isShowPopup ? arrowDown : arrowUp

    const showPopupHandler = () => {
        setIsShowPopup(!isShowPopup)
    }
    const changeSelect = (index: number) => {
        changeSortId(index)
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
                    <Selector onChange={changeSelect} activeIndex={sortId} values={sortValues}/>
                </div>}
        </div>
    );
};

export default Sort