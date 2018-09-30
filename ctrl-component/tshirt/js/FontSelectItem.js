const FontSelectItem = ({selected, onSelect, font}) => {
  const chars = ['a', 'b', 'c'];
  const {name, path} = font;
  const isChecked = name === selected;

  const handleChange = () => {
    onSelect(font);
  };

  return (
    <div className="grid center font-item">
      <input onChange={handleChange} type="radio" name="font" value={name} id={name} defaultChecked={isChecked}/>
      <label htmlFor={name} className="grid-1">
        <div className="picture-font grid">
          {chars.map(char => {
            return (
              <div key={char} className="char">
                <img className="font-img" src={`${path}/${char}.jpg`} alt={char}/>
              </div>
            );
          })}
        </div>
      </label>
    </div>
  );
};