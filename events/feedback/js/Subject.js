const Subject = ({elementRef, subjectList, defaultSubject}) => {
  const labelName = 'Адрес электронной почты';
  const props = {
    id: 'subject',
    name: 'subject',
    value: defaultSubject,
    options: subjectList,
    elementRef,
    labelName,
  };

  return <SelectInput {...props}/>;
}