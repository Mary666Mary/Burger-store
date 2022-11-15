import React from "react";
import "./userDataForm.scss";



const UserAddress = ({blurHandler, address, setAddress, setAddressError, addressError, setAddressDirty, addressDirty,}) => {
    const isError = addressError && addressDirty;

    const addressHandler = (e) => {
        setAddress(e.target.value);
        if (!e.target.value) {
            setAddressError("Поле не может быть пустым");
        } else {
            setAddressError('');
            setAddressDirty(false)
        }
    };

    return (
        <div className="form-field form-field--text">
            <label htmlFor="address">Адрес доставки:</label>
            <input
                required
                onBlur={(e) => blurHandler(e)}
                onChange={addressHandler}
                value={address}
                className={isError ? 'error' : 'text-sm'}
                placeholder="Улица, дом, корпус, парадная, этаж, квартира..."
                id="address"
                type="text"
                name="address"
            />
            {isError && (
                <div style={{color: "red"}}>{addressError}</div>
            )}
        </div>
    );
};

export default UserAddress;
