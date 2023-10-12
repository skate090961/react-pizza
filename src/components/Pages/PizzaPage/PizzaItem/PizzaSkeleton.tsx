import React from 'react';
import ContentLoader from "react-content-loader";

export const PizzaSkeleton = () => {
    return (
        <ContentLoader
            className={'pizza-block'}
            speed={2}
            width={280}
            height={465}
            viewBox="0 0 280 465"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="137" cy="130" r="128" />
            <rect x="0" y="275" rx="10" ry="10" width="280" height="27" />
            <rect x="0" y="324" rx="10" ry="10" width="280" height="85" />
            <rect x="5" y="424" rx="10" ry="10" width="90" height="27" />
            <rect x="157" y="446" rx="0" ry="0" width="0" height="1" />
            <rect x="129" y="417" rx="27" ry="27" width="150" height="45" />
        </ContentLoader>
    );
};