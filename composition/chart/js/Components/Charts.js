const Charts = (props) => {
  const {data, ...sprededProps} = props;

  return (
    <div className="Charts">
      {data.map((serie, serieIndex) => {
        const sortedSerie = serie.slice(0);
        const sum = serie.reduce((carry, current) => carry + current, 0);

        sortedSerie.sort(compareNumbers);

        return React.cloneElement(props.children, {serie, serieIndex, ...sprededProps});
      })}
    </div>
  );
};