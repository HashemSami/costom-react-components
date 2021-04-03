import { FC } from "react";

interface SliderProps {
  defaultValue: number;
  onChange: (value: number) => void;
}

const Slider: FC<SliderProps> = ({ defaultValue = 0, onChange }) => {
  return (
    <input
      className="slider"
      value={defaultValue}
      onChange={(e) => onChange(e.target.valueAsNumber)}
      type="range"
      min="0"
      max="100"
    />
  );
};

export default Slider;
