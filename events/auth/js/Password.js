const Password = ({onInputChange}) => {
  const handleChange = (evt) => {
    const target = evt.target;
    const value = target.value;
    const validatedValue = validate(value, 'password');

    target.value = validatedValue;
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