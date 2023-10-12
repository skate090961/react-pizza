import React, {useEffect, useState} from 'react';
import {Categories} from "./Categories/Categories";
import {Sort} from "./Sort/Sort";
import {PizzaItem} from "./PizzaItem/PizzaItem";
import {PizzaSkeleton} from "./PizzaItem/PizzaSkeleton";

export type PizzaType = {
    id: number
    imageUrl: string
    title: string
    types: Array<number>
    sizes: Array<number>
    price: number
    category: number
    rating: number
}

export const PizzaPage = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)

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

    const [items, setItems] = useState<PizzaType[]>([])
    const itemsList = items.map(i => <PizzaItem key={i.id} pizza={i}/>)
    const skeletonItemsList = [...new Array(6)].map((_, index) => <PizzaSkeleton key={index}/>)
    const loadedList = isLoading ? skeletonItemsList : itemsList

    return (
        <div className="container">
            <div className="content__top">
                <Categories/>
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {loadedList}
            </div>
        </div>
    );
};