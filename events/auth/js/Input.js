const Input = ({type, name, placeholder = '', required = true, handleChange}) => {

  return (
    <div className="Input">
      <input required={required} type={type} name={name} placeholder={placeholder} onChange={handleChange}/>
      <label/>
    </div>
  )
};