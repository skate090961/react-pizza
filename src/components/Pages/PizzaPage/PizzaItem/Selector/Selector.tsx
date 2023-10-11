import React from 'react';

type SelectorPropsType = {
    onChange: (index: number) => void
    activeIndex: number
    values: Array<string>
}

export const Selector: React.FC<SelectorPropsType> = ({
                                                          onChange,
                                                          activeIndex,
                                                          values
                                                      }) => {
    const changeIndexHandler = (index: number) => {
        index !== activeIndex && onChange(index)
    }
    const addClassActive = (index: number) => {
        return index === activeIndex ? 'active' : ''
    }

    const selectorItems = values.map((value, index) => (
        <li
            key={value}
            className={addClassActive(index)}
            onClick={() => changeIndexHandler(index)}
        >
            {value}
        </li>
    ))

    return <ul>{selectorItems}</ul>
};