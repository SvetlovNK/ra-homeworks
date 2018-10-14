const App = () => {
  return (
    <div>
      <Nav/>
      <Switch>
        <Route exact path='/routing-xhr/magazine/index.html' component={HomePage}/>
        <Route exact path='/routing-xhr/magazine/article' component={ArticlePage}/>
        <Route exact path='/routing-xhr/magazine/subscribtion' component={SubscribtionPage}/>
      </Switch>
    </div>
  )
};