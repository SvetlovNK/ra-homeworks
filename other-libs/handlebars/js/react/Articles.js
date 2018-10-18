const Articles = ({articles = []}) => {
  return (
    <div>
      {articles.map(({subject, body}, index) => {
        return (
          <article key={index} className="article">
            <h2>{subject}</h2>
            <p>{body}</p>
          </article>
        );
      })}
    </div>
  );
};