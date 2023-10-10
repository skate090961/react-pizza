import React from 'react';
import {PlusIcon} from "./PlusIcon/PlusIcon";

export const AddButton = () => {
    return (
        <div className="button button--outline button--add">
            <PlusIcon />
            <span>Добавить</span>
            <i>2</i>
        </div>
    );
};