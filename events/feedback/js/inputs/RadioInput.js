const RadioInput = ({id, name, value, checked}) => {
  return (
    <div className="contact-form__radio-wrapper">
      <input className="contact-form__input contact-form__input--radio" id={id} name={name}
             type="radio" value={value} defaultChecked={checked}/>
      <label className="contact-form__label contact-form__label--radio" htmlFor={id}>{value}</label>
    </div>
  )
};