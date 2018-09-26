const Subject = ({subjectList, defaultSubject}) => {
  return (
    <div className="contact-form__input-group">
      <label className="contact-form__label" htmlFor="subject">Адрес электронной почты'</label>
      <select className="contact-form__input contact-form__input--select"
              id="subject"
              name="subject"
              defaultValue={defaultSubject}>
        {subjectList.map((option, i) => <option key={i}>{option}</option>)}
      </select>
    </div>
  );
};

Subject.defaultProps = {
  options: [],
  labelName: '',
  value: ''
};