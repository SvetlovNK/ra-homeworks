const TextInput = ({id, name, type = 'text', labelName = '', defaultValue}) => {

  return (
    <div className="contact-form__input-group">
      <label className="contact-form__label" htmlFor={id}>{labelName}</label>
      <input className="contact-form__input contact-form__input--text" defaultValue={defaultValue} id={id} name={name}
             type={type}/>
    </div>
  )
};