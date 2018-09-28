const SearchBox = ({value, filterBooks}) => {
  const handleChange = (event) => {
    const target = event.target;

    filterBooks(target.value);
  };

  return (
    <input type="text"
           onChange={handleChange}
           value={value}
           placeholder="Поиск по названию или автору"/>
  );
};