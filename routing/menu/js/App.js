class App extends React.Component {
  constructor(props) {
    super(props);

    this.links = [
      {
        id: 'main',
        url: '/',
        text: 'Главная'
      },
      {
        id: 'drift',
        url: '/drift',
        text: 'Главная'
      },
      {
        id: 'timeattack',
        url: '/timeattack',
        text: 'Time Attack'
      },
      {
        id: 'forza',
        url: '/forza',
        text: 'Forza Karting'
      },
    ]
  }

  render() {
    return (
      <Router>
        <div>
          <Menu links={this.links}/>
          <div className="page">
            <Route path="/" exact component={HomePage} />
            <Route path="/drift" exact component={DriftPage} />
            <Route path="/timeattack" exact component={TimeAttackPage} />
            <Route path="/forza" exact component={ForzaPage} />
          </div>
        </div>
      </Router>
    );
  }
}