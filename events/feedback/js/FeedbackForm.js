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
      id: 'snacks-pizza',
      text: 'Пиццу',
      value: 'пицца'
    },
    {
      id: 'snacks-cake',
      text: 'Пирог',
      value: 'пирог'
    }
  ];

  const getCheckedInputs = (nodeElements) => {
    const array = [].slice.call(nodeElements);

    return array
      .filter(el => el.checked)
      .map(el => el.value);
  };

  const submitForm = (event) => {
    event.preventDefault();

    const elements = event.target.elements;
    const {salutation, name, email, subject, message, snacks} = elements;

    const data = {
      salutation: salutation.value,
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
      snacks: getCheckedInputs(snacks),
    };

    onSubmit(JSON.stringify(data));
  };

  const {salutation, name, subject, message, email, snacks} = data;

  return (
    <form className="content__form contact-form" onSubmit={submitForm}>
      <div className="testing">
        <p>Чем мы можем помочь?</p>
      </div>

      <SalutationList types={SALUTION_TYPES} defaultSalutation={salutation}/>
      <Name value={name}/>
      <Email value={email}/>
      <Subject subjectList={SUBJECT_LIST} defaultSubject={subject}/>
      <Message defaultMessage={message}/>
      <Snacks snackList={SNACK_LIST} defaultSnacks={snacks}/>

      <button className="contact-form__button" type="submit">Отправить сообщение!</button>
      <output id="result"/>
    </form>
  );
};