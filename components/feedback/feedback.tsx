import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import tick from "../../img/tick.svg";
import error from "../../img/error.svg";
import { FeedBackUi } from "./feedback-render";
import { feedBackSlice } from "../../redux/feedbackReducer";
import { useAppDispatch, useAppSelector } from "../../redux/redux";
import { patterns } from "../../service/regex-patterns";
import { sendMessage } from "../../redux/actionCreators";

const FeedbackForm = ({ onClick, displayBlock, displayNone }) => {
  const {
    name,
    phone,
    validInput,
    isForm,
    delivered,
    failed,
    isClosedModal,
  } = useAppSelector((state) => state.feedbackReducer);
  const {
    addName,
    addPhone,
    IsValidInput,
    isFormModal,
    modalOpen,
    modalClose,
  } = feedBackSlice.actions;
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
    if (name.text === "") {
      dispatch(addName({ text: name.text, isValid: false }));
    }
    if (phone.text === "") {
      dispatch(addPhone({ text: phone.text, isValid: false }));
    }
  }, [addName, addPhone, dispatch, name.text, phone.text, IsValidInput]);

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

  const closeModalWindow = useCallback(() => {
    dispatch(modalClose(true));
    dispatch(modalOpen(false));
  }, [dispatch, modalClose, modalOpen]);

  return (
    <>
      {!isClosedModal && (
        <div
          className="feedback_background"
          onClick={() => closeModalWindow()}
        ></div>
      )}
      {isForm && (
        <FeedBackUi
          onSubmit={handleSubmit}
          onChange={checkInputs}
          validName={name.isValid}
          validPhone={phone.isValid}
          onClick={onClick}
          displayBlock={displayBlock}
          displayNone={displayNone}
        />
      )}

      {delivered && (
        <div
          className={`feedback-delivered_block ${isClosedModal && "delivered_close"}`}
        >
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
    </>
  );
};

export default FeedbackForm;
