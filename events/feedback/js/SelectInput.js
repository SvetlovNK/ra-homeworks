const SelectInput = ({id, name, options = [], labelName = '', value = ''}) => {
  const optionsList = options.map((option, i) => <option key={i}>{option}</option>);

  return (
    <div className="contact-form__input-group">
      <label className="contact-form__label" htmlFor={id}>{labelName}</label>
      <select className="contact-form__input contact-form__input--select" id={id} name={name} defaultValue={value}>
        {optionsList}
      </select>
    </div>
  )
};