const Snacks = ({elementRef, snackList = [], defaultSnacks}) => {

  return (
    <div ref={elementRef} className="contact-form__input-group">
      <p className="contact-form__label--checkbox-group">Хочу получить:</p>

      {snackList.map(({id, value}) => {
        return <CheckboxInput key={id} id={id} name={'snack'} value={value} checked={defaultSnacks.includes(id)}/>
      })}
    </div>
  );
};