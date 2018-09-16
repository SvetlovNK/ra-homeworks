'use strict';

const FeedbackForm = ({data, onSubmit}) => {
  const SALUTION_TYPES = [
    {
      id: 'salutation-mr',
      value: 'Мистер'
    },
    {
      id: 'salutation-mrs',
      value: 'Мисис'
    },
    {
      id: 'salutation-ms',
      value: 'Мис'
    },
  ];

  const SUBJECT_LIST = [
    'У меня проблема',
    'У меня важный вопрос'
  ];

  const SNACK_LIST = [
    {
      id: 'пицца',
      value: 'Пиццу'
    },
    {
      id: 'пирог',
      value: 'Пирог'
    }
  ];

  const {salutation, name, subject, message, email, snacks} = data;

  return (
    <form className="content__form contact-form">
      <div className="testing">
        <p>Чем мы можем помочь?</p>
      </div>

      <SalutionList types={SALUTION_TYPES} defaultSalution={salutation}/>
      <Name name={name}/>
      <Email email={email}/>
      <Subject subjectList={SUBJECT_LIST} defaultSubject={subject}/>
      <Message defaultMessage={message}/>
      <Snacks snackList={SNACK_LIST} defaultSnacks={snacks} />

      <button className="contact-form__button" onSubmit={onSubmit} type="submit">Отправить сообщение!</button>
      <output id="result"/>
    </form>
  )
};