const Input = ({type, name, placeholder = '', required = true, inputRef, handleChange}) => {

  return (
    <div className="Input">
      <input required={required} type={type} name={name} placeholder={placeholder} inputRef={inputRef} onChange={handleChange}/>
      <label/>
    </div>
  )
};