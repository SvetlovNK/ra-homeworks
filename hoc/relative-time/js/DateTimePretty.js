const minsDecl = declOfNum(['минута', 'минуты', 'минут']);
const hoursDecl = declOfNum(['час', 'часа', 'часов']);
const daysDecl = declOfNum(['день', 'дня', 'дней']);

const MIN = 1000 * 60;
const HOUR = MIN * 60;
const DAY = HOUR * 24;

const DateTimePretty = (Component) => {
  return class DateTimePrettyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.prettyDate = this.prettifyDateTime();
    }

    prettifyDateTime = () => {
      const {date} = this.props;
      const currentDate = new Date();
      const componentDate = new Date(date);
      const timeLeft = currentDate - componentDate;
      const minsLeft = Math.floor(timeLeft / MIN);
      const hoursLeft = Math.floor(timeLeft / HOUR);
      const daysLeft = Math.floor(timeLeft / DAY);

      if (hoursLeft < 1) {
        return `${minsLeft} ${minsDecl(minsLeft)} назад`;
      } else if (daysLeft < 1) {
        return `${hoursLeft} ${hoursDecl(hoursLeft)} назад`;
      }
      return `${daysLeft} ${daysDecl(daysLeft)} назад`;
    };

    render() {
      return <Component {...this.props} date={this.prettyDate}/>;
    }
  };
};