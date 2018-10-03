const App = () => {
  const routes = [
    {
      id: 'general',
      url: '/',
      title: 'Рефераты',
    },
    {
      id: 'creator',
      url: '/creator',
      title: 'Криэйтор',
    },
    {
      id: 'fortune',
      url: '/fortune',
      title: 'Гадалка',
    },
  ];

  return (
    <Router>
      <div>
        <nav className="tabs__items">
          {routes.map(route => <NavLink to={route.url} className="tabs__item" activeClassName="tabs__item-active" exact>{route.title}</NavLink>)}
        </nav>

        <div className="tabs__content">
          <Route path="/" exact component={Essay}/>
          <Route path="/creator" exact component={Creator}/>
          <Route path="/fortune" exact component={Fortune}/>
        </div>
      </div>
    </Router>
  )
};
