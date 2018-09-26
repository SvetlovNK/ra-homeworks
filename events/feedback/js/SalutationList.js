const SalutationList = ({types = [], defaultSalutation}) => {
  return (
    <div className="contact-form__input-group contact-form__input-group--row">
      {types.map(({id, value}) => {
        return (
          <div key={id} className="contact-form__radio-wrapper">
            <input className="contact-form__input contact-form__input--radio"
                   id={id}
                   name="salutation"
                   type="radio"
                   value={value}
                   defaultChecked={defaultSalutation === value}/>
            <label className="contact-form__label contact-form__label--radio" htmlFor={id}>{value}</label>
          </div>
        );
      })}
    </div>
  );
};