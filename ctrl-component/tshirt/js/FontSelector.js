const FontSelector = ({fonts, ...rest}) => {
  return (
    <div className="font-picker">
      {fonts.map(font => {
        return <FontSelectItem {...rest} font={font}/>
      })}
    </div>
  );
};