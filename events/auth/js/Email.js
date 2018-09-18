const Email = ({onInputChange}) => {
  const handleChange = (evt) => {
    const target = evt.target;
    const value = target.value;
    const validatedEmail = validate(value, 'email');

    target.value = validatedEmail;
    onInputChange(target);
  };

  const props = {
    type: 'email',
    name: 'email',
    placeholder: 'Электронная почта',
    handleChange
  };

  return <Input {...props}/>
};