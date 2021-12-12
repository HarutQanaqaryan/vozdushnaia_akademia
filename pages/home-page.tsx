import ChooseUs from "../components/choose-us";
import Slider from "../components/slider";
import { useEffect, useState } from "react";
import FeedbackForm from "../components/feedback";

const HomePage = () => {
  const [feedBack, setFeedBack] = useState(false);

  return (
    <div className="home-page" >
      <Slider onClick={() => setFeedBack(true)} />
      {feedBack && <FeedbackForm onClick={() => setFeedBack(false)} />}
      <ChooseUs />
    </div>
  );
};
export default HomePage;
