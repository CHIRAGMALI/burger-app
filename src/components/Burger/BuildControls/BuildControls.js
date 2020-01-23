import React from 'react'
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const buildControls = (props) => {
    const controls = [
        { label: 'Salad', type: 'salad'},
        { label: 'Beacon', type: 'beacon'},
        { label: 'Cheese', type: 'cheese'},
        { label: 'Meat', type: 'meat'},
    ];
    return (
        <div className={classes.BuildConstrols}>
            <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(control => {
                return <BuildControl 
                key={control.label}
                label={control.label} 
                type={control.type}
                addIngredient={props.addIngredient}
                removeIngredient={props.removeIngredient}
                disabled={props.disabledInfo[control.type]} />
            })}
            <button className={classes.OrderButton} onClick={props.ordered} disabled={!props.purchasable}>ORDER NOW</button>
        </div>
    )
}
export default buildControls;