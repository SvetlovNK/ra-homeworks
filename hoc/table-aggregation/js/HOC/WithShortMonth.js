const WithShortMonth = (Component) => {
  return class ShortMonthComponent extends React.Component {
    getShortedMonth = (list) => {
      return list.map(({month, ...spread}) => {
        if (!month) return;

        const shortMonth = month.substr(0, 3).toUpperCase();
        return {
          month: shortMonth,
          ...spread
        }
      });
    };

    render() {
      return <Component {...this.props} list={this.getShortedMonth(this.props.list)}/>
    };
  };
};
