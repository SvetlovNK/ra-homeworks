const SearchBoxView = ({ getRef, fixed }) => (
  <section className="container">
    <div className="row">
      <div className="col-sm-12">
        <input
          ref={getRef}
          className={`search-box ${fixed ? 'search-box_fixed' : null}`}
          placeholder="Поиск"
        >
        </input>
      </div>
    </div>
  </section>
);
