import "../styles/globals.css";
import "../components/styles/feedback.css";
import "../components/styles/footer.css";
import "../components/styles/choose-us.css";
import "../components/styles/slider.css";
import "../components/styles/navbar.css";
import { Provider } from "react-redux";
import { setupStore } from "../redux/store"

const store = setupStore()

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />;
    </Provider>
  );
}

export default MyApp;
