import { FC, useState } from "react";
import SelectData from "./SelectData.component";
import dayjs, { months, getMonth } from "../dayjs";

interface MonthNavProps {
  //   showMonthPopup: boolean;
  dayjsContext: dayjs.Dayjs;
  setDayjsContext: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>;
}

//header navigation for the month
const MonthNav: FC<MonthNavProps> = ({ dayjsContext, setDayjsContext }) => {
  const [showMonthPopup, setShowMonthPopup] = useState(false);

  // const [dayjsContext, _] = useState(dayjs()); //to navigate between months and years
  console.log(showMonthPopup);

  const month = getMonth(dayjsContext);

  const onChangeMonth = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    month: string
  ) => {
    setShowMonthPopup((state) => !state);
  };

  return (
    <span className="label-month" onClick={(e) => onChangeMonth(e, month)}>
      {month}
      {showMonthPopup && (
        <SelectData months={months} setDayjsContext={setDayjsContext} />
      )}
    </span>
  );
};

export default MonthNav;
