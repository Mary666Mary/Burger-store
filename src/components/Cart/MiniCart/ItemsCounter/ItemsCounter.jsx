import React, {useContext} from 'react';
import { CartContext } from '../../../../App';
import "./ItemsCounter.scss"

function ItemsCounter(props) {
    const {cart} = useContext(CartContext);
    const counter = cart.length > 0 && cart.reduce((prev, item) => prev + item.quantity, 0);

    return (
        counter &&
        <span className="counter absolute flex items-center justify-center rounded-full -top-2 -right-3 bg-rose-700 text-white text-base z-1 text-center">
            {counter}
        </span>
    )
}

export default ItemsCounter;