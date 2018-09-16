const Email = ({email}) => {
  const labelName = 'Адрес электронной почты';

  return <TextInput name="email" id="email" labelName={labelName} defaultValue={email} type="email"/>;
};