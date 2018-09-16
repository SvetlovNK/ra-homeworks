const Snacks = ({snackList = [], defaultSnacks}) => {
  const snacksInputs = snackList.map(({id, value}) => {
    const props = {
      id,
      value,
      name: 'snack',
      checked: defaultSnacks.includes(id)
    };

    return <CheckboxInput key={id} {...props}/>
  });

  return (
    <div className="contact-form__input-group">
      <p className="contact-form__label--checkbox-group">Хочу получить:</p>
      {snacksInputs}
    </div>
  );
}