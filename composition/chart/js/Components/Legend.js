const Legend = ({labels, colors}) => {
  return (
    <div className="Legend">
      {labels.map((label, labelIndex) => {
        return (
          <div key={labelIndex}>
            <span className="Legend--color" style={{backgroundColor: colors[labelIndex % colors.length]}}/>
            <span className="Legend--label">{label}</span>
          </div>
        );
      })}
    </div>
  )
}