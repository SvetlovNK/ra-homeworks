const Message = ({elementRef, defaultMessage}) => {
  return (
    <div className="contact-form__input-group">
      <label className="contact-form__label" htmlFor="message">Ваше сообщение</label>
      <textarea className="contact-form__input contact-form__input--text"
                id="message"
                name="message"
                defaultValue={defaultMessage}
                rows="6"
                cols="65"/>
    </div>
  );
};