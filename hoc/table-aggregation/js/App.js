'use strict';

const aggregateByMonth = aggregateByDate('month', {month: 'long'});
const aggregateByYear = aggregateByDate('year', {year: 'numeric'});

const GroupedMonthTable = WithGroup(MonthTable, {
  sortFunc: sortByMonth,
  agregateFunc: aggregateByMonth,
  isShortMonth: true
});

const GroupedYearTable = WithGroup(YearTable, {
  agregateFunc: aggregateByYear,
});

const GroupedSortTable = WithGroup(SortTable, {
  sortFunc: sortByDate,
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    axios.get('https://api.myjson.com/bins/l2s9l').then(response => {
      this.setState(response.data);
    });
  }

  render() {
    return (
      <div id="app">
        <GroupedMonthTable list={this.state.list}/>
        <GroupedYearTable list={this.state.list}/>
        <GroupedSortTable list={this.state.list}/>
      </div>
    );
  }
}