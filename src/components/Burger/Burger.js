import React from 'react';
import classes from './Burger.module.css';
import Ingredient from './Ingredient/Ingredient';


const Burger = (props) => {
    let transformedIngredient = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, index) => {
                return <Ingredient key={igKey + index} type={igKey}/>
            })
        }).reduce((arr, el) => {
            return arr.concat(el);
        }, []);
    if(transformedIngredient.length === 0) {
        transformedIngredient = <p>Please start adding Ingredients</p>
    }
    return (
        <div className={classes.Burger}>
            <Ingredient type="bread-top"/>
            {transformedIngredient}
            <Ingredient type="bread-bottom"/>

        </div>
    )
}

export default Burger;

