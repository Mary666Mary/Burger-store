import React from "react";

const UserName = ({ setUsername, userNameError, setUserNameError, setUserNameDirty, userNameDirty, username, blurHandler }) => {
    const isError = userNameError && userNameDirty;

    const userNameHandler = (e) => {
        setUsername(e.target.value);
        if (!e.target.value) {
            setUserNameError("Не может быть пустым");
        } else {
            setUserNameError('');
            setUserNameDirty(false)
        }
    };

    return (
    <div className="form-field form-field--text">
      <label htmlFor="username">Ваше имя и фамилия:</label>
      <input
          required
          onBlur={(e) => blurHandler(e)}
        onChange={userNameHandler}
        value={username}
        className={userNameError ? 'error' : 'text-sm'}
        placeholder="Петя Иванов"
        id="username"
        type="text"
        name="username"
      />
        {isError && (
            <div style={{color: "red"}}>{userNameError}</div>
        )}
    </div>
  );
};

export default UserName;
