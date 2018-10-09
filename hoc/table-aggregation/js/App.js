'use strict';

const agregateByMonth = agregateByDate('month', {month: 'long'});
const agregateByYear = agregateByDate('year', {year: 'numeric'});

const MonthTableWithDateSort = WithDateSort(MonthTable, sortByMonth);
const MonthTableWithAgregate = WithAgregate(MonthTableWithDateSort, agregateByMonth);

// const YearTableWithAgregate = WithAgregate(YearTable, agregateByYear);
// const YearTableWithDateSort = WithDateSort(YearTable);
// const SortTableWithDateSort = WithDateSort(SortTable);

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
        <MonthTableWithAgregate list={this.state.list}/>
        {/*<YearTableWithAgregate list={this.state.list}/>*/}
        {/*<SortTableWithDateSort list={this.state.list}/>*/}
      </div>
    );
  }
};