const SelectInput = ({elementRef, id, name, options, labelName, value}) => {
  return (
    <div className="contact-form__input-group">
      <label className="contact-form__label" htmlFor={id}>{labelName}</label>
      <select className="contact-form__input contact-form__input--select" ref={elementRef} id={id} name={name} defaultValue={value}>
        {options.map((option, i) => <option key={i}>{option}</option>)}
      </select>
    </div>
  )
};

SelectInput.defaultProps = {
  options: [],
  labelName: '',
  value: ''
};