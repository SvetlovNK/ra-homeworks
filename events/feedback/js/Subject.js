const Subject = ({subjectList, defaultSubject}) => {
  const labelName = 'Адрес электронной почты';
  const props = {
    id: 'subject',
    name: 'subject',
    value: defaultSubject,
    options: subjectList,
    labelName,
  };

  return <SelectInput {...props}/>;
}