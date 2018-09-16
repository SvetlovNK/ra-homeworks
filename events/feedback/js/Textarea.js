const Textarea = ({id, name, labelName = '', value = '', rows = 6, cols = 65}) => {

  return (
    <div className="contact-form__input-group">
      <label className="contact-form__label" htmlFor={id}>{labelName}</label>
      <textarea className="contact-form__input contact-form__input--text" id={id} name={name}
                defaultValue={value} rows={rows} cols={cols}/>
    </div>
  )
};