const SalutationList = ({elementRef, types = [], defaultSalutation}) => {
  return (
    <div ref={elementRef} className="contact-form__input-group contact-form__input-group--row">
      {types.map(({id, value}) => {
        return <RadioInput key={id} id={id} name='salutation' value={value} checked={defaultSalutation === value}/>
      })}
    </div>
  )
};