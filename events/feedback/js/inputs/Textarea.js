const Textarea = ({elementRef, id, name, labelName, value, rows, cols}) => {
  return (
    <div className="contact-form__input-group">
      <label className="contact-form__label" htmlFor={id}>{labelName}</label>
      <textarea className="contact-form__input contact-form__input--text" ref={elementRef} id={id} name={name}
                defaultValue={value} rows={rows} cols={cols}/>
    </div>
  )
};

Textarea.defaultProps = {
  type: 'text',
  labelName: '',
  value: '',
  rows: 6,
  cols: 65
};