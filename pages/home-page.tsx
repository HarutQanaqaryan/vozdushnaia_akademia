import ChooseUs from "../components/choose-us";
import FeedbackForm from "../components/feedback";
import Slider from "../components/slide";

const HomePage = () => {
  return (
    <div className="home-page">
      <Slider />
      <ChooseUs />
      <FeedbackForm />
    </div>
  );
};
export default HomePage;
