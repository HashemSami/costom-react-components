import { FC } from "react";

interface StarRatingProps {
  count: number;
  value: number;
  activeColor: string;
  inactiveColor: string;
  size: number;
  onChange: (value: number) => void;
}

const StarRating: FC<StarRatingProps> = ({
  count,
  value,
  activeColor = "#f00",
  inactiveColor = "#ddd",
  size = 24,
  onChange,
}) => {
  const stars = Array.from({ length: count }, () => "♥");

  const handleChange = (value: number) => {
    onChange(value + 1);
  };
  return (
    <div>
      {stars.map((star, i) => {
        let style = inactiveColor;
        if (i < value) {
          style = activeColor;
        }

        return (
          <span
            className="star"
            key={i}
            style={{
              color: style,
              width: size,
              height: size,
              fontSize: size,
              display: "inline-block",
              cursor: "pointer",
            }}
            onClick={() => handleChange(i)}
          >
            {star}
          </span>
        );
      })}
      {value}
    </div>
  );
};

export default StarRating;
