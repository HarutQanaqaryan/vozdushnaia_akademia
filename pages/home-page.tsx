import ChooseUs from "../components/choose-us";
import Slider from "../components/slider";
import FeedbackForm from "../components/feedback/feedback";
import { useAppDispatch, useAppSelector } from "../redux/redux";
import { feedBackSlice } from "../redux/feedbackReducer";
import { useEffect } from "react";

const HomePage = () => {
  const { isOpenedModal, delivered, failed } = useAppSelector(
    (state) => state.feedbackReducer
  );
  
  const { modalOpen } = feedBackSlice.actions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (delivered) {
      setTimeout(() => {
        dispatch(feedBackSlice.actions.sendMessageSucces(false)),
          dispatch(modalOpen(false));
      }, 3000);
    }
    if (failed) {
      setTimeout(() => {
        dispatch(feedBackSlice.actions.sendMessageError(false)),
          dispatch(modalOpen(false));
      }, 3000);
    }
  }, [delivered, failed, modalOpen,isOpenedModal, dispatch]);

  return (
    <div className={`home-page`}>
      <Slider onClick={() => dispatch(modalOpen(true))} />
      {isOpenedModal && (
        <FeedbackForm onClick={() => dispatch(modalOpen(false))} />
      )}
      <ChooseUs />
    </div>
  );
};

export default HomePage;
