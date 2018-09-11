const Week = ({days, isFirstWeek, currentDay}) => {
  const firstDayOfWeek = days[0];
  const props = {
    isFirstWeek,
    firstDayOfWeek,
    currentDay
  };

  return (
    <tr>
      {days.map(day => <Day {...props} >{day}</Day>)}
    </tr>
  )
};