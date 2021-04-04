import { FC, useState, useRef } from "react";
import dayjs, { setDateContextByYear } from "../dayjs";

interface YearNavProps {
  year: string;
  setDayjsContext: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>;
}

const YearNav: FC<YearNavProps> = ({ year, setDayjsContext }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [showYearEditor, setShowYearEditor] = useState(false);

  const onYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const clickedYear = parseInt(event.target.value);
    setDayjsContext((state) => setDateContextByYear(state, clickedYear));
  };

  const onKeyupYear = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" || event.key === "Escape") {
      const clickedYear = parseInt(event.currentTarget.value);

      setDayjsContext((state) => setDateContextByYear(state, clickedYear));
      setShowYearEditor(false);
    }
  };

  // console.log(year);
  return showYearEditor ? (
    <input
      defaultValue={year}
      className="editor-year"
      ref={inputRef}
      type="number"
      onKeyUp={onKeyupYear}
      onChange={onYearChange}
      placeholder="Year"
    />
  ) : (
    <span className="label-year" onDoubleClick={() => setShowYearEditor(true)}>
      {year}
    </span>
  );
};

export default YearNav;
