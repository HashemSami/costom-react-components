import { useState } from "react";
import "./App.css";

import StarRating from "./components/star-rating/StarRating.component";
import ProgressBarContainer from "./components/circular-progress-bar";
import Calendar from "./components/calendar";
import DragDrop from "./components/drag-drop/DragDrop";

const style = {
  position: "relative",
  margin: "50px auto",
};

function App() {
  const [rating, setRating] = useState(3);
  const [progress1, setProgress1] = useState(80);
  const [progress2, setProgress2] = useState(15);
  const [progress3, setProgress3] = useState(30);
  const [progress4, setProgress4] = useState(55);

  const handleChange = (value: number) => {
    setRating(value);
  };

  const onDayClicked = () => {};

  return (
    <div className="App">
      <DragDrop />
      <Calendar style={style} width="350px" />
      <div>
        <StarRating
          count={5}
          size={40}
          value={rating}
          activeColor={"red"}
          inactiveColor={"#ddd"}
          onChange={handleChange}
        />
      </div>
      <ProgressBarContainer value={progress1} />
      {/* <ProgressBarContainer value={progress2} />
      <ProgressBarContainer value={progress3} />
      <ProgressBarContainer value={progress4} /> */}
    </div>
  );
}

export default App;
