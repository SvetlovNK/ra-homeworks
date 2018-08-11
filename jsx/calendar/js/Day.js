const Day = ({currentDay, firstDayOfWeek, isFirstWeek, children}) => {
  const day = children;
  let cellClass;

  if (isFirstWeek && day > 7 || !isFirstWeek && day < firstDayOfWeek) {
    cellClass = 'ui-datepicker-other-month';
  } else if (day === currentDay) {
    cellClass = 'ui-datepicker-today';
  }

  return <td className={cellClass}>{day}</td>;
};