import React, {ReactNode} from 'react';
import {Header} from "./Header/Header";

type LayoutType = {
    children: ReactNode
}

export const Layout: React.FC<LayoutType> = ({
                                                 children
                                             }) => {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                {children}
            </div>
        </div>
    );
};