import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const Burger = (props) => {


    let transformedIngredient;

    if (props.ingredients) {

        transformedIngredient = Object.keys(props.ingredients).map(igKeys => {
            return [...Array(props.ingredients[igKeys])].map((_, index) => {

                return <BurgerIngredient key={igKeys + index} type={igKeys} />
            });
        }).reduce((fv, lv) => { return fv.concat(lv); }, []);
        if (transformedIngredient.length === 0) {
            transformedIngredient = <p>Please Add ingredients !</p>;
        }
    }


    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top" />
            {transformedIngredient}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default Burger;