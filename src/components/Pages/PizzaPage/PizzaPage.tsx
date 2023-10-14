import React, {useContext, useEffect, useState} from 'react';
import {Categories} from "./Categories/Categories";
import {Sort} from "./Sort/Sort";
import {PizzaItem} from "./PizzaItem/PizzaItem";
import {PizzaSkeleton} from "./PizzaItem/PizzaSkeleton";
import {PizzaType} from "../Pages";
import sortDesc from "../../../utils/sort/sortDesc";
import sortAsc from "../../../utils/sort/sortAsc";
import {Context} from "../../../context/ContextProvider";
import {IsIncludesValue} from "../../../utils/includes/IsIncludesValue";

export const PizzaPage = ({}) => {
    //context
    const {searchValue} = useContext(Context)

    //state
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [items, setItems] = useState<PizzaType[]>([])
    const [activeCategory, setActiveCategory] = useState<number>(0)
    const [selected, setSelected] = useState<number>(0)

    useEffect(() => {
        fetch('https://65268109917d673fd76c6aa4.mockapi.io/items')
            .then(res => {
                return res.json()
            })
            .then(arr => {
                setItems(arr)
                setIsLoading(false)
            })
        window.scrollTo(0, 0)
    }, [])

    //categories
    const filterCategory = (value: number): PizzaType[] => {
        return value ? items.filter(item => item.category === value) : items
    }
    const changedCategoryItems = filterCategory(activeCategory)
    const changeCategory = (value: number) => {
        filterCategory(activeCategory)
        setActiveCategory(value)
    }

    //sort
    const changeSort = (value: number): PizzaType[] => {
        switch (value) {
            case 0:
                return sortDesc(changedCategoryItems, 'rating')
            case 1:
                return sortDesc(changedCategoryItems, 'price')
            case 2:
                return sortAsc(changedCategoryItems, 'title')
            default:
                return changedCategoryItems
        }
    }
    const changedSort = changeSort(selected)

    //search
    const filterSearchPizzas = (items: PizzaType[], value: string) => {
        return items.filter(i => IsIncludesValue(i.title, value))
    }
    const pizzas = filterSearchPizzas(changedSort, searchValue)

    //render
    const pizzaItems = pizzas.map(i => <PizzaItem key={i.id} pizza={i}/>)
    const skeletonItemsList = [...new Array(6)].map((_, index) => <PizzaSkeleton key={index}/>)
    const itemsList = isLoading ? skeletonItemsList : pizzaItems

    return (
        <div className="container">
            <div className="content__top">
                <Categories changeCategory={changeCategory} activeCategory={activeCategory}/>
                <Sort selected={selected} setSelected={setSelected}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {itemsList}
            </div>
        </div>
    );
};