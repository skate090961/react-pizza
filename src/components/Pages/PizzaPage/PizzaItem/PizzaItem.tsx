import React, {useState} from 'react';
import {AddButton} from "./AddButton/AddButton";
import {Selector} from "./Selector/Selector";
import {PizzaType} from "../../Pages";

type PizzaItemPropsType = {
    pizza: PizzaType
}

export const PizzaItem: React.FC<PizzaItemPropsType> = ({pizza}) => {
    const [typeActive, setTypeActive] = useState<number>(0)
    const [sizeActive, setSizeActive] = useState<number>(0)

    const {id, price, rating, sizes, title, types, imageUrl, category} = pizza

    const pizzaAllTypes = ['тонкое', 'традиционное']
    const pizzaTypes = types.map(t => pizzaAllTypes[t])
    const pizzaSizes = sizes.map(s => `${s} см.`)

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
                    <Selector onChange={setTypeActive} activeIndex={typeActive} values={pizzaTypes}/>
                    <Selector onChange={setSizeActive} activeIndex={sizeActive} values={pizzaSizes}/>
                </div>
                <div className="pizza-block__bottom">
                    <div className="pizza-block__price">{`от ${price} ₽`}</div>
                    <AddButton/>
                </div>
            </div>
        </div>
    );
};