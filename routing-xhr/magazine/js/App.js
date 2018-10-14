const App = () => {
  return (
    <div>
      <Nav/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/article' component={ArticlePage}/>
        <Route exact path='/subscribtion' component={SubscribtionPage}/>
      </Switch>
    </div>
  )
};