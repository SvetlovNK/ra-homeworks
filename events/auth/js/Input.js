const Input = ({type, placeholder = '', required = true, handleChange}) => {

  return (
    <div className="Input">
      <input required={required} type={type} placeholder={placeholder} onChange={handleChange}/>
      <label/>
    </div>
  )
};