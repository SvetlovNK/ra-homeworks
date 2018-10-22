'use strict';

const aggregateByMonth = aggregateByDate('month', {month: 'long'});
const aggregateByYear = aggregateByDate('year', {year: 'numeric'});
const compose = _.compose;

const ComposedMonthTable = compose(
  WithAgregate(aggregateByMonth),
  WithSort(sortByMonth),
  WithShortMonth
)(MonthTable);

const ComposedYearTable = compose(
  WithAgregate(aggregateByYear),
  WithSort(sortObjectsListByNumber)
)(YearTable);

const ComposedSortTable = compose(
  WithSort(sortByDate)
)(SortTable);

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
        <ComposedMonthTable list={this.state.list}/>
        <ComposedYearTable list={this.state.list}/>
        <ComposedSortTable list={this.state.list}/>
      </div>
    );
  }
}