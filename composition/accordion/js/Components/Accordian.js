const Accordian = ({title, children}) => {
  return (
    <div id="accordian">¬
      <main className="main">
        <h2 className="title">{title}</h2>

        {children}
      </main>
    </div>
  );
};