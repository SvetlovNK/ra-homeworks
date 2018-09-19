const SalutionList = ({types = [], defaultSalution}) => {
  const salutionElements = types.map(({id, value}) => {
    const props = {
      id,
      value,
      name: 'salution',
      checked: defaultSalution === value
    };

    return <RadioInput key={id} {...props}/>
  });

  return (
    <div className="contact-form__input-group contact-form__input-group--row">
      {salutionElements}
    </div>
  )
};