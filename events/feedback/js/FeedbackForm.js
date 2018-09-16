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

  const {salutation, name, subject, message, email, snacks} = data;

  return (
    <form className="content__form contact-form">
      <div className="testing">
        <p>Чем мы можем помочь?</p>
      </div>

      <SalutionList types={SALUTION_TYPES} defaultSalution={salutation} />
      <Name name={name}/>
      <Email email={email}/>

      <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="subject">Чем мы можем помочь?</label>
        <select className="contact-form__input contact-form__input--select" id="subject" name="subject">
          <option>У меня проблема</option>
          <option>У меня важный вопрос</option>
        </select>
      </div>

      <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="message">Ваше сообщение</label>
        <textarea className="contact-form__input contact-form__input--textarea" id="message" name="message" rows="6"
                  cols="65"></textarea>
      </div>
      <div className="contact-form__input-group">
        <p className="contact-form__label--checkbox-group">Хочу получить:</p>
        <input className="contact-form__input contact-form__input--checkbox" id="snacks-pizza" name="snacks"
               type="checkbox" value="пицца"/>
        <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-pizza">Пиццу</label>
        <input className="contact-form__input contact-form__input--checkbox" id="snacks-cake" name="snacks"
               type="checkbox" value="пирог"/>
        <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-cake">Пирог</label>
      </div>
      <button className="contact-form__button" type="submit">Отправить сообщение!</button>
      <output id="result"/>
    </form>
  )
};