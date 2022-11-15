import React, { useState } from 'react';
import { HiOutlineMinus, HiOutlinePlus } from 'react-icons/hi';

function Quantity({quantity, setQuantity, inputClasses = '', isZeroValue = false, isMiniCart = false}) {

const miniCartClasses = 'flex mt-2';
const defaultClasses = 'flex items-center mr-4 rounded border-solid border-2 px-4 py-2';
const defaultInputClasses = 'w-5 text-center ' + inputClasses;



const increaseQuantity = () =>{
    setQuantity(prev => prev + 1)
}

const decreaseQuantity = () =>{
    setQuantity ((prev) => {

        if (!isZeroValue) {
            if (prev === 1) {
                return 1;
            }
        }
     

        return prev - 1
    })
}

    return (
        <div className={isMiniCart ? miniCartClasses : defaultClasses}>
            <button onClick={decreaseQuantity}>
                <HiOutlineMinus/>
            </button>
            <input className={defaultInputClasses} value={quantity} readOnly={true}/>
            <button onClick={increaseQuantity}>
                <HiOutlinePlus/>
            </button>
        </div>
    );
}

export default Quantity;