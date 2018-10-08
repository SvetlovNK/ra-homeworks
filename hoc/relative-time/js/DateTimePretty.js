const minsDecl = declOfNum(['минута', 'минуты', 'минут']);
const hoursDecl = declOfNum(['час', 'часа', 'часов']);
const daysDecl = declOfNum(['день', 'дня', 'дней']);

const DECLS = {
  min: minsDecl,
  hours: hoursDecl,
  days: daysDecl,
};

const DateTimePretty = (Component) => {
  return ({date, ...rest}) => {
    const MIN = 1000 * 60;
    const HOUR = MIN * 60;
    const DAY = HOUR * 24;

    const currentDate = new Date();
    const componentDate = new Date(date);
    const timeLeft = currentDate - componentDate;
    const minsLeft = Math.floor(timeLeft / MIN);
    const hoursLeft = Math.floor(timeLeft / HOUR);
    const daysLeft = Math.floor(timeLeft / DAY);
    let timeValue;
    let unitDecl;
    let dateString;

    if (hoursLeft < 1) {
      timeValue = minsLeft;
      unitDecl = 'min';
    } else if (daysLeft < 1) {
      timeValue = hoursLeft;
      unitDecl = 'hours';
    } else {
      timeValue = daysLeft;
      unitDecl = 'days';
    }

    dateString = `${timeValue} ${DECLS[unitDecl](timeValue)} назад`;

    return <Component {...rest} date={dateString}/>;
  };
};