const Email = ({value}) => {
  return (
    <div className="contact-form__input-group">
      <label>Имя</label>
      <input className="contact-form__input contact-form__input--email"
             id="email"
             name="email"
             type="email"
             defaultValue={value}
             required/>
    </div>
  );
};