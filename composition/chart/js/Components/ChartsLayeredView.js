const ChartsLayeredView = ({serie, serieIndex, colors, labels, max, sortedSerie}) => {
  return (
    <div className="Charts--serie layered"
         key={serieIndex}
         style={{height: 250}}
    >
      <label>{labels[serieIndex]}</label>
      {serie.map((item, itemIndex) => {
        const color = colors[itemIndex];
        const size = item / (max) * 100;
        const style = {
          backgroundColor: color,
          opacity: (item / max + .05),
          zIndex: item,
          height: size + '%',
          right: ((sortedSerie.indexOf(item) / (serie.length + 1)) * 100) + '%'
        };

        return (
          <div
            className="Charts--item layered"
            style={style}
            key={itemIndex}
          >
            <b style={{color: color}}>{item}</b>
          </div>
        );
      })}
    </div>
  );
};