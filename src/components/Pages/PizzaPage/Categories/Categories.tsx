import React from 'react';
import {Selector} from "../PizzaItem/Selector/Selector";
import {setCategory} from "../../../../store/slices/filterSlice";
import {useDispatch} from "react-redux";

type CategoriesPropsType = {
    categoryId: number
}

const Categories: React.FC<CategoriesPropsType> = ({
                                                       categoryId,
                                                   }) => {


    const categoryValues = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']

    const dispatch = useDispatch()
    const changeCategoryId = (id: number) => {
        dispatch(setCategory({id}))
    }

    return (
        <div className="categories">
            <Selector onChange={changeCategoryId} activeIndex={categoryId} values={categoryValues}/>
        </div>
    );
};

export default Categories