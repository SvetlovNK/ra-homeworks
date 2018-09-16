const Message = ({defaultMessage}) => {
  const labelName = 'Ваше сообщение';
  const props = {
    id: 'message',
    name: 'message',
    value: defaultMessage,
    labelName,
  };
  return <Textarea {...props}/>
};