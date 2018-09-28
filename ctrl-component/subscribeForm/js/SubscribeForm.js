class SubscribeForm extends React.Component {
  state = {
    isValid: true
  };

  handleChange = (event) => {
    const target = event.target;
    const isValidValue = target.validity.valid;

    this.setState({isValid: isValidValue});
  };

  render() {
    const {isValid} = this.state;

    return (
      <div className="subscribe__form">
        <form className={`form form--subscribe ${!isValid ? 'is-error' : 'is-valid'}`}>
          <h4 className="form-title">Подписаться:</h4>
          <div className="form-group">
            <label htmlFor="input-email" className="sr-only">Email</label>
            <input onChange={this.handleChange} type="email" id="input-email" placeholder="Email" className="form-control"/>
            <div className="form-error">Пожалуйста, проверьте корректность адреса электронной почты</div>
            <button type="submit" className="form-next">
              <i className="material-icons">keyboard_arrow_right</i>
            </button>
          </div>
        </form>
      </div>
    )
  }
}