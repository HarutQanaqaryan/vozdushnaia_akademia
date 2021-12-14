export const initialState = {
  name: {text: "", isValid: false},
  phone: {text: "", isValid: false},
  validInput: false,
  isModal: true,
  delivered: false,
  failed: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "delivered":
      return { ...state, delivered: !state.delivered };
      break;
      case "failed":
        return { ... state, failed: !state.failed }
        break;
    default:
      return;
  }
};

