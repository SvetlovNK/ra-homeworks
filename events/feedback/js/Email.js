const Email = ({email}) => {
  const labelTitle = 'Адрес электронной почты';

  return <TextInput name="email" id="email" labelName={labelTitle} defaultValue={email} type="email"/>;
}