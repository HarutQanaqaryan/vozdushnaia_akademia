import { useState, useEffect } from "react";
import { patterns } from "../service/regex-patterns";
import tick from "../img/tick.svg";
import error from "../img/error.svg";
import Image from "next/image";
import close from "../img/close.svg";

const FeedbackForm = ({ onClick }) => {
  const [name, setName] = useState({ text: "", isValid: false });
  const [phone, setPhone] = useState({ text: "", isValid: false });
  const [validInput, setValidInput] = useState(false);
  const [isDelivered, setIsDelivered] = useState(false);
  const [isFailed, setIsFailed] = useState(false);

  const checkInputs = ({ target: { value, id } }) => {
    switch (id) {
      case "name":
        setName({ text: value, isValid: !patterns.name.test(value) });

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
    const data = { name: name.text, phone: phone.text };
    validInput &&
      fetch("/api/contact", {
        method: "post",
        body: JSON.stringify(data),
      })
        .then((e) => e && setIsDelivered(true))
        .catch((e) => e && setIsFailed(true));
  };

  useEffect(() => {
    if (!name.text && !phone.text) {
      setName({ text: name.text, isValid: false });
      setPhone({ text: phone.text, isValid: false });
    }
  }, [name.text, phone.text]);


  useEffect(() => {
    name.text && setValidInput(true);
    phone.text && setValidInput(true);
    name.isValid && setValidInput(false);
    phone.isValid && setValidInput(false);
  }, [name.text, phone.text, name.isValid, phone.isValid]);

  return (
    <div className="feedback-form-block">
      <div className="feedback-form_close" onClick={onClick}>
        <Image src={close} alt="" width="50px" height="50px" />
      </div>
      <form onSubmit={handleSubmit} className="feedback-block_form">
        <label htmlFor="name" className="feedback-form_label">
          Имя:
        </label>
        <input
          id="name"
          type="text"
          onChange={checkInputs}
          className="feedback-form_input"
          placeholder="Иван"
        />
        {name.isValid && (
          <div className="validation-hint">
            <Image src={error} alt="" width="20px" height="20px" />
            <span>Только русские и латинские буквы (3 - 15 символов) </span>
          </div>
        )}
        <label htmlFor="phone" className="feedback-form_label">
          Телефон:
        </label>
        <input
          id="phone"
          type="phone"
          onChange={checkInputs}
          className="feedback-form_input"
          placeholder="+79003005454"
        />
        {phone.isValid && (
          <div className="validation-hint">
            <Image src={error} alt="" width="20px" height="20px" />
            <span>Номер должен начаться +7 или 8, длиной 10 цифрм</span>
          </div>
        )}
        <button type="submit" className="feedback-form_btn">
          Отправить
        </button>
        {isDelivered && (
          <div className="feedback-delivered_block">
            <Image src={tick} alt="" width="40px" height="40px" />
            <span className="delivered-failed-hint">Отправлено!</span>
          </div>
        )}
        {isFailed && (
          <div className="feedback-delivered_block">
            <Image src={tick} alt="" width="30px" height="30px" />
            <span>Что-то пошло не так, попробуйте через 5 минут!</span>
          </div>
        )}
      </form>
    </div>
  );
};

export default FeedbackForm;
