import React from 'react';

const CardContent = (props) => {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    );
} 

export default CardContent;