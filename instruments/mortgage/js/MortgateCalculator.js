const MortgateCalculator = () => {
  return (
    <div className="form-wrapper">
      <form className="form" action="">
        <Autocomplete onChange={handleAutocompleteChange}/>
        <Inputs onChange={handleInputChange}/>
        <Submit/>
      </form>
    </div>
  )
};

function handleInputChange(evt) {
  const target = evt.target;

  console.log(target.name, target.value);
}

function handleAutocompleteChange(value) {
  console.log('Autocomplete changed:', value);
}