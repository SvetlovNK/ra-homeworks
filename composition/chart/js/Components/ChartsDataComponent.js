const ChartsDataComponent = (WrappedComponent, horizontal = false) => {
  return function (props) {
    const {data, ...sprededProps} = props;

    return (
      <div className={"Charts " + (horizontal ? 'horizontal' : '')}>
        {data.map((serie, serieIndex) => {
          const sortedSerie = serie.slice(0);
          const sum = serie.reduce((carry, current) => carry + current, 0);
          const componentProps = {
            sortedSerie: sortedSerie.sort(compareNumbers),
            serie,
            serieIndex,
            sum,
            ...sprededProps
          };

          return <WrappedComponent key={serieIndex} {...componentProps} />
        })}
      </div>
    );
  }
};