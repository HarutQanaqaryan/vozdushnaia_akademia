import ChooseUs from "../components/choose-us";
import Slider from "../components/slider";
import {  useState, useEffect } from "react";
import FeedbackForm from "../components/feedback/feedback";


const HomePage = () => {
  const [feedBack, setFeedBack] = useState(false);

  return (
    <div className="home-page">
      <Slider onClick={() => setFeedBack(prevState => !prevState)} />
      {feedBack && <FeedbackForm onClick={() => setFeedBack(prevState => !prevState)} callHomeMethod={feedBack}/>}
      <ChooseUs />
    </div>
  );
};
export default HomePage;
