import React from "react";

function UserEmail({
  email,
  emailHandler,
  blurHandler,
  emailDirty,
  emailError,
}) {
    const isError = emailError && emailDirty;
  return (
    <div className="form-field form-field--tel">
      <label>Email для электронного чека:</label>
      <input
        type="text"
        inputMode="email"
        onChange={(e) => emailHandler(e)}
        onBlur={(e) => blurHandler(e)}
        value={email}
        className={isError ? 'error' : 'email'}
        placeholder="Ваша почта"
        name="email"
      />
      {emailDirty && emailError && (
        <div style={{ color: "red" }}>{emailError}</div>
      )}
    </div>
  );
}

export default UserEmail;
