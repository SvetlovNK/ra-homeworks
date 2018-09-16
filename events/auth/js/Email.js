const Email = () => {
  const props = {
    type: 'email',
    placeholder: 'Электронная почта'
  };

  const handleChange = (evt) => {
    const target = evt.target;
    const value = target.value;
    const validatedEmail = preventEmailChars(value);

    target.value = validatedEmail;
  };

  return <Input {...props} handleChange={handleChange}/>
};