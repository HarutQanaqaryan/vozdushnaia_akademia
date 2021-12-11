import { useState, useEffect } from "react";
import { patterns } from "../service/regex-patterns";
import tick from "../img/tick.svg";
import error from "../img/error.svg"
import Image from "next/image";

const FeedbackForm = () => {
  const [name, setName] = useState({ text: "", isValid: false });
  const [email, setEmail] = useState({ text: "", isValid: false });
  const [phone, setPhone] = useState({ text: "", isValid: false });
  const [validInput, setValidInput] = useState(true);
  const [isDelivered, setIsDelivered] = useState(true);
  const [isFailed, setIsFailed] = useState(false);

  const checkInputs = ({ target: { value, id } }) => {
    switch (id) {
      case "name":
        setName({ text: value, isValid: !patterns.name.test(value) });

        break;
      case "email":
        setEmail({ text: value, isValid: !patterns.email.test(value) });
        break;
      case "phone":
        setPhone({ text: value, isValid: !patterns.phone.test(value) });
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name: name.text, email: email.text, phone: phone.text };
    !validInput && 
    fetch("/api/contact", {
      method: "post",
      body: JSON.stringify(data),
    })
      .then((e) => e && setIsDelivered(true))
      .catch((e) => e && setIsFailed(true));
  };

  useEffect(() => {
    if (name.isValid) {
      setValidInput(true);
    }
    if (email.isValid) {
      setValidInput(true);
    }
    if (phone.isValid) {
      setValidInput(true);
    }
    return () => {
      setValidInput(false);
    };
  }, [name.isValid, email.isValid, phone.isValid, validInput]);

console.log(isDelivered)
  return (
    <div className="feedback-form-block">
      <h4 className="feedback-form_title">Закажите звонок и мы перезоним !</h4>
      <form onSubmit={handleSubmit} className="feedback-block_form">
        <label htmlFor="name" className="feedback-form_label">
          Имя:
        </label>
        <input
          id="name"
          type="text"
          onChange={checkInputs}
          className="feedback-form_input"
        />
        {name.isValid && <div className="validation-hint"><Image src={error} alt="" width="20px" height="20px"/><span>Что то не так</span></div>}
        <label htmlFor="email" className="feedback-form_label">
          Эл. адрес:
        </label>
        <input
          id="email"
          type="email"
          onChange={checkInputs}
          className="feedback-form_input"
        />
        {email.isValid && <div className="validation-hint"><Image src={error} alt="" width="20px" height="20px"/><span>Что то не так</span></div>}
        <label htmlFor="phone" className="feedback-form_label">
          Телефон:
        </label>
        <input
          id="phone"
          type="phone"
          onChange={checkInputs}
          className="feedback-form_input"
        />
        {phone.isValid && <div className="validation-hint"><Image src={error} alt="" width="20px" height="20px"/><span>Что то не так</span></div>}
        <button type="submit" className="feedback-form_btn">
          Отправить
        </button>
        {isDelivered && <div className="feedback-delivered_block"><Image src={tick} alt="" width="40px" height="40px"/><span className="delivered-failed-hint">Отправлено!</span></div>}
        {isFailed && <div className="feedback-delivered_block"><Image src={tick} alt="" width="30px" height="30px"/><span>Что-то пошло не так, попробуйте через 5 минут!</span></div>}
      </form>
    </div>
  );
};

export default FeedbackForm;
