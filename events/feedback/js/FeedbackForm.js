'use strict';

const FeedbackForm = ({data, onSubmit}) => {
  const {salutation, name, subject, message, email, snacks} = data;

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

  const inputs = {
    salutation: undefined,
    name: undefined,
    email: undefined,
    subject: undefined,
    message: undefined,
    snacks: undefined
  };

  const getRef = (name) => {
    return function (el) {
      inputs[name] = el
    }
  };

  const getInputValue = (input) => input.value;

  const getRadioValue = (element) => {
    const checkedInput = element.querySelector('input:checked');

    return checkedInput.value;
  };

  const getCheckboxValue = (element) => {
    const checkedInputs = [].slice.call(element.querySelectorAll('input:checked'));

    return (
      checkedInputs && checkedInputs.length > 0 ?
        checkedInputs.map(el => el.value) :
        null
    );
  };

  const submitForm = (event) => {
    event.preventDefault();

    const data = {
      salutation: getRadioValue(inputs.salutation),
      name: getInputValue(inputs.name),
      email: getInputValue(inputs.email),
      subject: getInputValue(inputs.subject),
      message: getInputValue(inputs.message),
      snacks: getCheckboxValue(inputs.snacks)
    };

    onSubmit(JSON.stringify(data));
  };

  return (
    <form className="content__form contact-form" onSubmit={submitForm}>
      <div className="testing">
        <p>Чем мы можем помочь?</p>
      </div>

      <SalutationList elementRef={getRef('salutation')} types={SALUTION_TYPES} defaultSalutation={salutation}/>
      <Name elementRef={getRef('name')} name={name}/>
      <Email elementRef={getRef('email')} email={email}/>
      <Subject elementRef={getRef('subject')} subjectList={SUBJECT_LIST} defaultSubject={subject}/>
      <Message elementRef={getRef('message')} defaultMessage={message}/>
      <Snacks elementRef={getRef('snacks')} snackList={SNACK_LIST} defaultSnacks={snacks}/>

      <button className="contact-form__button" type="submit">Отправить сообщение!</button>
      <output id="result"/>
    </form>
  )
};