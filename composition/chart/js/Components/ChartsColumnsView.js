const ChartsColumnsView = ({serie, serieIndex, colors, labels, max}) => {
  return (
    <div className="Charts--serie"
         style={{height: 250}}
    >
      <label>{labels[serieIndex]}</label>

      {serie.map((item, itemIndex) => {
        const color = colors[itemIndex];
        const size = item / (max) * 100;
        const style = {
          backgroundColor: color,
          opacity: item / max + .05,
          zIndex: item,
          height: size + '%'
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