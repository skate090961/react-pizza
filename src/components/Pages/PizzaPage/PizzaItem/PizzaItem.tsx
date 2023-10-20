import React, {useState} from 'react';
import {AddButton} from "./AddButton/AddButton";
import {Selector} from "./Selector/Selector";
import {PizzasStateType} from "../../../../store/slices/pizzasSlice";
import {useDispatch} from "react-redux";
import {addItem} from "../../../../store/slices/cartSlice";

type PizzaItemPropsType = {
    pizza: PizzasStateType
}

export const PizzaItem: React.FC<PizzaItemPropsType> = ({pizza}) => {
    const dispatch = useDispatch()

    const [sizeId, setSizeId] = useState(0)
    const [typeId, setTypeId] = useState(0)

    const {id, price, sizes, title, types, imageUrl} = pizza

    const pizzaAllTypes = ['тонкое', 'традиционное']
    const pizzaTypes = types.map(t => pizzaAllTypes[t])
    const pizzaSizes = sizes.map(s => `${s} см.`)

    const onClickAddItem = () => {
        const item = {
            id,
            title,
            price,
            imageUrl,
            type: pizzaAllTypes[typeId],
            size: sizes[sizeId],
            count: 1,
            totalPriceItem: price
        }
        dispatch(addItem({item, id, size: sizes[sizeId], type: pizzaAllTypes[typeId]}))
    }

    const setTypeActive = (id: number) => {
        setTypeId(id)
    }
    const setSizeActive = (id: number) => {
        setSizeId(id)
    }
    return (
        <div className={"pizza-block-wrapper"}>
            <div className="pizza-block">
                <img
                    className="pizza-block__image"
                    src={imageUrl}
                    alt={title}
                />
                <h4 className="pizza-block__title">{title}</h4>
                <div className="pizza-block__selector">
                    <Selector onChange={setTypeActive} activeIndex={typeId} values={pizzaTypes}/>
                    <Selector onChange={setSizeActive} activeIndex={sizeId} values={pizzaSizes}/>
                </div>
                <div className="pizza-block__bottom">
                    <div className="pizza-block__price">{`от ${price} ₽`}</div>
                    <AddButton addItem={onClickAddItem}/>
                </div>
            </div>
        </div>
    );
};