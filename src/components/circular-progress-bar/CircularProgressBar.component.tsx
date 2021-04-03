import { FC, useEffect, useState } from "react";

interface CircularProgressBarProps {
  percentage: number;
  className: string;
  progressOffset: number;
  strokeWidth: number;
  textForPercentage?: (percentage: number) => string;
  color?: string;
}

const MIN_PERCENTAGE = 0;
const MAX_PERCENTAGE = 100;
const FULL_RADIUS = 50;
const CENTER_X = 50;
const CENTER_Y = 50;

const CircularProgressBar: FC<CircularProgressBarProps> = ({
  percentage,
  progressOffset = 0,
  strokeWidth = 8,
  className,
  textForPercentage = (percentage) => `${percentage}%`,
  color = "#42c0FB",
}) => {
  const [currentPercentage, setCurrentPercentage] = useState(percentage);

  useEffect(() => {
    if (currentPercentage !== percentage) {
      setCurrentPercentage(percentage);
    }
  }, [percentage, currentPercentage]);

  const text = textForPercentage(currentPercentage);

  const getPathRadius = (): number => {
    return FULL_RADIUS - strokeWidth / 2;
  };

  let radius = getPathRadius();
  let textClassName = `progress-text progress-text-${className}`;
  let progressRaduis = radius - progressOffset;

  // full path for creating arc shapes svg
  // a rx ry x-axis-rotation large-arc-flag sweep-flag dx dy
  //"M 50 50 m -46, 0 a 46,46 0 1,0 92,0"
  // M for move to, m for reletive move to, a for arc draw from reletive position
  const getArcPath = (cx: number, cy: number, r: number) => {
    let path = `M ${cx} ${cy} m -${r}, 0 a${r},${r} 0 1,0 ${
      r * 2
    },0 a${r},${r} 0 1,0 -${r * 2},0`;
    return path;
  };

  const getProgressStyle = (percentageValue: number = currentPercentage) => {
    let raduis = getPathRadius() - progressOffset;
    const diameter = Math.PI * 2 * raduis;
    const percentRoundOff = Math.min(
      Math.max(percentageValue, MIN_PERCENTAGE),
      MAX_PERCENTAGE
    );
    const dashOffset = ((100 - percentRoundOff) / 100) * diameter;

    return {
      strokeDasharray: `${diameter}px ${diameter}px`,
      strokeDashoffset: `${dashOffset}px`,
    };
  };
  return (
    <svg viewBox="0 0 100 100">
      <g>
        <circle
          stroke="lightgray"
          strokeWidth={strokeWidth}
          fill="none"
          cx={CENTER_X}
          cy={CENTER_Y}
          r={radius}
        />
        <path
          d={getArcPath(CENTER_X, CENTER_Y, progressRaduis)}
          className={className + " progress"}
          stroke={color}
          strokeWidth={strokeWidth}
          fillOpacity={1}
          fill="none"
          style={getProgressStyle()}
        />

        <text
          className={textClassName}
          fill={color}
          x={CENTER_X - (percentage < 100 ? radius / 4 : radius / 2.5)}
          y={CENTER_Y + radius / 7}
        >
          {text}
        </text>
      </g>
    </svg>
  );
};

export default CircularProgressBar;
