import React from 'react';

type SelectorPropsType = {
    values: Array<string>
    activeIndex: number
    onChange: (activeIndex: number) => void
}

export const Selector: React.FC<SelectorPropsType> = ({
                                                          values,
                                                          activeIndex,
                                                          onChange
                                                      }) => {

    const changeSelectHandler = (index: number) => {
        activeIndex !== index && onChange(index)
    }

    const addActiveClass = (index: number) => {
        return activeIndex === index ? 'active' : ''
    }

    const selectorList = values.map((value, index) =>
        <li
            key={value}
            onClick={() => changeSelectHandler(index)}
            className={addActiveClass(index)}
        >{value}</li>
    )

    return (
        <ul>
            {selectorList}
        </ul>
    )
}