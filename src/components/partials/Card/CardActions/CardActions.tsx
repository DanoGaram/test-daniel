import React from 'react';
import './CardActions.scss';

const CardActions = (props) => {
    return (
        <div className={`card-actions-container ${props.className}`}>
            {props.children}
        </div>
    );
}

export default CardActions;