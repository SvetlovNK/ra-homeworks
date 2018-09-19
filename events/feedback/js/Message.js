const Message = ({elementRef, defaultMessage}) => {
  const labelName = 'Ваше сообщение';
  const props = {
    id: 'message',
    name: 'message',
    value: defaultMessage,
    elementRef,
    labelName,
  };
  return <Textarea {...props}/>
};