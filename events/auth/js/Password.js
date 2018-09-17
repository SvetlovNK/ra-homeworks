const Password = ({onInputChange}) => {
  const handleChange = (evt) => {
    const target = evt.target;
    const value = target.value;

    onInputChange(target);
  };

  const props = {
    type: 'password',
    name: 'password',
    placeholder: 'Пароль',
    handleChange
  };

  return <Input {...props}/>
};