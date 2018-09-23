const ChartsStackedView = ({serie, serieIndex, colors, labels, sum}) => {
  return (
    <div className="Charts--serie stacked"
         key={serieIndex}
         style={{height: 250}}
    >
      <label>{labels[serieIndex]}</label>
      {serie.map((item, itemIndex) => {
        const color = colors[itemIndex];
        const size = item / sum * 100;
        const style = {
          backgroundColor: color,
          opacity: 1,
          zIndex: item,
          height: size + '%'
        };

        return (
          <div
            className="Charts--item stacked"
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