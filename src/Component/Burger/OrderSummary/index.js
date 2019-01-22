import React from 'react';
import Button from '../../UI/Button';

const OrderSummary = (props) => {
    const items = Object.keys(props.ingredients).map(ingKey => (
        <li key={ingKey}>{ingKey}: {props.ingredients[ingKey]}</li>
    ));

    return(
        <>
            <div>xYou have selected the following items for the burger filling </div>
            <ul>{items}</ul>
            <p><strong>Total Price: {props.totalPrice.toFixed(2)}</strong></p>
            <Button btnType='Success' clicked={props.checkout}>Checkout</Button>
            <Button btnType='Danger' clicked={props.close}>Cancel</Button>
        </>
    )
}

export default OrderSummary;
