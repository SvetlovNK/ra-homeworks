const Email = ({elementRef, email}) => {
  const labelName = 'Адрес электронной почты';

  return <TextInput name="email" id="email" elementRef={elementRef} labelName={labelName} defaultValue={email} type="email"/>;
};