class ArticlePage extends React.Component {
  render() {
    const {location} = this.props;
    const article = articles.find(a => a.id === parseInt(location.search.split('=')[1], 10));

    return (
      <article className="container m-5">
        <h1>{article.title}</h1>
        {article.body.split('\n').map(text => <p key={text}>{text}</p>)}
      </article>
    );
  }
}
