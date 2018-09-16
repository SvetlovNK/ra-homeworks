'use strict';

const MessageHistory = ({list = []}) => {

  const massageList = list.map(message => {
    const {id, from, type, time, text} = message;
    const TYPES = {
      responce: 'response',
      messsage: 'message',
      typing: 'typing'
    };

    const props = {
      from,
      message: {
        time,
        text
      }
    };

    switch(type) {
      case TYPES.responce: return <Response key={id} {...props} />;
      case TYPES.messsage: return <Message key={id} {...props} />;
      case TYPES.typing: return <Typing key={id} {...props} />;

      default: return '';
    }
  });

  return (
    <ul>
      {massageList}
    </ul>
  )
};