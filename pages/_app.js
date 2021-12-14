import "../styles/globals.css";
import "../components/styles/feedback.css";
import "../components/styles/footer.css";
import "../components/styles/choose-us.css";
import "../components/styles/slider.css";
import "../components/styles/navbar.css";
import { Provider } from "react-redux";
import { compose, createStore } from "redux";
import { reducer } from "../service/states-story";

const store = createStore(reducer, compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__()
));

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />;
    </Provider>
  );
}

export default MyApp;
