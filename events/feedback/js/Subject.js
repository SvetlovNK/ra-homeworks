const Subject = ({subjectList, defaultSubject}) => {
  const labelName = 'Адрес электронной почты';
  const props = {
    options: subjectList,
    value: defaultSubject,
    name: 'subject',
    id: 'subject',
    labelName,
  };

  return <SelectInput {...props}/>;
}