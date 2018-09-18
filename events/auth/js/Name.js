const Name = ({onInputChange}) => {
  const handleChange = (evt) => {
    const target = evt.target;
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