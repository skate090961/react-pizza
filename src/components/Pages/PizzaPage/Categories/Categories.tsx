import React, {useState} from 'react';
import {Selector} from "../PizzaItem/Selector/Selector";

export const Categories = () => {
    const [activeCategory, setActiveCategory] = useState<number>(0)
    const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']

    return (
        <div className="categories">
            <Selector onChange={setActiveCategory} activeIndex={activeCategory} values={categories} />
        </div>
    );
};