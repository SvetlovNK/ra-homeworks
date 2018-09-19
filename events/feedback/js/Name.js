const Name = ({elementRef, name}) => {
  return <TextInput elementRef={elementRef} name="name" id="name" labelName="Имя" defaultValue={name} />;
}