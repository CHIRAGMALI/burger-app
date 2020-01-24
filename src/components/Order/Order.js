import React from 'react'
import './Order.css'


export const Order = (props) => {
    const transformedIngredient = [];
    for(let igName in props.ingredients) {
        transformedIngredient.push({
            name: igName,
            amount: props.ingredients[igName]
        });
    }

    const igOutput = transformedIngredient.map(ig => {
        return (
            <span key={ig.name} 
            style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #ccc',
                padding: '5px'
            }}>{ig.name} ({ig.amount})</span>
        )
    })

    return (
        <div className='Order'>
            <div>{igOutput}</div>
            <p>Price: <strong>USD {props.price}</strong></p>
        </div>
    )
}
