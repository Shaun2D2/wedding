import React from 'react';

import './Card.scss';

const Monogram = () => (
    <div className="app-monogram">
        <div className="app-monogram__content">
            L&S
        </div>
    </div>
)

const Card = ({ children }) => {
    return (
        <div className="app-card">
            <div className="app-card__content">
                <Monogram />
                {children}
            </div>        
        </div>
    )
};

export default Card;