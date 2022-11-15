import React, { useContext, useState, useEffect, useRef } from "react";
import "./userDataForm.scss";
import { CartContext } from "../../App";
import { useField } from "../../hooks/useField";
import CustomSelect from "./CustomSelect";
import UserName from "./UserName";
import UserEmail from "./UserEmail";
import UserPhoneNumber from "./UserPhoneNumber";
import UserAddress from "./UserAddress";
import DeliveryType from "./DeliveryType";
import PaymentType from "./PaymentType";

function UserDataForm(props) {
  const { cart, setCart } = useContext(CartContext);
  const couponRef = useRef(null);
  const deliveryPrice = 150;
  const cartTotal =
    cart.length > 0 &&
    cart
      .map((item) => item.quantity * item.price)
      .reduce((prev, item) => prev + item);

  const [total, setTotal] = useState(cartTotal + deliveryPrice);

  const [
    phone,
    setPhone,
    phoneDirty,
    setPhoneDirty,
    phoneError,
    setPhoneError,
  ] = useField();
  const [coupon, setCoupon] = useField();
  const [
    email,
    setEmail,
    emailDirty,
    setEmailDirty,
    emailError,
    setEmailError,
  ] = useField();
  const [delivery, setDelivery] = useField("delivery");
  const [payment, setPayment] = useField("new-card");
  const [formValid, setFormValid] = useState(false);
  const [
    userName,
    setUserName,
    userNameError,
    setUserNameError,
    userNameDirty,
    setUserNameDirty,
  ] = useField();
  const [
    address,
    setAddress,
    addressDirty,
    setAddressDirty,
    addressError,
    setAddressError,
  ] = useField();
  const couponCode = ["GIFT", "FIRSTORDER", "BIRTHDAY"];

  const timeDeliveryOptions = [
    { value: "fast", label: "Как можно скорее" },
    { value: "by the time", label: "К указанному времени" },
  ];

  const timeOptions = [
    { value: "morning", label: "10:00" },
    { value: "brunch", label: "12:00" },
    { value: "lunch", label: "14:00" },
    { value: "after-lunch", label: "16:00" },
    { value: "dinner", label: "18:00" },
    { value: "after-dinner", label: "20:00" },
    { value: "late-night", label: "22:00" },
  ];

  const [timeDelivery, setTimeDelivery] = useState("fast");
  const [timeOption, setTimeOption] = useState("");

  useEffect(() => {
    if (addressError || phoneError || emailError || userNameError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [addressError, phoneError, emailError, userNameError]);

  const timeChangeHandler = (e) => {
    setTimeOption(e.target.value);
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "address":
        setAddressDirty(true);
        break;
      case "phone":
        setPhoneDirty(true);
        break;
      case "email":
        setEmailDirty(true);
        break;
      case "username":
        setUserNameDirty(true);
        break;
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некорректный емейл");
    } else {
      setEmailError("");
    }
  };

  const phoneHandler = (e) => {
    setPhone(e.target.value);
    let phoneNo = /^((8|\+7)[\- ]?)?(\(?\d{3,4}\)?[\- ]?)?[\d\- ]{5,10}$ /;
    if (!e.target.value) {
      setPhoneError("Некорректный номер");
    } else {
      setPhoneError("");
      setPhoneDirty(false);
    }
  };

  const couponHandler = (e) => {
    setCoupon(couponRef.current.value);

    e.preventDefault();
    if (couponCode.includes(couponRef.current.value)) {
      let total = cartTotal + deliveryPrice;
      setTotal((total = total - (total * 10) / 100));
    }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    console.log("formValid", formValid);

    if (!formValid) {
      if (!phone) {
        setPhoneDirty(true);
        setPhoneError("Поле не может быть пустым");
      }
    } else {
      const formData = new FormData(e.target);
      const deliveryTime = timeOptions.find(
        (item) => item.value === timeOption
      );
      formData.append("delivery-time-type", timeDelivery);
      formData.append("delivery-time", deliveryTime.label);
      const formProps = Object.fromEntries(formData);

      console.log("formProps", formProps);
    }
  };

  return (
    <div className="hover:shadow-gray-200 shadow-2xl cursor-pointer bg-slate-200 border-2 rounded-lg p-8">
      <span className="text-slate-900 text-2xl mt-1 block mb-4">
        Оформление заказа
      </span>
      <form id="payment-form" className="form" onSubmit={formSubmitHandler}>
        <UserAddress
          blurHandler={blurHandler}
          addres={address}
          setAddress={setAddress}
          setAddressError={setAddressError}
          setAddressDirty={setAddressDirty}
          addressError={addressError}
          addressDirty={addressDirty}
        />

        <UserName
          username={userName}
          blurHandler={blurHandler}
          setUsername={setUserName}
          userNameError={userNameError}
          setUserNameError={setUserNameError}
          userNameDirty={userNameDirty}
          setUserNameDirty={setUserNameDirty}
        />

        <UserEmail
          emailError={emailError}
          blurHandler={blurHandler}
          emailDirty={emailDirty}
          emailHandler={emailHandler}
          email={email}
        />

        <UserPhoneNumber
          blurHandler={blurHandler}
          phoneHandler={phoneHandler}
          phoneDirty={phoneDirty}
          phoneError={phoneError}
          phone={phone}
        />

        <DeliveryType delivery={delivery} setDelivery={setDelivery} />

        <CustomSelect
          value={timeDelivery}
          setValue={setTimeDelivery}
          options={timeDeliveryOptions}
          label="Время доставки"
          htmlFor='"delivery-time-type'
        />

        <CustomSelect
          value={timeOption}
          setValue={setTimeOption}
          options={timeOptions}
          label="Выберите время"
          htmlFor="delivery-time"
        />

        <div className="form-field--fieldset">
          <fieldset>
            <div className="form-field--group">
              Способ оплаты:
              <PaymentType payment={payment} setPayment={setPayment} />
            </div>
          </fieldset>
        </div>

        <div className="form-field form-field--text form-field--with-btn">
          <label htmlFor="coupon">Укажите промокод:</label>
          <input
            onBlur={(e) => blurHandler(e)}
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            className="text-sm"
            type="text"
            id="coupon-code"
            name="coupon"
            ref={couponRef}
          />
          <button
            onClick={couponHandler}
            className="submit-btn transition ease-in-out delay-100 hover:translate hover:scale-100"
          >
            Применить
          </button>
        </div>
      </form>

      <div className="form-total">
        <span className="form-total__item form-total__item--total">
          Ваш заказ: {cartTotal}₽
        </span>
        <span className="form-total__item form-total__item--delivery">
          Доставка: {deliveryPrice}₽
        </span>
        <span className="form-total__item form-total__item--payment">
          К оплате: {total}₽
        </span>
      </div>

      <button
        form="payment-form"
        type="submit"
        className="pay-btn w-full transition ease-in-out delay-100 hover:translate hover:scale-100 cursor-pointer bg-purple-200"
      >
        Перейти к оплате
      </button>
    </div>
  );
}

export default UserDataForm;
