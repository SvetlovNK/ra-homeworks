const TextInput = ({elementRef, id, name, type, labelName, defaultValue}) => {

  return (
    <div className="contact-form__input-group">
      <label className="contact-form__label" htmlFor={id}>{labelName}</label>
      <input className="contact-form__input contact-form__input--text" ref={elementRef} defaultValue={defaultValue} id={id} name={name}
             type={type}/>
    </div>
  )
};

TextInput.defaultProps = {
  type: 'text',
  labelName: '',
  defaultValue: ''
};