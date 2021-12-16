import ChooseUs from "../components/choose-us";
import Slider from "../components/slider";
import FeedbackForm from "../components/feedback/feedback";
import { useAppDispatch, useAppSelector } from "../redux/redux";
import { feedBackSlice } from "../redux/feedbackReducer";
import { useEffect, useCallback } from "react";
import { is } from "immer/dist/internal";

const HomePage = () => {
  const { isOpenedModal, isClosedModal, delivered, failed } =
    useAppSelector((state) => state.feedbackReducer);

  const {
    modalOpen,
    sendMessageSucces,
    sendMessageError,
    modalClose,
  } = feedBackSlice.actions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (delivered) {
      setTimeout(() => dispatch(modalClose(true)), 1000)
      setTimeout(() => {
        dispatch(sendMessageSucces(false));
        dispatch(modalOpen(false));
      }, 2000);
    }
    if (failed) {
      setTimeout(() => dispatch(modalClose(true)), 1000)
      setTimeout(() => {
        dispatch(sendMessageSucces(false));
        dispatch(modalOpen(false));
      }, 2000);
    }
  }, [
    delivered,
    failed,
    modalOpen,
    dispatch,
    sendMessageSucces,
    sendMessageError,
    modalClose
  ]);


  const openModalWindow = useCallback(() => {
    dispatch(modalOpen(true));
    dispatch(modalClose(false));
  }, [dispatch, modalClose, modalOpen]);

  const closeModalWindow = useCallback(() => {
    dispatch(modalClose(true));
    setTimeout(() => dispatch(modalOpen(false)), 500);
  }, [dispatch, modalClose, modalOpen]);

  return (
    <div className={`home-page`}>
      <Slider onClick={() => openModalWindow()} />
      {isOpenedModal && (
        <FeedbackForm
          onClick={() => closeModalWindow()}
          displayBlock={`${isOpenedModal && "feedback_modal_open"}`}
          displayNone={`${isClosedModal && "feedback_modal_close"}`}
        />
      )}
      <ChooseUs />
    </div>
  );
};

export default HomePage;
