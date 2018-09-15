'use strict';

const MessageHistory = ({list = []}) => {

  const massageList = list.map(message => {
    const {id, from, type, time, text} = message;

    const props = {
      from,
      message: {
        time,
        text
      }
    };

    switch(type) {
      case 'response': return <Response key={id} {...props} />;
      case 'message': return <Message key={id} {...props} />;
      case 'typing': return <Typing key={id} {...props} />;

      default: return '';
    }
  });

  return (
    <ul>
      {massageList}
    </ul>
  )
};