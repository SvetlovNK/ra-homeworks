const Name = ({onInputChange}) => {
  const handleChange = (evt) => {
    const target = evt.target;
    const value = target.value;

    onInputChange(target);
  };

  const props = {
    type: 'text',
    name: 'name',
    placeholder: 'Имя',
    handleChange
  };

  return <Input {...props}/>
};