'use strict';

const chainableISODatePropType = createChainableTypeChecker(ISODatePropType);

const DateInput = props => {
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <input type="text" className="form-control" name={props.name} onChange={props.onChange}
             value={props.value} required={props.required} placeholder="YYYY-MM-DD"/>
    </div>
  )
};

DateInput.propTypes = {
  onChange: PropTypes.func.isRequired,

  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: chainableISODatePropType.isRequired,
  required: PropTypes.bool,
};

DateInput.defaultProps = {
  value: new Date().toISOString().slice(0,10),
};