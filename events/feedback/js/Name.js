const Name = ({value}) => {
  return (
    <div className="contact-form__input-group">
      <label>Имя</label>
      <input className="contact-form__input contact-form__input--text"
             id="name"
             name="name"
             type="text"
             defaultValue={value}
             required/>
    </div>
  );
};
