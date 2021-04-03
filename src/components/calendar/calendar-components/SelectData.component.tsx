import { FC } from "react";
import dayjs, { setDateContextByMonthNumber } from "../dayjs";

interface SelectDataProps {
  months: string[];
  setDayjsContext: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>;
}

const SelectData: FC<SelectDataProps> = ({ months, setDayjsContext }) => {
  const onSelectChange = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    month: string
  ) => {
    const monthNumber = months.indexOf(month);
    setDayjsContext((state) => setDateContextByMonthNumber(state, monthNumber));
  };

  const popup = months.map((month) => (
    <div key={month}>
      <a href="#" onClick={(e) => onSelectChange(e, month)}>
        {month}
      </a>
    </div>
  ));
  return <div className="month-popup">{popup}</div>;
};

export default SelectData;
