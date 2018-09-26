const Snacks = ({snackList = [], defaultSnacks = []}) => {
  return (
    <div className="contact-form__input-group">
      <p className="contact-form__label--checkbox-group">Хочу получить:</p>

      {snackList.map(({id, text, value}) => {
        return (
          <span key={id} className="contact-form__input-wrapper">
            <input className="contact-form__input contact-form__input--checkbox"
                   id={id}
                   name="snacks"
                   type="checkbox"
                   value={value}
                   defaultChecked={defaultSnacks.some(item => item === value)}/>
            <label className="contact-form__label contact-form__label--radio" htmlFor={id}>{text}</label>
          </span>
        );
      })}
    </div>
  );
};