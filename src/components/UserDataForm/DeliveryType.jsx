import React from 'react';

function DeliveryType({delivery, setDelivery}) {
    return (
        <div className="form-field--group">
            Способ доставки:
            <div className="form-field form-field--radio">
                <input
                    id="delivery"
                    type="radio"
                    name="delivery-type"
                    value='delivery'
                    checked={delivery === "delivery"}
                    onChange={() => {
                        setDelivery("delivery");
                    }}
                />
                <label className="text-sm font-medium" htmlFor="delivery">
                    Доставка
                </label>
            </div>
            <div className="form-field form-field--radio">
                <input
                    type="radio"
                    onChange={() => {
                        setDelivery("pick-up");
                    }}
                    value='pick-up'
                    id="pick-up"
                    name="delivery-type"
                    checked={delivery === "pick-up"}
                />
                <label className="text-sm font-medium" htmlFor="pick-up">
                    Самовывоз
                </label>
            </div>
        </div>
    );
}

export default DeliveryType;