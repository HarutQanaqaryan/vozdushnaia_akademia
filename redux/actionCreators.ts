import { AppDispatch } from "./store";
import { feedBackSlice } from "./feedbackReducer";

export const sendMessage = (name, phone) => (dispatch: AppDispatch) => {
  const data = { name: name, phone: phone };
  fetch("/api/contact", {
    method: "post",
    body: JSON.stringify(data),
  })
    .then(() => {
      dispatch(feedBackSlice.actions.sendMessageSucces(true));
      dispatch(feedBackSlice.actions.isFormModal(false))
      dispatch(feedBackSlice.actions.addName({text: "", isValid: false}));
      dispatch(feedBackSlice.actions.addPhone({text: "", isValid: false}))
      dispatch(feedBackSlice.actions.IsValidInput(false))
    })
    .catch((e) => e && dispatch(feedBackSlice.actions.sendMessageError(true)));

}
