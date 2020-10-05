import React from 'react'
import './Order.css'

const Order = (props) => {

    let IngredientsArr = [];
    for (let key in props.ingredients) {
        IngredientsArr.push({
            name: key,
            value: props.ingredients[key]
        })
    }

    let ingredients = [];
    IngredientsArr.map((ingredient) => {
        return ingredients.push(
            <span key={ingredient.name}
                style={{
                    display: 'inline-block',
                    backgroundColor: '#703B09',
                    fontWeight: 'bold',
                    color: 'white',
                    padding: '5px 10px 10px',
                    marginRight: '5px',
                    borderRadius: '5px',
                    textAlign: "center"
                }}>
                {ingredient.name} ({ingredient.value})
            </span>
        )
    })

    return (
        <div className="Order">
            <p>Ingredients : {ingredients} </p>
            <p>Price <strong>USD {props.price.toFixed(2)}</strong></p>
        </div>
    )
}

export default Order
