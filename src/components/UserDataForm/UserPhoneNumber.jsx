import React from "react";

function UserPhoneNumber({
  blurHandler,
  phoneHandler,
  phoneDirty,
  phoneError,
  phone,
}) {
    const isError = phoneError && phoneDirty;
  return (
    <div className="form-field form-field--tel">
      <label>Номер телефона:</label>
      <input required
        onBlur={(e) => blurHandler(e)}
        onChange={(e) => phoneHandler(e)}
        value={phone}
        className={isError ? 'error' : 'text-sm'}
        placeholder="Пришлём смс с подтверждением заказа"
        type="tel"
        name="phone"
      />
      {phoneDirty && phoneError && (
        <div style={{ color: "red" }}>{phoneError}</div>
      )}
    </div>
  );
}

export default UserPhoneNumber;
