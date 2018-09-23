const CharstHorizontalView = ({series, serie, serieIndex, colors, max}) => {
  return (
    <div className="Charts--serie"
         key={serieIndex}
         style={{height: 'auto'}}
    >
      <label>{series[serieIndex]}</label>
      {serie.map((item, itemIndex) => {
        const color = colors[itemIndex];
        const size = item / (max) * 100;
        const style = {
          backgroundColor: color,
          opacity: (item / max + .05),
          zIndex: item,
          width: size + '%'
        };

        return (
          <div
            className="Charts--item"
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