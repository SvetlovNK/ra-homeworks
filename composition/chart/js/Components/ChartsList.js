class ChartsList extends React.Component {
  componentWillMount() {
    this.setState({
      data: [],
      series: ['France', 'Italy', 'England', 'Sweden', 'Germany'],
      labels: ['cats', 'dogs', 'horses', 'ducks', 'cows'],
      colors: ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C']
    })
  }

  componentDidMount() {
    this.populateArray();
    setInterval(this.populateArray.bind(this), 2000);
  }

  populateArray() {
    const series = 5;
    const serieLength = 5;

    let data = new Array(series).fill(new Array(serieLength).fill(0));
    data = data.map(serie => serie.map(item => getRandomInt(0, 20)));

    this.setState({data});
  }

  render() {
    const {data, colors, labels, series} = this.state;
    const max = data.reduce((max, serie) => Math.max(max, serie.reduce((serieMax, item) => Math.max(serieMax, item), 0)), 0);

    return (
      <section>
        <Charts data={data} colors={colors} labels={labels} max={max}>
          <ChartsColumnsView/>
        </Charts>

        <Charts data={data} colors={colors} labels={labels} max={max}>
          <ChartsColumnsView/>
        </Charts>

        <Charts data={data} colors={colors} labels={labels} max={max}>
          <ChartsColumnsView/>
        </Charts>

        <Legend labels={labels} colors={colors}/>
      </section>
    );
  }
}