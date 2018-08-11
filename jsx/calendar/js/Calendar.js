const getPreviousMonth = (currentDate) => {
  const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth());
  newDate.setMonth(newDate.getMonth() - 1);

  return newDate;
};

const getPreviousMonthDays = (date, prevMonth) => {
  const firstDayOfCurrentMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const weekDay = firstDayOfCurrentMonth.getDay();
  const counter = weekDay === 0 ? 6 : weekDay - 1;
  const lastDayOfPrevMonth = new Date(prevMonth.getFullYear(), prevMonth.getMonth() + 1, 0);
  const preparedLastDay = lastDayOfPrevMonth.getDate();

  return collectReverseDays(counter, preparedLastDay);
};

const getCurrentMonthDays = (date) => {
  const lastDayOfCurrentMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const lastDay = lastDayOfCurrentMonth.getDate();

  return collectDays(lastDay);
};

const collectDays = (counter, prevDay = 1, list = []) => {
  if (counter > 0) {
    list.push(prevDay);
    return collectDays(counter - 1, prevDay + 1, list);
  }

  return list;
};

const collectReverseDays = (counter, prevDay, list = []) => {
  if (counter > 0) {
    list.push(prevDay);
    return collectReverseDays(counter - 1, prevDay - 1, list);
  }

  return list.reverse();
};

const getweeks = (days) => {
  const daysInWeek = 7;
  let weeks = [];

  for (let i = 0; i < days.length; i += daysInWeek) {
    const week = days.slice(i, i + daysInWeek);
    weeks = [...weeks, week]
  }

  return weeks;
};

const getNextMonthDays = (date) => {
  const lastDayOfCurrentMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const weekDay = lastDayOfCurrentMonth.getDay();
  const counter = weekDay === 0 ? weekDay : 7 - weekDay;

  return collectDays(counter);
};

const Calendar = (props) => {
  const {date} = props;
  const currentYear = date.getFullYear();
  const currentDay = date.getDate();
  const prevMonth = getPreviousMonth(date);
  const prevMonthDaysList = getPreviousMonthDays(date, prevMonth);
  const currentMonthDaysList = getCurrentMonthDays(date);
  const nextMonthDaysList = getNextMonthDays(date);
  const dayList = [...prevMonthDaysList, ...currentMonthDaysList, ...nextMonthDaysList];
  const weeks = getweeks(dayList);

  // text strings
  const dayString = capitalizeString(date.toLocaleString('ru-ru', {weekday: 'long'}));
  const decliningMonth = date.toLocaleString('ru', {month: 'long', day: 'numeric'}).split(' ')[1];
  const month = capitalizeString(date.toLocaleString('ru', {month: 'long'}));

  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{dayString}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{currentDay}</div>
          <div className="ui-datepicker-material-month">{decliningMonth}</div>
          <div className="ui-datepicker-material-year">{date.getFullYear()}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{month}</span>&nbsp;<span
          className="ui-datepicker-year">{currentYear}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <colgroup>
          <col/>
          <col/>
          <col/>
          <col/>
          <col/>
          <col className="ui-datepicker-week-end"/>
          <col className="ui-datepicker-week-end"/>
        </colgroup>
        <thead>
        <tr>
          <th scope="col" title="Понедельник">Пн</th>
          <th scope="col" title="Вторник">Вт</th>
          <th scope="col" title="Среда">Ср</th>
          <th scope="col" title="Четверг">Чт</th>
          <th scope="col" title="Пятница">Пт</th>
          <th scope="col" title="Суббота">Сб</th>
          <th scope="col" title="Воскресенье">Вс</th>
        </tr>
        </thead>
        <tbody>
        {weeks.map((week, i) => <Week days={week} currentDay={currentDay} isFirstWeek={i === 0}/>)}
        </tbody>
      </table>
    </div>
  )
};