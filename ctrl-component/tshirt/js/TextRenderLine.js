const TextRenderLine = ({value, onChange}) => {
  const handleChange = (event) => {
    const target = event.target;

    onChange(target.value);
  };

  return (
    <div className="type-text">
      <textarea name="text" id="font-text" onChange={handleChange} value={value} cols="30" rows="2" placeholder="Введите текст для футболки"></textarea>
    </div>
  );
};
