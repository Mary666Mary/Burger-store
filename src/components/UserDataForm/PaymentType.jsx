import React from 'react';
function PaymentType({payment, setPayment}) {
    return (
        <>
            <div className="form-field form-field--radio">
                <input
                    required
                    value="new-card"
                    id="new-card"
                    type="radio"
                    name="payment-type"
                    checked={payment === "new-card"}
                    onChange={() => {
                        setPayment("new-card");
                    }}
                />
                <label className="text-sm font-medium" htmlFor="new-card">
                    Новой картой
                </label>
            </div>
            <div className="form-field form-field--radio">
                <input
                    value="cash"
                    type="radio"
                    id="cash"
                    name="payment-type"
                    checked={payment === "cash"}
                    onChange={() => {
                        setPayment("cash");
                    }}
                />
                <label className="text-sm font-medium" htmlFor="cash">
                    Наличными при получении
                </label>
            </div>
        </>);
}
export default PaymentType;