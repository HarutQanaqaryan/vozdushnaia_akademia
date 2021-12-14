import React, { useState, useEffect, useCallback, useReducer } from "react";
import Image from "next/image";
import tick from "../../img/tick.svg";
import error from "../../img/error.svg";
import { patterns } from "../../service/regex-patterns";
import { FeedBackUi } from "./feedback-render";

const FeedbackForm = ({ onClick, callHomeMethod }) => {
  const [name, setName] = useState({ text: "", isValid: false });
  const [phone, setPhone] = useState({ text: "", isValid: false });
  const [validInput, setValidInput] = useState(false);
  const [isModal, setIsModal] = useState(true);
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

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const data = { name: name.text, phone: phone.text };
      validInput &&
        fetch("/api/contact", {
          method: "post",
          body: JSON.stringify(data),
        })
          .then((e) => {
            e && setIsDelivered(true);
            setIsModal(false);
          })
          .catch((e) => e && setIsFailed(true));
    },
    [name.text, phone.text, validInput]
  );

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

 console.log(callHomeMethod)

  return (
    <>
      {isModal && (
        <FeedBackUi
          onSubmit={handleSubmit}
          onChange={checkInputs}
          validName={name.isValid}
          validPhone={phone.isValid}
          onClick={onClick}
        />
      )}
      {isDelivered && (
        <div className="feedback-delivered_block">
          <Image src={tick} alt="" width="90px" height="90px" />
          <span className="delivered-failed-hint">Отправлено!</span>
        </div>
      )}
      {isFailed && (
        <div className="feedback-failed_block">
          <Image src={error} alt="" width="50px" height="50px" />
          <span>Что-то пошло не так, попробуйте через 5 минут!</span>
        </div>
      )}
    </>
  );
};
export default React.memo(FeedbackForm);
