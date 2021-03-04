import React from 'react';
import classes from './styles.module.css';

const PizzaCard = (props) => {
    return (
        <div className={classes.Card}>
            <img src={props.pizza.image} alt={props.pizza.name} />
            <div>
                <h2>{props.pizza.name}</h2>
                <p><label>Tipo:</label> {props.pizza.type}</p>
                <p><label>Ingredientes:</label> {props.pizza.description}</p>
            </div>
        </div>
    );
}

export default PizzaCard;
