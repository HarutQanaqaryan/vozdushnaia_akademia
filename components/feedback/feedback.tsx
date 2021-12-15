import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import tick from "../../img/tick.svg";
import error from "../../img/error.svg";
import { FeedBackUi } from "./feedback-render";
import { feedBackSlice } from "../../redux/feedbackReducer";
import { useAppDispatch, useAppSelector } from "../../redux/redux";
import { patterns } from "../../service/regex-patterns";
import { sendMessage } from "../../redux/actionCreators";

const FeedbackForm = ({ onClick }) => {
  const { name, phone, validInput, isForm, delivered, failed } = useAppSelector(
    (state) => state.feedbackReducer
  );
  const { addName, addPhone, IsValidInput, isFormModal } =
    feedBackSlice.actions;
  const dispatch = useAppDispatch();

  const checkInputs = useCallback(
    ({ target: { value, id } }) => {
      switch (id) {
        case "name":
          dispatch(
            addName({ text: value, isValid: !patterns.name.test(value) })
          );
          break;
        case "phone":
          dispatch(
            addPhone({ text: value, isValid: !patterns.phone.test(value) })
          );
          break;
        default:
          return;
      }
    },
    [addName, addPhone, dispatch]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      validInput && dispatch(sendMessage(name.text, phone.text));
    },
    [name.text, phone.text, validInput, dispatch]
  );

  useEffect(() => {
    dispatch(isFormModal(true));
  }, [dispatch, isFormModal]);

  useEffect(() => {
    if (name.text === "" && phone.text === "") {
      dispatch(addName({ text: name.text, isValid: false }));
      dispatch(addPhone({ text: phone.text, isValid: false }));
    }
  }, [addName, addPhone, dispatch, name.text, phone.text]);

  useEffect(() => {
    name.text && dispatch(IsValidInput(true));
    phone.text && dispatch(IsValidInput(true));
    name.isValid && dispatch(IsValidInput(false));
    phone.isValid && dispatch(IsValidInput(false));
  }, [
    name.text,
    phone.text,
    name.isValid,
    phone.isValid,
    dispatch,
    IsValidInput,
  ]);

  return (
    <div className="feedback_modal_opened">
      {isForm && (
        <FeedBackUi
          onSubmit={handleSubmit}
          onChange={checkInputs}
          validName={name.isValid}
          validPhone={phone.isValid}
          onClick={onClick}
        />
      )}
      {delivered && (
        <div className="feedback-delivered_block">
          <Image src={tick} alt="" width="90px" height="90px" />
          <span className="delivered-failed-hint">Отправлено!</span>
        </div>
      )}
      {failed && (
        <div className="feedback-failed_block">
          <Image src={error} alt="" width="50px" height="50px" />
          <span>Что-то пошло не так, попробуйте через 5 минут!</span>
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
