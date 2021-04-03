import { FC, useState } from "react";

import Slider from "./Slider";
import CircularProgressBar from "./CircularProgressBar.component";

interface ProgressBarContainerProps {
  value: number;
}

const ProgressBarContainer: FC<ProgressBarContainerProps> = ({ value }) => {
  const [progress, setProgress] = useState(value);

  const onChangeProgress = (value: number) => {
    setProgress(value);
  };

  return (
    <div className="container">
      <div>
        <Slider defaultValue={progress} onChange={onChangeProgress} />

        <CircularProgressBar
          percentage={progress}
          className="progress-blue"
          progressOffset={0}
          strokeWidth={20}
        />
      </div>
    </div>
  );
};

export default ProgressBarContainer;
